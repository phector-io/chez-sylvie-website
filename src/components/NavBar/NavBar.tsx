import { FC, useEffect } from "react";

import { useAppContextProvider } from "../../providers/AppContextProvider";

import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faPizzaSlice, faPhone, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

import Carousel from "../Carousel/Carousel";

import { SettingsHelper } from "../../helpers/SettingsHelper";
import styles from "./style.module.css";

const navLinkList = [
    { name: SettingsHelper.getSetting("route_name_home"), icon: faHouse },
    { name: SettingsHelper.getSetting("route_name_menu"), icon: faPizzaSlice },
    { name: SettingsHelper.getSetting("route_name_contact"), icon: faPhone },
    { name: SettingsHelper.getSetting("route_name_quiz"), icon: faQuestionCircle },
];

const NavBar: FC = (): JSX.Element => {
    const { isNavBarOpen, getPathname, toggleNavBar } = useAppContextProvider();
    const { pathname } = useLocation();

    useEffect(() => {
        getPathname(pathname);
    }, [pathname]);

    return (
        <nav className={styles.navbar} role="menubar">
            <div className={`${styles.navbar__content} ${isNavBarOpen ? styles.show__navbar : ""}`}>
                <h3 className={styles.navbar__logo}>
                    {SettingsHelper.getSetting("company_type")}<span>{SettingsHelper.getSetting("company_name")}</span>
                </h3>
                <nav className={styles.navbar__nav} role="navigation">
                    <ul role="menu" style={{transition: `left ${isNavBarOpen ? '1.5s' : '.1s'} ease-in-out`}}>
                        {navLinkList.map((link, idx) => (
                            <li key={idx} role="menuitem">
                                <Link
                                    to={`/${link.name === "accueil" ? "" : link.name}`}
                                    title={link.name.charAt(0).toUpperCase() + link.name.slice(1)}
                                    onClick={() => toggleNavBar()}
                                >
                                    <FontAwesomeIcon icon={link.icon} />
                                    <span>{link.name.charAt(0).toUpperCase() + link.name.slice(1)}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Carousel />
                </nav>
                <label className={styles.navbar__hamburger}>
                    {/* TEST readOnly ??*/}
                    <input type="checkbox" readOnly checked={isNavBarOpen} onClick={() => toggleNavBar()}/>
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
            </div>
        </nav>
    );
};

export default NavBar;
