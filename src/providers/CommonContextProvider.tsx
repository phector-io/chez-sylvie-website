import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { ICommonContextProviderProps, ICarouselImageObject } from "../interfaces/ICommonContextProviderProps";
import rawCarouselImages from "../data/carouselImages.json";
import AOS from "aos";
import "aos/dist/aos.css";

type Props = {
    children: ReactNode;
};

const CommonContext = createContext<ICommonContextProviderProps>({
    isNavBarOpen: false,
    carouselImages: [],
    selectedImage: null,
    setIsNavBarOpen: () => {},
    setSelectedImages: () => {},
});

export const useCommonContextProvider = () => useContext(CommonContext);

export const CommonContextProvider = ({ children }: Props) => {
    const [isNavBarOpen, setIsNavBarOpen] = useState<boolean>(false);
    const [carouselImages, setCarouselImages] = useState<ICarouselImageObject[]>([]);
    const [selectedImage, setSelectedImages] = useState<ICarouselImageObject | null>(null);

    // Carousel
    const getImagesObject = () => {
        const carouselImages: ICarouselImageObject[] = rawCarouselImages;
        setCarouselImages(carouselImages);
    };

    // First render - Init AOS
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            delay: 50,
        });
    }, []);

    // Carousel - Get images
    useEffect(() => {
        console.log('~> ', isNavBarOpen, carouselImages); //DELETE
        if (isNavBarOpen && !carouselImages.length) {
            getImagesObject();
        }
    }, [isNavBarOpen, carouselImages]);

    // Carousel - Set first image as selected
    useEffect(() => {
        setSelectedImages(carouselImages[0]);
    }, [carouselImages]);

    const propsValues = {
        isNavBarOpen,
        carouselImages,
        selectedImage,
        setIsNavBarOpen,
        setSelectedImages,
    };

    return (
        <CommonContext.Provider value={propsValues}>
            {children}
        </CommonContext.Provider>
    );
};