import { FC, useEffect, useRef, useState } from "react";
import styles from "./Dishes.module.css";
import HeaderComponent from "../Header/Header";
import { useCommonContextProvider } from "../../providers/CommonContextProvider";
import { SettingsHelper } from "../../helpers/SettingsHelper";
import { HEADER_TYPE } from "../../interfaces/Enum";

const DishesComponent: FC = (): JSX.Element => {
    const { dishList, randomDish } = useCommonContextProvider();
    const [pageTitle, setPageTitle] = useState<string>("");

    useEffect(() => {
        if (dishList.length) {
            setPageTitle(`Nos ${dishList[0].type}`);
        } else if (randomDish) {
            setPageTitle(SettingsHelper.getSetting("dishes_random_title"));
        }
    }, [dishList, randomDish]);

    return (
        <div className={styles.dishes}>
            <HeaderComponent type={HEADER_TYPE.DISHES} />
            {randomDish || dishList.length ? (
                <div className={styles.dishes__content}>
                    <h1>{pageTitle}</h1>
                    {dishList.length ? (
                        <ul className={styles.dishes__list}>
                            {dishList.map((dish, idx) => (
                                <div key={idx} className={styles.dishes__item} data-aos="fade-up">
                                    <h2>{dish.name}</h2>
                                    <p>{dish.descr}.</p>
                                    <p>{dish.price}€</p>
                                </div>
                            ))}
                        </ul>
                    ) : randomDish ? (
                        "yolo2"
                    ) : <></>}

                </div>
            ) : null}
        </div>
    );
};
export default DishesComponent;
