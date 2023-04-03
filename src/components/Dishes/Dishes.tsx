import { FC } from "react";
import styles from "./Dishes.module.css";
import HeaderComponent, { HEADER_TYPE } from "../Header/Header";

const DishesComponent: FC = (): JSX.Element => {
    return (
        <div className={styles.dishes}>
            <HeaderComponent type={HEADER_TYPE.DISHES} />
            DISHES
        </div>
    );
};
export default DishesComponent;
