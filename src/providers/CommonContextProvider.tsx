import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { ICommonContextProviderProps, ICarouselImageObject } from "../interfaces/ICommonContextProviderProps";
import rawCarouselImages from "../data/carouselImages.json";

type Props = {
    children: ReactNode;
};

const CommonContext = createContext<ICommonContextProviderProps>({
    carouselImages: [],
    selectedImage: null,
    setSelectedImages: () => {},
});

export const useCommonContextProvider = () => useContext(CommonContext);

export const CommonContextProvider = ({ children }: Props) => {
    const [carouselImages, setCarouselImages] = useState<ICarouselImageObject[]>([]);
    const [selectedImage, setSelectedImages] = useState<ICarouselImageObject | null>(null);

    // Carousel
    const getImagesObject = () => {
        const carouselImages: ICarouselImageObject[] = rawCarouselImages;
        setCarouselImages(carouselImages);
    };

    useEffect(() => {
        getImagesObject();
    }, []);

    useEffect(() => {
        setSelectedImages(carouselImages[0]);
    }, [carouselImages]);

    const propsValues = {
        carouselImages,
        selectedImage,
        setSelectedImages,
    };

    return (
        <CommonContext.Provider value={propsValues}>
            {children}
        </CommonContext.Provider>
    );
};