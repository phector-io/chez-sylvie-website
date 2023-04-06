import { ReactNode, createContext, useContext, useEffect, useReducer } from "react";

import { useAppContextProvider } from "./AppContextProvider";

import { IDishContextProviderProps, IDishObject } from "../interfaces/IDishContextProviderProps";
import { DATA_TYPES } from "../interfaces/Enum";

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
};

const DishContext = createContext<IDishContextProviderProps>({
    dishType: "",
    dishList: [],
    showRandomDish: false,
    isRandomRunning: false,
    newRandomDish: null,
    launchRandomDish: () => {},
    updateSelectedDishType: () => {},
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
            })
        } else {
            dispatch({
                type: "SET_ON_CHANGE_DISH_TYPE",
                dishList: filterDishes(state.allDishes, type),
                showRandomDish: false,
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
        launchRandomDish,
        updateSelectedDishType,
    };

    return (
        <DishContext.Provider value={propsValues}>
            {children}
        </DishContext.Provider>
    );
};