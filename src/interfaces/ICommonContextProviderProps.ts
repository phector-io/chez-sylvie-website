import { SCROLL_TARGET } from "./Enum";

export interface ICommonContextProviderProps {
    isNavBarOpen: boolean;
    carouselImages: IImageObject[];
    selectedImage: IImageObject | null;
    dishType: string;
    dishList: IDishObject[];
    showRandomDish: boolean;
    isRandomRunning: boolean;
    newRandomDish: IDishObject | null;
    getPathname: (pathname: string) => void;
    launchRandomDish: (categories: string[]) => void;
    scrollToTarget: (target: SCROLL_TARGET) => void;
    toggleNavBar: () => void;
    updateSelectedImage: (image: IImageObject) => void;
    updateSelectedDishType: (type: string) => void;
}

export interface IRawData {
    images: IImageObject[];
    dishes: IDishObject[];
    quiz: IQuestionObject[];
}

export interface IImageObject {
    id: string;
    title: string;
    source: string;
}
export interface IDishObject {
    type: string;
    name: string;
    descr: string;
    price: string;
}

export interface IQuestionObject {}
