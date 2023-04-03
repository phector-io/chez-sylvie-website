import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { ICommonContextProviderProps, IDishObject, IImageObject } from "../interfaces/ICommonContextProviderProps";

import AOS from "aos";
import "aos/dist/aos.css";
import { retrieveData } from "../helpers/CommonQueryHelper";
import { DATA_TYPES, SCROLL_TARGET } from "../interfaces/Enum";

type Props = {
    children: ReactNode;
};

const CommonContext = createContext<ICommonContextProviderProps>({
    isNavBarOpen: false,
    carouselImages: [],
    selectedImage: null,
    dishType: null,
    dishList: [],
    randomDish: null,
    setIsNavBarOpen: () => {},
    setSelectedImages: () => {},
    setDishType: () => {},
    scrollToTarget: () => {},
});

export const useCommonContextProvider = () => useContext(CommonContext);

export const CommonContextProvider = ({ children }: Props) => {
    const [isNavBarOpen, setIsNavBarOpen] = useState<boolean>(false);
    const [carouselImages, setCarouselImages] = useState<IImageObject[]>([]);
    const [selectedImage, setSelectedImages] = useState<IImageObject | null>(null);
    const [dishType, setDishType] = useState<string | null>(null);
    const [dishList, setDishList] = useState<IDishObject[]>([]);
    const [randomDish, setRandomDish] = useState<IDishObject | null>(null);

    // Carousel - Get images
    const getImagesData = () => {
        retrieveData(DATA_TYPES.IMAGES).then((images) => {
            setCarouselImages(images as IImageObject[]);
        });
    };

    // Dishes - Get dishes
    const getDishesData = (type: string) => {
        retrieveData(DATA_TYPES.DISHES).then((dishes) => {
            const dishesList = dishes as IDishObject[];
            if (type === "plat aléatoire") {
                const filtered = dishesList.filter((dish) => {
                    return dish.type !== "boissons" && dish.type !== "desserts" && dish.type !== "enfants";
                });
                setDishList([]);
                setRandomDish(filtered[Math.floor(Math.random() * filtered.length)]);
            } else {
                const filteredDishes = dishesList.filter((dish) => dish.type === type);
                setDishList(filteredDishes as IDishObject[]);
                setRandomDish(null);
            }
            setDishType(null);
        });
    };

    //FIXME: Only work on second click
    // ScrollTo
    const scrollToTarget = (target: SCROLL_TARGET) => {
        const screenHeigth = window.innerHeight;
        window.scrollTo({
            top: target === SCROLL_TARGET.TOP ? 0 : screenHeigth,
            behavior: "smooth"
        });
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
        if (isNavBarOpen && !carouselImages.length) {
            getImagesData();
        }
    }, [isNavBarOpen, carouselImages]);

    // Carousel - Set first image as selected
    useEffect(() => {
        setSelectedImages(carouselImages[0]);
    }, [carouselImages]);

    // Dishes - Get dishes
    useEffect(() => {
        if (dishType) {
            getDishesData(dishType);
        }
    }, [dishType]);

    const propsValues = {
        isNavBarOpen,
        carouselImages,
        selectedImage,
        dishType,
        dishList,
        randomDish,
        setIsNavBarOpen,
        setSelectedImages,
        setDishType,
        scrollToTarget,
    };

    return (
        <CommonContext.Provider value={propsValues}>
            {children}
        </CommonContext.Provider>
    );
};