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

const routePathList = [
    SettingsHelper.getSetting("route_path_home"),
    SettingsHelper.getSetting("route_path_menu"),
    SettingsHelper.getSetting("route_path_contact"),
    SettingsHelper.getSetting("route_path_quiz"),
];

const NavBar: FC = (): JSX.Element => {
    const { isNavBarOpen, pathname, getPathname, toggleNavBar } = useAppContextProvider();
    const { pathname: path } = useLocation();

    // Handle hamburger and logo colors
    // because the contact page has a white background
    const _handleNavbarColors = (to: "color" | "stroke") => {
        const color = pathname === SettingsHelper.getSetting("route_path_contact") || isNavBarOpen ? "#000" : "#fff";
        return to === "color" ? { color } : { stroke: color };
    };

    // Hide navbar on 404 page
    const _hideNavBar = () => {
        const isNotFound = routePathList.indexOf(pathname) === -1;
        return isNotFound;
    };

    useEffect(() => {
        getPathname(path);
    }, [path]);

    useEffect(() => {
        _hideNavBar()
    }, [pathname]);

    return (
        <nav
            role="menubar"
            className={`${styles.navbar}`}
            style={{ display: _hideNavBar() ? "none" : "block" }}
        >
            <div className={`${styles.navbar__content} ${isNavBarOpen ? styles.show__navbar : ""}`}>
                <h3
                    className={styles.navbar__logo}
                    style={_handleNavbarColors("color")}
                >
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
                    <input type="checkbox" readOnly checked={isNavBarOpen} onClick={() => toggleNavBar()}/>
                    <svg viewBox="0 0 32 32">
                        <path
                            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                            className={`${styles.line} ${styles.line__top__bottom}`}
                            // style={{stroke: isNavBarOpen ? "#000" : "#fff"}}
                            style={_handleNavbarColors("stroke")}
                        />
                        <path
                            d="M7 16 27 16"
                            className={styles.line}
                            // style={{stroke: isNavBarOpen ? "#000" : "#fff"}}
                            style={_handleNavbarColors("stroke")}
                        />
                    </svg>
                </label>
            </div>
        </nav>
    );
};

export default NavBar;
