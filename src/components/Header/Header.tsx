import { FC, useEffect, useRef } from 'react';
import styles from './Header.module.css';
import { useNavigate } from "react-router-dom";
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
import { useCommonContextProvider } from '../../providers/CommonContextProvider';
import { HEADER_TYPE, SCROLL_TARGET } from '../../interfaces/Enum';

const choiceGroup = [
    { name: "pizzas", icon: faPizzaSlice },
    { name: "flamms", icon: faFireAlt },
    { name: "pâtes", icon: faConciergeBell },
    { name: "plat aléatoire", icon: faShuffle },
    { name: "desserts", icon: faIceCream },
    { name: "boissons", icon: faWineGlassAlt },
];

type Props = {
    type: HEADER_TYPE;
};

const HeaderComponent: FC<Props> = ({ type }: Props): JSX.Element => {
    const { setDishType, scrollToTarget } = useCommonContextProvider();
    const paralaxRef = useRef<HTMLDivElement>(null);
    const history = useNavigate();

    const _handleClick = (choice: string) => {

        console.log('~> click'); //DELETE
        scrollToTarget(SCROLL_TARGET.BOTTOM);
        setDishType(choice);
    };

    // On scroll paralax effect
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (paralaxRef.current) {
                paralaxRef.current.style.backgroundPositionY = window.scrollY / 2 + "px";
            }
        });
    }, [window.scrollY]);
    
    return (
        <div 
            className={styles.header} ref={paralaxRef}
            style={{backgroundImage: type === HEADER_TYPE.HOME ? `url(${homeParallaxBg})` : `url(${menuParallaxBg})`}}
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
                        <button onClick={() => history("/plats")}>
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

export default HeaderComponent;
//TODO: Add canvas snow effect