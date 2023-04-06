import { ReactNode, createContext, useContext, useEffect, useReducer } from "react";

import { IAppContextProviderProps, IImageObject } from "../interfaces/IAppContextProviderProps";
import { DATA_TYPES, SCROLL_TARGET } from "../interfaces/Enum";

import { CommonReducer } from "../reducers/CommonReducer";

import { retrieveData } from "../helpers/QueryHelper";

import AOS from "aos";
import "aos/dist/aos.css";

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

const AppContext = createContext<IAppContextProviderProps>({
    pathname: "",
    isNavBarOpen: false,
    carouselImages: [],
    selectedImage: null,
    getPathname: () => {},
    updateSelectedImage: () => {},
    toggleNavBar: () => {},
    getScreenHeight: () => 0,
    scrollToTarget: () => {},
});

export const useAppContextProvider = () => useContext(AppContext);

export const AppContextProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(CommonReducer, defaultState);

    const getPathname = (pathname: string) => {
        dispatch({
            type: "SET_PATHNAME",
            pathname: pathname,
        });
    };
    
    // Toggle navbar
    const toggleNavBar = () => {
        dispatch({
            type: "SET_TOGGLE_NAVBAR",
            isNavBarOpen: !state.isNavBarOpen,
        });
    };

    // Get carousel images
    const _getImagesData = () => {
        retrieveData(DATA_TYPES.IMAGES).then((result) => {
            // console.log('~> getImagesData > retrieveData', images);
            dispatch({
                type: "SET_CAROUSEL_IMAGES",
                carouselImages: result as IImageObject[],
            });

        });
    };

    // Set selected image
    const updateSelectedImage = (image: IImageObject) => {
        dispatch({
            type: "SET_SELECTED_IMAGE",
            selectedImage: image,
        });
    };

    // Scroll to top or bottom
    const scrollToTarget = (target: SCROLL_TARGET) => {
        const screenHeigth = window.innerHeight;
        window.scrollTo({
            top: target === SCROLL_TARGET.BOTTOM ? screenHeigth : 0,
            behavior: "smooth",
        });
    };

    const getScreenHeight = (): number => {
        return window.innerHeight;
    };

    // First render - Init AOS
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            delay: 50,
        });
    }, []);

    // On pathname changed - Get pathname
    useEffect(() => {
        dispatch({
            type: "SET_TOGGLE_IS_DISHES_PATH",
            isDishesPath: state.pathname === "/plats",
        });
    }, [state.pathname]);

    // Get carousel images where navbar is open
    useEffect(() => {
        if (state.isNavBarOpen && !state.carouselImages.length) {
            _getImagesData();
        }
    }, [state.isNavBarOpen, state.carouselImages]);

    // Set first image as selected
    useEffect(() => {    
        dispatch({
            type: "SET_SELECTED_IMAGE",
            selectedImage: state.carouselImages[0],
        });
    }, [state.carouselImages]);

    const propsValues = {
        pathname: state.pathname,
        isNavBarOpen: state.isNavBarOpen,
        carouselImages: state.carouselImages,
        selectedImage: state.selectedImage,
        getPathname,
        toggleNavBar,
        updateSelectedImage,
        getScreenHeight,
        scrollToTarget,
    };

    return (
        <AppContext.Provider value={propsValues}>
            {children}
        </AppContext.Provider>
    );
};