import { IDishObject, IImageObject } from "../interfaces/ICommonContextProviderProps";

export const ACTIONS = {
    SET_PATHNAME: "SET_PATHNAME",
    SET_TOGGLE_NAVBAR: "SET_TOGGLE_NAVBAR",
    SET_CAROUSEL_IMAGES: "SET_CAROUSEL_IMAGES",
    SET_SELECTED_IMAGE: "SET_SELECTED_IMAGE",
    SET_TOGGLE_IS_DISHES_PATH: "SET_TOGGLE_IS_DISHES_PATH",
    SET_DISH_TYPE: "SET_DISH_TYPE",
    SET_ALL_DISHES: "SET_ALL_DISHES",
    SET_ON_CHANGE_DISH_TYPE: "SET_ON_CHANGE_DISH_TYPE",
    SET_DISH_LIST: "SET_DISH_LIST",
    SET_ON_LAUNCH_RANDOM_DISH: "SET_ON_LAUNCH_RANDOM_DISH",
    SET_NEW_RANDOM_DISH: "SET_NEW_RANDOM_DISH",
};

export const CommonReducer = (
    state: any,
    action: {
        type: string;
        pathname?: string;
        isNavBarOpen?: boolean;
        carouselImages?: IImageObject[];
        selectedImage?: IImageObject | null;
        isDishesPath?: boolean;
        dishType?: string;
        allDishes?: IDishObject[];
        dishList?: IDishObject[];
        showRandomDish?: boolean;
        isRandomRunning?: boolean;
        newRandomDish?: IDishObject | null;
    }
) => {
    switch (action.type) {
        case ACTIONS.SET_PATHNAME:
            return { ...state, pathname: action.pathname };
        case ACTIONS.SET_TOGGLE_NAVBAR:
            return { ...state, isNavBarOpen: action.isNavBarOpen };
        case ACTIONS.SET_CAROUSEL_IMAGES:
            return { ...state, carouselImages: action.carouselImages };
        case ACTIONS.SET_SELECTED_IMAGE:
            return { ...state, selectedImage: action.selectedImage };
        case ACTIONS.SET_TOGGLE_IS_DISHES_PATH:
            return { ...state, isDishesPath: action.isDishesPath };
        case ACTIONS.SET_DISH_TYPE:
            return { ...state, dishType: action.dishType };
        case ACTIONS.SET_ALL_DISHES:
            return { ...state, allDishes: action.allDishes };
            case ACTIONS.SET_ON_CHANGE_DISH_TYPE:
                return { ...state, dishList: action.dishList, showRandomDish: action.showRandomDish };
        case ACTIONS.SET_DISH_LIST:
            return { ...state, dishList: action.dishList };
        case ACTIONS.SET_ON_LAUNCH_RANDOM_DISH:
            return { ...state, isRandomRunning: action.isRandomRunning, newRandomDish: action.newRandomDish };
        case ACTIONS.SET_NEW_RANDOM_DISH:
            return { ...state, newRandomDish: action.newRandomDish };

        default:
            return state;
    }
};