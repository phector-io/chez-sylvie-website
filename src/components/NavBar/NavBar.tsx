import { FC } from "react";
import styles from "./NavBar.module.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import RoutesComponent from "./Routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faPizzaSlice, faPhone, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import CarouselComponent from "../Carousel/Carousel";
import { SettingsHelper } from "../../helpers/SettingsHelper";
import { useCommonContextProvider } from "../../providers/CommonContextProvider";

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
        <Router>
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
                    <button
                        className={styles.navbar__burger}
                        title="Menu principal"
                        onClick={() => setIsNavBarOpen(!isNavBarOpen)}
                    >
                        <span className={styles.navbar__burger__bar}></span>
                    </button>
                </div>
            </nav>
            <RoutesComponent />
        </Router>
    );
};

export default NavBarComponent;
