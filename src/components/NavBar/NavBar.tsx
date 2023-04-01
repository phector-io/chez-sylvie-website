import { FC } from "react";
import styles from "./NavBar.module.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import RoutesComponent from "./Routes";

const NavBarComponent: FC = (): JSX.Element => {
    return (
        <Router>
            <nav className="navbar" role="menubar">
                <div className="navbar-content">
                    <h3 className="logo">
                        Pizzeria<span>Chez Sylvie</span>
                    </h3>
                    <nav className="nav" role="navigation">
                        <ul role="menu">
                            <li role="menuitem">
                                <Link to="/" title="Accueil">
                                    <i className="fas fa-home"></i>
                                    <span className="currentPage">Accueil</span>
                                </Link>
                            </li>
                            <li role="menuitem">
                                <Link to="/menu" title="Plats">
                                    <i className="fas fa-pizza-slice"></i>
                                    <span>Plats</span>
                                </Link>
                            </li>
                            <li role="menuitem">
                                <Link to="/contact" title="Contact">
                                    <i className="fas fa-phone"></i>
                                    <span>Contact</span>
                                </Link>
                            </li>
                            <li role="menuitem">
                                <Link to="/quiz" title="Quiz">
                                    <i className="fa fa-question-circle"></i>
                                    <span>Quiz</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <button className="burger" title="Menu principal">
                        <span className="bar"></span>
                    </button>
                </div>
            </nav>
            <RoutesComponent />
        </Router>
    );
};

export default NavBarComponent;
