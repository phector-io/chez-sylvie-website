import { FC } from "react";
import styles from "./Home.module.css";
import HeaderComponent, { HEADER_TYPE } from "../Header/Header";

const HomeComponent: FC = (): JSX.Element => {
    return (
        <div className={styles.home}>
            <HeaderComponent type={HEADER_TYPE.HOME} />
            HOME
        </div>
    );
};

export default HomeComponent;
