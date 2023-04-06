import { FC } from 'react';

import styles from './style.module.css';
import { SettingsHelper } from '../../helpers/SettingsHelper';

const Footer: FC = (): JSX.Element => {

    const handleClick = () => {
        window.open('/mentions-légales', '_blank');
    };

    return (
        <footer className={styles.footer}>
            <ul>
                <li>
                    <a
                        onClick={handleClick}
                        title={SettingsHelper.getSetting("footer_mentions_title")}
                    >
                        {SettingsHelper.getSetting("footer_mentions_text")}
                    </a>
                </li>
                <li>
                    <a
                        href="https://p-hector-dev.netlify.app"
                        target="_blank"
                        title={SettingsHelper.getSetting("footer_created_by_title")}
                    >
                        {SettingsHelper.getSetting("footer_created_by_text")}
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;


