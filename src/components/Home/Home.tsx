import { FC } from "react";

import { HEADER_TYPE } from "../../interfaces/Enum";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import { SettingsHelper } from "../../helpers/SettingsHelper";
import img from "/assets/pizzeria2.jpg";
import styles from "./style.module.css";

const Home: FC = (): JSX.Element => {
    return (
        <div className={styles.home}>
            <Header type={HEADER_TYPE.HOME} />
            <main className={styles.home__content} role="main">
                <section role="article" className={styles.home__article}>
                    <h1>{SettingsHelper.getSetting("company_descr_title")}</h1>
                    <div 
                        className={styles.home__article__text}
                        dangerouslySetInnerHTML={{__html: SettingsHelper.getSetting("company_descr_first_text")}} 
                    />
                    <div data-aos="zoom-in">
                        <img src={img} alt={SettingsHelper.getSetting("company_image_descr")} />
                    </div>
                    <div
                        className={styles.home__article__text}
                        dangerouslySetInnerHTML={{__html: SettingsHelper.getSetting("company_descr_second_text")}}
                    />
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
