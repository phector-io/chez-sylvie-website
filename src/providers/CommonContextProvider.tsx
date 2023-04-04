import { ReactNode, createContext, useContext, useEffect, useState } from "react";

import { ICommonContextProviderProps, IDishObject, IImageObject } from "../interfaces/ICommonContextProviderProps";

import AOS from "aos";
import "aos/dist/aos.css";
import { retrieveData } from "../helpers/CommonQueryHelper";
import { DATA_TYPES, SCROLL_TARGET } from "../interfaces/Enum";
import { SettingsHelper } from "../helpers/SettingsHelper";
import { filterDishes } from "../helpers/Helper";

type Props = {
    children: ReactNode;
};

const CommonContext = createContext<ICommonContextProviderProps>({
    isNavBarOpen: false,
    carouselImages: [],
    selectedImage: null,
    dishType: "",
    dishList: [],
    randomDish: null,
    setIsNavBarOpen: () => {},
    setSelectedImages: () => {},
    getPathname: () => {},
    setDishType: () => {},
    scrollToTarget: () => {},
});

export const useCommonContextProvider = () => useContext(CommonContext);

export const CommonContextProvider = ({ children }: Props) => {
    const [isNavBarOpen, setIsNavBarOpen] = useState<boolean>(false);
    const [carouselImages, setCarouselImages] = useState<IImageObject[]>([]);
    const [selectedImage, setSelectedImages] = useState<IImageObject | null>(null);
    const [isDishesPath, setIsDishesPath] = useState<boolean>(false);
    const [dishType, setDishType] = useState<string>("");
    const [savedDishData, setSavedDishData] = useState<IDishObject[]>([]);
    const [dishList, setDishList] = useState<IDishObject[]>([]);
    const [randomDish, setRandomDish] = useState<IDishObject | null>(null);

    // Carousel
    const _getImagesData = () => {
        retrieveData(DATA_TYPES.IMAGES).then((images) => {
            // console.log('~> getImagesData > retrieveData', images);
            setCarouselImages(images as IImageObject[]);
        });
    };

    const getPathname = (pathname: string) => {
        setIsDishesPath(pathname === "/plats");
    };

    // Dishes
    const _getDishesData = () => {
        retrieveData(DATA_TYPES.DISHES).then((res) => {
            // console.log('~> getDishesData > retrieveData', res);
            setSavedDishData(res as IDishObject[]);
        });
    };

    // Dishes
    const _handleOnChosenType = (type: string) => {
        if (type === SettingsHelper.getSetting("random_dishes_title")) {
            const randomDish = savedDishData[Math.floor(Math.random() * savedDishData.length)];
            setRandomDish(randomDish);
            setDishList([]);
        } else {
            const filteredDishes = filterDishes(savedDishData, type);
            setDishList(filteredDishes);
            setRandomDish(null);
        }
    };

    // UI
    const scrollToTarget = (target: SCROLL_TARGET) => {
        const screenHeigth = window.innerHeight;
        window.scrollTo({
            top: target === SCROLL_TARGET.BOTTOM ? screenHeigth : 0,
            behavior: "smooth",
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
            _getImagesData();
        }
    }, [isNavBarOpen, carouselImages]);

    // Carousel - Set first image as selected
    useEffect(() => {
        setSelectedImages(carouselImages[0]);
    }, [carouselImages]);

    // Dishes - Get dishes where location is "/plats"
    useEffect(() => {
        if (isDishesPath) {
            _getDishesData();
            setDishType(SettingsHelper.getSetting("all_dishes_title"));
        }
    }, [isDishesPath]);
    
    // Dishes - First render - Set dishList "all dishes"
    useEffect(() => {
        if (savedDishData.length) {
            setDishList(savedDishData);
        }
    }, [savedDishData]);

    // Dishes - Filter dishes by type
    useEffect(() => {
        _handleOnChosenType(dishType);
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
        getPathname,
        setDishType,
        scrollToTarget,
    };

    return (
        <CommonContext.Provider value={propsValues}>
            {children}
        </CommonContext.Provider>
    );
};