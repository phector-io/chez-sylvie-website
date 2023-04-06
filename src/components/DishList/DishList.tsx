import { FC, useEffect } from "react";

import { useCommonContextProvider } from "../../providers/CommonContextProvider";

import Header from "../Header/Header";

import { HEADER_TYPE } from "../../interfaces/Enum";

import { useLocation } from "react-router-dom";

import styles from "./style.module.css";
import { SettingsHelper } from "../../helpers/SettingsHelper";
import RandomDish from "../RandomDish/RandomDish";
import ScrollTop from "../ScrollTop/ScrollTop";
import DishItem from "../DishItem/DishItem";

const DishList: FC = (): JSX.Element => {
    const { dishType, dishList, showRandomDish, getPathname } = useCommonContextProvider();
    const { pathname } = useLocation();

    useEffect(() => {
        getPathname(pathname);
    }, []);

    return (
        <div id="dishes" className={styles.dishes}>
            <Header type={HEADER_TYPE.DISHES} />
            <div className={styles.dishes__container}>
                <h1>{dishType}</h1>
                {showRandomDish && (
                    <p className={styles.random__form__info}>{SettingsHelper.getSetting("random_form_info")}</p>
                )}
                {!showRandomDish ? (
                    <div className={styles.dishes__content}>
                        <ul className={styles.dishes__list}>
                            {dishList.map((dish, idx) => (
                                <DishItem key={idx} item={dish} />
                            ))}
                        </ul>
                        <ScrollTop />
                    </div>
                ) : (
                    <RandomDish />
                )}
            </div>
        </div>
    );
};
export default DishList;

//TODO: Add ma commande
