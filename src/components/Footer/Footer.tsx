import { FC } from 'react';

import { SettingsHelper } from '../../helpers/SettingsHelper';
import styles from './style.module.css';

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
                        target="_blank"
                        href={SettingsHelper.getSetting("footer_created_by_link")}
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


