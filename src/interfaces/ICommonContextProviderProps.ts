export interface ICommonContextProviderProps {
    isNavBarOpen: boolean;
    carouselImages: ICarouselImageObject[];
    selectedImage: ICarouselImageObject | null;
    setIsNavBarOpen: (isOpen: boolean) => void;
    setSelectedImages: (selectedImg: ICarouselImageObject) => void;
}

export interface ICarouselImageObject {
    id: string;
    title: string;
    source: string;
}

export interface IQuizContextProps {}

export interface IDishContextProps {}
