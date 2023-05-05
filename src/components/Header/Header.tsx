import { FC, useRef } from 'react';

import { useAppContextProvider } from '../../providers/AppContextProvider';
import { useDishContextProvider } from '../../providers/DishContextProvider';

import { HEADER_TYPE, SCROLL_TARGET } from '../../interfaces/Enum';

import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faConciergeBell,
    faPizzaSlice,
    faFireAlt,
    faBowlFood,
    faChild,
    faShuffle,
    faIceCream,
    faWineGlassAlt,
    faFileLines
} from '@fortawesome/free-solid-svg-icons';

import homeParallaxBg from '/assets/pizza.jpg';
import menuParallaxBg from '/assets/bg-pizza.jpg';

import { SettingsHelper } from '../../helpers/SettingsHelper';
import styles from './style.module.css';

const choiceGroup = [
    { name: SettingsHelper.getSetting("all_dishes_title"), icon: faConciergeBell},
    { name: SettingsHelper.getSetting("pizza_dishes_title"), icon: faPizzaSlice },
    { name: SettingsHelper.getSetting("flamm_dishes_title"), icon: faFireAlt },
    { name: SettingsHelper.getSetting("pasta_dishes_title"), icon: faBowlFood },
    { name: SettingsHelper.getSetting("children_dishes_title"), icon:  faChild },
    { name: SettingsHelper.getSetting("dessert_dishes_title"), icon: faIceCream },
    { name: SettingsHelper.getSetting("drink_dishes_title"), icon: faWineGlassAlt },
    { name: SettingsHelper.getSetting("random_dishes_title"), icon: faShuffle },
    { name: SettingsHelper.getSetting("see_my_order_title"), icon: faFileLines},
];

type Props = {
    type: HEADER_TYPE;
};

const Header: FC<Props> = ({ type }: Props): JSX.Element => {
    const { updateSelectedDishType } = useDishContextProvider()
    const { scrollToTarget } = useAppContextProvider();
    const history = useNavigate();

    const _handleClick = (choice: string) => {
        scrollToTarget(SCROLL_TARGET.BOTTOM);
        updateSelectedDishType(choice);
    };
    
    return (
        <div 
            className={styles.header}
            style={
                type === HEADER_TYPE.HOME ? {
                    backgroundImage: `url(${homeParallaxBg})`,
                    backgroundPosition: "center"
                } : {
                    backgroundImage: `url(${menuParallaxBg})`
                }
            }
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
                        <button onClick={() => history(SettingsHelper.getSetting("route_path_menu"))}>
                            {SettingsHelper.getSetting("menu_button_text")}
                        </button>
                    </>
                ) : (
                    <>
                        <ul>
                            {choiceGroup.map((choice, idx) => (
                                <li key={idx}>
                                    <button onClick={() => _handleClick(choice.name)}>
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
        </div>
    );
};

export default Header;
//TODO: Add canvas snow effect