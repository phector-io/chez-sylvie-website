import { SCROLL_TARGET } from "./Enum";

export interface ICommonContextProviderProps {
    isNavBarOpen: boolean;
    carouselImages: IImageObject[];
    selectedImage: IImageObject | null;
    dishType: string | null;
    dishList: IDishObject[];
    randomDish: IDishObject | null;
    setIsNavBarOpen: (isOpen: boolean) => void;
    setSelectedImages: (selectedImg: IImageObject) => void;
    setDishType: (dish: string) => void;
    scrollToTarget: (target: SCROLL_TARGET) => void;
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
