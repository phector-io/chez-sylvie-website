import { FC } from 'react';
import styles from './Header.module.css';
import { Parallax } from "react-parallax";
import parallaxBg from '/assets/pizza.jpg';
import { SettingsHelper } from '../../helpers/SettingsHelper';

const HeaderComponent: FC = (): JSX.Element => {

    return (
        <Parallax className={styles.header} bgImage={parallaxBg} strength={500}>
            <div className={styles.overlay}>
                <h2 className="title">
                    {SettingsHelper.getSetting("company_name")}
                </h2>
                <p className="description">
                    {SettingsHelper.getSetting("company_description")}
                </p>
                <a href="menu" title="Voir la carte">
                    {SettingsHelper.getSetting("menu_button_text")}
                </a>
            </div>
            <canvas className="cnv"></canvas>
        </Parallax>
    );
};

export default HeaderComponent;