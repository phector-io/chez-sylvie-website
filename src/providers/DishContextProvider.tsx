import { ReactNode, createContext, useContext, useEffect, useReducer } from "react";

import { useAppContextProvider } from "./AppContextProvider";

import { IDishContextProviderProps, IDishObject, IOrder } from "../interfaces/IDishContextProviderProps";
import { ALERT_ACTION, DATA_TYPES } from "../interfaces/Enum";

import { CommonReducer } from "../reducers/CommonReducer";

import { retrieveData } from "../helpers/QueryHelper";
import { filterDishes, getRandomDish } from "../helpers/Helper";

import { SettingsHelper } from "../helpers/SettingsHelper";

type Props = {
    children: ReactNode;
};

const defaultState = {
    isDishesPath: false,
    dishType: "",
    allDishes: [],
    dishList: [],
    showRandomDish: false,
    isRandomRunning: false,
    newRandomDish: null,
    showMyOrder: false,
    order: [],
};

const DishContext = createContext<IDishContextProviderProps>({
    dishType: "",
    dishList: [],
    showRandomDish: false,
    isRandomRunning: false,
    newRandomDish: null,
    showMyOrder: false,
    order: [],
    alertPopup: false,
    launchRandomDish: () => {},
    updateSelectedDishType: () => {},
    updateOrder: () => {},
    deleteDishFromOrder: () => {},
    openAlertPopup: () => {},
    handleAlertAction: () => {},
});

export const useDishContextProvider = () => useContext(DishContext);

export const DishContextProvider = ({ children }: Props) => {
    const { pathname } = useAppContextProvider();
    const [state, dispatch] = useReducer(CommonReducer, defaultState);

    // Get dishes data
    const _getDishesData = () => {
        retrieveData(DATA_TYPES.DISHES).then((result) => {
            // console.log('~> getDishesData > retrieveData', result);
            dispatch({
                type: "SET_ALL_DISHES",
                allDishes: result as IDishObject[],
            });
        });
    };

    // Set dish type
    const updateSelectedDishType = (type: string) => {
        dispatch({
            type: "SET_DISH_TYPE",
            dishType: type,
        });
    };

    // Filter dishes by type or show random dish
    const _onChangeSelectedDishType = (type: string) => {
        if (type === SettingsHelper.getSetting("random_dishes_title")) {
            dispatch({
                type: "SET_ON_CHANGE_DISH_TYPE",
                dishList: [],
                showRandomDish: true,
                showMyOrder: false,
            })
        } else if (type === SettingsHelper.getSetting("see_my_order_title")) {
            dispatch({
                type: "SET_ON_CHANGE_DISH_TYPE",
                dishList: [],
                showRandomDish: false,
                showMyOrder: true,
            })
        } else {
            dispatch({
                type: "SET_ON_CHANGE_DISH_TYPE",
                dishList: filterDishes(state.allDishes, type),
                showRandomDish: false,
                showMyOrder: false,
            })
        }
    };

    // Launch random dish
    const launchRandomDish = (categories: string[]) => {
        dispatch({
            type: "SET_ON_LAUNCH_RANDOM_DISH",
            isRandomRunning: true,
            newRandomDish: null,
        });
    
        setTimeout(() => {
            dispatch({
                type: "SET_ON_LAUNCH_RANDOM_DISH",
                isRandomRunning: false,
                newRandomDish: getRandomDish(state.allDishes, categories),
            });
        }, 2000);
    };

    // Update order
    const updateOrder = (order: IOrder) => {
        const { dish, quantity } = order;
        const currentOrder = state.order ? [...state.order] : [];
    
        const index = currentOrder.findIndex((item) => item.dish.name === dish.name);

        if (index !== -1) {
            currentOrder[index].quantity = quantity;
            if (quantity === 0) {
                currentOrder.splice(index, 1);
            }
        } else {
            currentOrder.push(order);
        }
    
        localStorage.setItem(SettingsHelper.getSetting("order_cache_key"), JSON.stringify(currentOrder));
        dispatch({
            type: "SET_ORDER",
            order: currentOrder,
        });
    };
    
    // Delete dish from order
    const deleteDishFromOrder = (dishName: string) => {
        const currentOrder = state.order;
        const newOrder = currentOrder.filter((item: IOrder) => item.dish.name !== dishName);
    
        localStorage.setItem(SettingsHelper.getSetting("order_cache_key"), JSON.stringify(newOrder));
        dispatch({
            type: "SET_ORDER",
            order: newOrder,
        });
    };

    // Open alert popup on click delete order
    const openAlertPopup = () => {
        dispatch({
            type: "SET_ALERT_POPUP",
            alertPopup: true
        });
    };

    const handleAlertAction = (action: ALERT_ACTION) => {
        if (action === ALERT_ACTION.CONFIRM) {
            clearOrder();
        }
        dispatch({
            type: "SET_ALERT_POPUP",
            alertPopup: false
        });
    };

    // Clear order
    const clearOrder = () => {
        localStorage.removeItem(SettingsHelper.getSetting("order_cache_key"));
        dispatch({
            type: "SET_ORDER",
            order: [],
        });
    };

    // Retrieve order from cache on first render
    useEffect(() => {
        const cachedOrder = localStorage.getItem(SettingsHelper.getSetting("order_cache_key"));
        if (cachedOrder) {
            dispatch({
                type: "SET_ORDER",
                order: JSON.parse(cachedOrder),
            });
        }
    }, []);
    
    // Get dishes where location is "/plats"
    useEffect(() => {
        if (pathname === SettingsHelper.getSetting("route_path_menu")) {
            _getDishesData();
            dispatch({
                type: "SET_DISH_TYPE",
                dishType: SettingsHelper.getSetting("all_dishes_title"),
            });
        }
    }, [pathname]);

    // Filter dishes by type 
    useEffect(() => {
        _onChangeSelectedDishType(state.dishType);
    
        dispatch({
            type: "SET_NEW_RANDOM_DISH",
            newRandomDish: null,
        });
    }, [state.dishType]);

    // Set dishList "all dishes"
    useEffect(() => {
        if (state.allDishes.length) {
            dispatch({
                type: "SET_DISH_LIST",
                dishList: state.allDishes,
            });
        }
    }, [state.allDishes]);

    const propsValues = {
        dishType: state.dishType,
        dishList: state.dishList,
        showRandomDish: state.showRandomDish,
        isRandomRunning: state.isRandomRunning,
        newRandomDish: state.newRandomDish,
        showMyOrder: state.showMyOrder,
        order: state.order,
        alertPopup: state.alertPopup,
        launchRandomDish,
        updateSelectedDishType,
        updateOrder,
        deleteDishFromOrder,
        openAlertPopup,
        handleAlertAction,
    };

    return (
        <DishContext.Provider value={propsValues}>
            {children}
        </DishContext.Provider>
    );
};