import { FC } from 'react';
import styles from './Header.module.css';
import { Parallax } from "react-parallax";
import homeParallaxBg from '/assets/pizza.jpg';
import menuParallaxBg from '/assets/bg-pizza.jpg';
import { SettingsHelper } from '../../helpers/SettingsHelper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faPizzaSlice,
    faFireAlt,
    faConciergeBell,
    faShuffle,
    faIceCream,
    faWineGlassAlt
} from '@fortawesome/free-solid-svg-icons';

const choiceGroup = [
    { name: "pizzas", icon: faPizzaSlice },
    { name: "flamms", icon: faFireAlt },
    { name: "pâtes", icon: faConciergeBell },
    { name: "plat aléatoire", icon: faShuffle },
    { name: "desserts", icon: faIceCream },
    { name: "boissons", icon: faWineGlassAlt },
];

export enum HEADER_TYPE {
    HOME,
    DISHES,
};

type Props = {
    type: HEADER_TYPE;
};

const HeaderComponent: FC<Props> = ({ type }: Props): JSX.Element => {

    return (
        <Parallax
            className={styles.header}
            bgImage={type === HEADER_TYPE.HOME ? homeParallaxBg : menuParallaxBg}
            strength={500}
        >
            <div 
                className={`${styles.header_overlay} ${type === HEADER_TYPE.HOME ? styles.header_overlay_home : styles.header_overlay_dishes}`} 
                style={type === HEADER_TYPE.HOME ? { backgroundColor: "rgba(0, 0, 0, 0.712)"} : undefined}
            >
                {type === HEADER_TYPE.HOME ? (
                    <>
                        <h2 className="title">
                            {SettingsHelper.getSetting("company_name")}
                        </h2>
                        <p className="description">
                            {SettingsHelper.getSetting("company_description")}
                        </p>
                        <a href="plats" title="Voir la carte">
                            {SettingsHelper.getSetting("menu_button_text")}
                        </a>
                    </>
                ) : (
                    <>
                        <ul>
                            {choiceGroup.map((choice, idx) => (
                                <li key={idx}>
                                    <button>
                                        <FontAwesomeIcon icon={choice.icon} />
                                        <br />
                                        <span>{choice.name.charAt(0).toUpperCase() + choice.name.slice(1)}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
            {/* <canvas className={styles.cnv}></canvas> */}
        </Parallax>
    );
};

export default HeaderComponent;
//TODO: Add canvas snow effect