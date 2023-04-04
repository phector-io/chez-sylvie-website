import { FC } from 'react';

import styles from './style.module.css';

const FooterComponent: FC = (): JSX.Element => {

    const handleClick = () => {
        window.location.href = '/mentions-légales';
    };

    return (
        <footer className={styles.footer}>
        <ul>
            <li>
                <a
                    onClick={handleClick}
                    title="Voir les mentions légales"
                >
                    Mentions légales
                </a>
            </li>
            <li>
                <a
                    href="https://p-hector-dev.netlify.app"
                    target="_blank"
                    title="Lien vers le site du développeur Web"
                >
                    Réalisation du site par Pascal Hector
                </a>
            </li>
        </ul>
        </footer>
    );
};

export default FooterComponent;


