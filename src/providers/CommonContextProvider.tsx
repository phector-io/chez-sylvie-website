import { ReactNode, createContext, useContext, useEffect, useReducer, useState } from "react";

import { ICommonContextProviderProps, IDishObject, IImageObject } from "../interfaces/ICommonContextProviderProps";

import AOS from "aos";
import "aos/dist/aos.css";
import { retrieveData } from "../helpers/CommonQueryHelper";
import { DATA_TYPES, SCROLL_TARGET } from "../interfaces/Enum";
import { SettingsHelper } from "../helpers/SettingsHelper";
import { filterDishes, getRandomDish } from "../helpers/Helper";
import { CommonReducer } from "../reducers/CommonReducer";

type Props = {
    children: ReactNode;
};

const defaultState = {
    pathname: "",
    isNavBarOpen: false,
    carouselImages: [],
    selectedImage: null,
    isDishesPath: false,
    dishType: "",
    allDishes: [],
    dishList: [],
    showRandomDish: false,
    isRandomRunning: false,
    newRandomDish: null,
};

const CommonContext = createContext<ICommonContextProviderProps>({
    isNavBarOpen: false,
    carouselImages: [],
    selectedImage: null,
    dishType: "",
    dishList: [],
    showRandomDish: false,
    isRandomRunning: false,
    newRandomDish: null,
    getPathname: () => {},
    launchRandomDish: () => {},
    scrollToTarget: () => {},
    toggleNavBar: () => {},
    updateSelectedImage: () => {},
    updateSelectedDishType: () => {},
});

export const useCommonContextProvider = () => useContext(CommonContext);

export const CommonContextProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(CommonReducer, defaultState);

    const getPathname = (pathname: string) => {
        dispatch({
            type: "SET_PATHNAME",
            pathname: pathname,
        });
    };
    
    // Navbar - Toggle navbar
    const toggleNavBar = () => {
        dispatch({
            type: "SET_TOGGLE_NAVBAR",
            isNavBarOpen: !state.isNavBarOpen,
        });
    };

    // Carousel - Get images data
    const _getImagesData = () => {
        retrieveData(DATA_TYPES.IMAGES).then((result) => {
            // console.log('~> getImagesData > retrieveData', images);
            dispatch({
                type: "SET_CAROUSEL_IMAGES",
                carouselImages: result as IImageObject[],
            });

        });
    };

    // Carousel - Set selected image
    const updateSelectedImage = (image: IImageObject) => {
        dispatch({
            type: "SET_SELECTED_IMAGE",
            selectedImage: image,
        });
    };

    // Dishes - Get dishes data
    const _getDishesData = () => {
        retrieveData(DATA_TYPES.DISHES).then((result) => {
            // console.log('~> getDishesData > retrieveData', result);
            dispatch({
                type: "SET_ALL_DISHES",
                allDishes: result as IDishObject[],
            });
        });
    };

    // Dishes - Set dish type
    const updateSelectedDishType = (type: string) => {
        dispatch({
            type: "SET_DISH_TYPE",
            dishType: type,
        });
    };

    // Dishes
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

    // Random dish - Launch random dish
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

    // UI - Scroll to top or bottom
    const scrollToTarget = (target: SCROLL_TARGET) => {
        const screenHeigth = window.innerHeight;
        window.scrollTo({
            top: target === SCROLL_TARGET.BOTTOM ? screenHeigth : 0,
            behavior: "smooth",
        });
    };

    // First render - Init AOS
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            delay: 50,
        });
    }, []);

    useEffect(() => {
        dispatch({
            type: "SET_TOGGLE_IS_DISHES_PATH",
            isDishesPath: state.pathname === "/plats",
        });
    }, [state.pathname]);

    // Carousel - Get images where navbar is open
    useEffect(() => {
        if (state.isNavBarOpen && !state.carouselImages.length) {
            _getImagesData();
        }
    }, [state.isNavBarOpen, state.carouselImages]);

    // Carousel - Set first image as selected
    useEffect(() => {    
        dispatch({
            type: "SET_SELECTED_IMAGE",
            selectedImage: state.carouselImages[0],
        });
    }, [state.carouselImages]);

    // Dishes - Get dishes where location is "/plats"
    useEffect(() => {
        if (state.isDishesPath) {
            _getDishesData();
            dispatch({
                type: "SET_DISH_TYPE",
                dishType: SettingsHelper.getSetting("all_dishes_title"),
            });
        }
    }, [state.isDishesPath]);

    // Dishes - Filter dishes by type 
    useEffect(() => {
        _onChangeSelectedDishType(state.dishType);
    
        dispatch({
            type: "SET_NEW_RANDOM_DISH",
            newRandomDish: null,
        });
    }, [state.dishType]);
    
    // Dishes - First render - Set dishList "all dishes"
    useEffect(() => {
        if (state.allDishes.length) {
            dispatch({
                type: "SET_DISH_LIST",
                dishList: state.allDishes,
            });
        }
    }, [state.allDishes]);

    const propsValues = {
        isNavBarOpen: state.isNavBarOpen,
        carouselImages: state.carouselImages,
        selectedImage: state.selectedImage,
        dishType: state.dishType,
        dishList: state.dishList,
        showRandomDish: state.showRandomDish,
        isRandomRunning: state.isRandomRunning,
        newRandomDish: state.newRandomDish,
        getPathname,
        launchRandomDish,
        scrollToTarget,
        toggleNavBar,
        updateSelectedImage,
        updateSelectedDishType,
    };

    return (
        <CommonContext.Provider value={propsValues}>
            {children}
        </CommonContext.Provider>
    );
};