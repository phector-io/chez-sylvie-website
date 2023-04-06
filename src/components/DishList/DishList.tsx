import { FC, useEffect } from "react";

import { useAppContextProvider } from "../../providers/AppContextProvider";
import { useDishContextProvider } from "../../providers/DishContextProvider";

import { HEADER_TYPE } from "../../interfaces/Enum";

import Header from "../Header/Header";
import RandomDish from "../RandomDish/RandomDish";
import ScrollTop from "../ScrollTop/ScrollTop";
import DishItem from "../DishItem/DishItem";

import { useLocation } from "react-router-dom";

import styles from "./style.module.css";
import { SettingsHelper } from "../../helpers/SettingsHelper";

const DishList: FC = (): JSX.Element => {
    const { getPathname } = useAppContextProvider();
    const { dishType, dishList, showRandomDish } = useDishContextProvider();
    const { pathname } = useLocation();

    useEffect(() => {
        getPathname(pathname);
    }, []);

    return (
        <div id="dishes" className={styles.dishes}>
            <Header type={HEADER_TYPE.DISHES} />
            <div className={styles.dishes__container}>
                <h1>{dishType.charAt(0).toUpperCase() + dishType.slice(1)}</h1>
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
