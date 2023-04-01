export interface ICommonContextProviderProps {
    carouselImages: ICarouselImageObject[];
    selectedImage: ICarouselImageObject | null;
    setSelectedImages: (selectedImg: ICarouselImageObject) => void;
}

export interface ICarouselImageObject {
    id: string;
    title: string;
    source: string;
}

export interface IQuizContextProps {}

export interface IDishContextProps {}
