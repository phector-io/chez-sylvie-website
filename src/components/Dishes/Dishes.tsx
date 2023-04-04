import { FC, useEffect } from "react";
import styles from "./Dishes.module.css";
import HeaderComponent from "../Header/Header";
import { useCommonContextProvider } from "../../providers/CommonContextProvider";
import { HEADER_TYPE } from "../../interfaces/Enum";
import { useLocation } from "react-router-dom";

const DishesComponent: FC = (): JSX.Element => {
    const { pathname } = useLocation();
    const { dishType, dishList, randomDish, getPathname } =
        useCommonContextProvider();

    useEffect(() => {
        getPathname(pathname);
    }, []);

    return (
        <div id="dishes" className={styles.dishes}>
            <HeaderComponent type={HEADER_TYPE.DISHES} />
            <div className={styles.dishes__container}>
                <h1>{dishType}</h1>
                {!randomDish ? (
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
                    <div className={styles.random__container}>
                        <div className={styles.random}>
                            YOLLLLOOOOOO
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default DishesComponent;

//TODO: Add ma commande
