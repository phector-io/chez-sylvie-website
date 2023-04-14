import { FC } from "react";

import { useNavigate } from "react-router-dom";

import { SettingsHelper } from "../../helpers/SettingsHelper";
import styles from "./style.module.css";

const NotFound: FC = (): JSX.Element => {
    const history = useNavigate();

    return (
        <div className={styles.page_404}>
            <div className={styles.page__404__content}>
                <img src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="404" />
            </div>
            <div className={styles.page__404__text}>
                    <h3>
                        {SettingsHelper.getSetting("page_404_title")}
                    </h3>
                    <p>
                        {SettingsHelper.getSetting("page_404_text")}
                    </p>
                <div className={styles.page__404__back}>
                    <button onClick={() => history(SettingsHelper.getSetting("route_path_home"))}>
                        {SettingsHelper.getSetting("page_404_button_text")}{SettingsHelper.getSetting("route_name_home")}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
