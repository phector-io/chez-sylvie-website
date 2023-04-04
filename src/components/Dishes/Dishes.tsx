import { FC, useEffect, useState } from "react";

import { useCommonContextProvider } from "../../providers/CommonContextProvider";

import HeaderComponent from "../Header/Header";

import { HEADER_TYPE } from "../../interfaces/Enum";

import { useLocation } from "react-router-dom";

import { NewtonsCradle } from '@uiball/loaders'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

import styles from "./style.module.css";
import { SettingsHelper } from "../../helpers/SettingsHelper";
import RandomDishComponent from "../RandomDish/RandomDish";


const randomCategories = [
    SettingsHelper.getSetting("pizza_dishes_title"),
    SettingsHelper.getSetting("flamm_dishes_title"),
    SettingsHelper.getSetting("pasta_dishes_title"),
    SettingsHelper.getSetting("dessert_dishes_title"),
    SettingsHelper.getSetting("drink_dishes_title"),
];

const DishesComponent: FC = (): JSX.Element => {
    const { dishType, dishList, showRandomDish, getPathname } = useCommonContextProvider();
    const { pathname } = useLocation();

    useEffect(() => {
        getPathname(pathname);
    }, []);

    return (
        <div id="dishes" className={styles.dishes}>
            <HeaderComponent type={HEADER_TYPE.DISHES} />
            <div className={styles.dishes__container}>
                <h1>{dishType}</h1>
                {showRandomDish && (
                    <p className={styles.random__form__info}>{SettingsHelper.getSetting("random_form_info")}</p>
                )}
                {!showRandomDish ? (
                    <div className={styles.dishes__content}>
                        <ul className={styles.dishes__list}>
                            {dishList.map((dish, idx) => (
                                <div
                                    key={idx}
                                    className={styles.dishes__item}
                                    data-aos="fade-up"
                                >
                                    <h2>{dish.name}</h2>
                                    <p>{dish.descr}.</p>
                                    <p>{dish.price}€</p>
                                </div>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <RandomDishComponent />
                )}
            </div>
        </div>
    );
};
export default DishesComponent;

//TODO: Add ma commande
