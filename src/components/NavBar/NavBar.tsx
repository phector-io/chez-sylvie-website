import { FC } from "react";

import { useCommonContextProvider } from "../../providers/CommonContextProvider";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faPizzaSlice, faPhone, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

import CarouselComponent from "../Carousel/Carousel";

import { SettingsHelper } from "../../helpers/SettingsHelper";
import styles from "./style.module.css";

const navLinkList = [
    "accueil",
    "plats",
    "contact",
    "quiz",
];

const NavBarComponent: FC = (): JSX.Element => {
    const { isNavBarOpen, setIsNavBarOpen } = useCommonContextProvider();

    const getIcon = (link: string) => {
        switch (link) {
            case "accueil":
                return faHouse;
            case "plats":
                return faPizzaSlice;
            case "contact":
                return faPhone;
            case "quiz":
                return faQuestionCircle;
            default:
                return faHouse;
        }
    };

    return (
        <nav className={styles.navbar} role="menubar">
            <div className={`${styles.navbar__content} ${isNavBarOpen ? styles.show__navbar : ""}`}>
                <h3 className={styles.navbar__logo}>
                    Pizzeria<span>{SettingsHelper.getSetting("company_name")}</span>
                </h3>
                <nav className={styles.navbar__nav} role="navigation">
                    <ul role="menu" style={{transition: `left ${isNavBarOpen ? '1.5s' : '.1s'} ease-in-out`}}>
                        {navLinkList.map((link, idx) => (
                            <li key={idx} role="menuitem">
                                <Link
                                    to={`/${link === "accueil" ? "" : link}`}
                                    title={link.charAt(0).toUpperCase() + link.slice(1)}
                                    onClick={() => setIsNavBarOpen(false)}
                                >
                                    <FontAwesomeIcon icon={getIcon(link)} />
                                    <span>{link.charAt(0).toUpperCase() + link.slice(1)}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <CarouselComponent />
                </nav>
                <label className={styles.navbar__hamburger}>
                    <input type="checkbox" checked={isNavBarOpen} onClick={() => setIsNavBarOpen(!isNavBarOpen)}/>
                    <svg viewBox="0 0 32 32">
                        <path
                            className={`${styles.line} ${styles.line__top__bottom}`}
                            style={{stroke: isNavBarOpen ? "#000" : "#fff"}}
                            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                        />
                        <path
                            className={styles.line}
                            style={{stroke: isNavBarOpen ? "#000" : "#fff"}}
                            d="M7 16 27 16"
                        />
                    </svg>
                </label>
                {/* <button
                    className={styles.navbar__burger}
                    title="Menu principal"
                    onClick={() => setIsNavBarOpen(!isNavBarOpen)}
                >
                    <span className={styles.navbar__burger__bar}></span>
                </button> */}
            </div>
        </nav>
    );
};

export default NavBarComponent;
