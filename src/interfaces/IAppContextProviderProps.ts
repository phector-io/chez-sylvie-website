import { SCROLL_TARGET } from "./Enum";

export interface IAppContextProviderProps {
    infoPopup: boolean;
    pathname: string;
    isNavBarOpen: boolean;
    carouselImages: IImageObject[];
    selectedImage: IImageObject | null;
    closePopup: () => void;
    getPathname: (pathname: string) => void;
    toggleNavBar: () => void;
    updateSelectedImage: (image: IImageObject) => void;
    getScreenHeight: () => number;
    scrollToTarget: (target: SCROLL_TARGET) => void;
}

export interface IImageObject {
    id: string;
    title: string;
    source: string;
}
