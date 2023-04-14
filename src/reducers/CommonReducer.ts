import { IImageObject } from "../interfaces/IAppContextProviderProps"; 
import { IDishObject, IOrder } from "../interfaces/IDishContextProviderProps";
import { IQuizObject } from "../interfaces/IQuizContextProviderProps";

export const ACTIONS = {
    // AppContext
    SET_INFO_POPUP: "SET_INFO_POPUP",
    SET_PATHNAME: "SET_PATHNAME",
    SET_TOGGLE_NAVBAR: "SET_TOGGLE_NAVBAR",
    SET_CAROUSEL_IMAGES: "SET_CAROUSEL_IMAGES",
    SET_SELECTED_IMAGE: "SET_SELECTED_IMAGE",
    SET_TOGGLE_IS_DISHES_PATH: "SET_TOGGLE_IS_DISHES_PATH",

    // DishContext
    SET_DISH_TYPE: "SET_DISH_TYPE",
    SET_ALL_DISHES: "SET_ALL_DISHES",
    SET_ON_CHANGE_DISH_TYPE: "SET_ON_CHANGE_DISH_TYPE",
    SET_DISH_LIST: "SET_DISH_LIST",
    SET_ON_LAUNCH_RANDOM_DISH: "SET_ON_LAUNCH_RANDOM_DISH",
    SET_NEW_RANDOM_DISH: "SET_NEW_RANDOM_DISH",
    SET_ORDER: "SET_ORDER",
    SET_ALERT_POPUP: "SET_ALERT_POPUP",

    // QuizContext
    SET_QUIZ_LAUNCHED: "SET_QUIZ_LAUNCHED",
    SET_QUIZ_LIST: "SET_QUIZ_LIST",
    SET_QUIZ_PROGRESS: "SET_QUIZ_PROGRESS",
    SET_NEW_ANSWER: "SET_NEW_ANSWER",
    SET_NEXT_QUESTION: "SET_NEXT_QUESTION",
    SET_QUIZ_FINISHED: "SET_QUIZ_FINISHED",
    SET_RESET_QUIZ: "SET_RESET_QUIZ",
};

export const CommonReducer = (
    state: any,
    action: {
        type: string;
        // AppContext
        infoPopup?: boolean;
        pathname?: string;
        isNavBarOpen?: boolean;
        carouselImages?: IImageObject[];
        selectedImage?: IImageObject | null;
        isDishesPath?: boolean;

        // DishContext
        dishType?: string;
        allDishes?: IDishObject[];
        dishList?: IDishObject[];
        showRandomDish?: boolean;
        showMyOrder?: boolean;
        isRandomRunning?: boolean;
        newRandomDish?: IDishObject | null;
        order?: IOrder[];
        alertPopup?: boolean;

        // QuizContext
        quizLaunched?: boolean;
        quizList?: IQuizObject[];
        quizProgress?: number;
        hasAnswered?: boolean;
        writeAnswers?: number;
        quizFinished?: boolean;
    }
) => {
    switch (action.type) {
        // AppContext
        case ACTIONS.SET_INFO_POPUP:
            return { ...state, infoPopup: action.infoPopup };
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

        // DishContext
        case ACTIONS.SET_DISH_TYPE:
            return { ...state, dishType: action.dishType };
        case ACTIONS.SET_ALL_DISHES:
            return { ...state, allDishes: action.allDishes };
            case ACTIONS.SET_ON_CHANGE_DISH_TYPE:
                return { ...state, dishList: action.dishList, showRandomDish: action.showRandomDish, showMyOrder: action.showMyOrder };
        case ACTIONS.SET_DISH_LIST:
            return { ...state, dishList: action.dishList };
        case ACTIONS.SET_ON_LAUNCH_RANDOM_DISH:
            return { ...state, isRandomRunning: action.isRandomRunning, newRandomDish: action.newRandomDish };
        case ACTIONS.SET_NEW_RANDOM_DISH:
            return { ...state, newRandomDish: action.newRandomDish };
        case ACTIONS.SET_ORDER:
            return { ...state, order: action.order };
        case ACTIONS.SET_ALERT_POPUP:
            return { ...state, alertPopup: action.alertPopup };

        // QuizContext
        case ACTIONS.SET_QUIZ_LAUNCHED:
            return { ...state, quizLaunched: action.quizLaunched };
        case ACTIONS.SET_QUIZ_LIST:
            return { ...state, quizList: action.quizList };
        case ACTIONS.SET_QUIZ_PROGRESS:
            return { ...state, quizProgress: action.quizProgress };
        case ACTIONS.SET_NEW_ANSWER:
            return { ...state, hasAnswered: action.hasAnswered, writeAnswers: action.writeAnswers };
        case ACTIONS.SET_NEXT_QUESTION:
            return { ...state, quizProgress: action.quizProgress, hasAnswered: action.hasAnswered };
        case ACTIONS.SET_QUIZ_FINISHED:
            return { ...state, quizFinished: action.quizFinished };
        case ACTIONS.SET_RESET_QUIZ:
            return { ...state, quizLaunched: action.quizLaunched, quizProgress: action.quizProgress, hasAnswered: action.hasAnswered, writeAnswers: action.writeAnswers, quizFinished: action.quizFinished };

        default:
            return state;
    }
};