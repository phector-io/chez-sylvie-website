import { FC } from "react";
import styles from "./Home.module.css";
import HeaderComponent, { HEADER_TYPE } from "../Header/Header";
import { SettingsHelper } from "../../helpers/SettingsHelper";
import img from "/assets/pizzeria2.jpg";

const HomeComponent: FC = (): JSX.Element => {

    return (
        <div className={styles.home}>
            <HeaderComponent type={HEADER_TYPE.HOME} />
            <main className={styles.home__content} role="main">
                <section role="article" className={styles.home__article}>
                    <h1>{SettingsHelper.getSetting("company_descr_title")}</h1>
                    <div 
                        className={styles.home__article__text}
                        dangerouslySetInnerHTML={{__html: SettingsHelper.getSetting("company_descr_first_text")}} 
                    />
                    <div className="aos" data-aos="zoom-in">
                        <img src={img} alt={SettingsHelper.getSetting("company_image_descr")} />
                    </div>
                    <div
                        className={styles.home__article__text}
                        dangerouslySetInnerHTML={{__html: SettingsHelper.getSetting("company_descr_second_text")}}
                    />
                </section>
            </main>
        </div>
    );
};

export default HomeComponent;

// TODO
// Add return top button
