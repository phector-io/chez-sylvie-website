import { FC } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin, faMobileAlt, faMoneyBillWave, faMoneyCheck, faSmile, faTicket } from "@fortawesome/free-solid-svg-icons";
import { faCcMastercard, faFacebook } from '@fortawesome/free-brands-svg-icons';

import { SettingsHelper } from "../../helpers/SettingsHelper";
import img from "/assets/car.png";
import styles from "./style.module.css";

const contacts = [
    {
        link: SettingsHelper.getSetting("contact_google_maps_link"),
        title: SettingsHelper.getSetting("contact_google_maps_link_title"),
        text: SettingsHelper.getSetting("contact_google_maps_link_text"),
        icon: faMapPin,
    },
    {
        link: SettingsHelper.getSetting("contact_phone_link"),
        title: SettingsHelper.getSetting("contact_phone_link_title"),
        text: SettingsHelper.getSetting("contact_phone_link_text"),
        icon: faMobileAlt,
    },
    {
        link: SettingsHelper.getSetting("contact_facebook_link"),
        title: SettingsHelper.getSetting("contact_facebook_link_title"),
        text: SettingsHelper.getSetting("contact_facebook_text"),
        icon: faFacebook,
    },
];

const hours = [
    { day: SettingsHelper.getSetting("day_1"), hours: SettingsHelper.getSetting("hours_time_close")},
    { day: SettingsHelper.getSetting("day_2"), hours: SettingsHelper.getSetting("hours_time_close")},
    { day: SettingsHelper.getSetting("day_3"), hours: SettingsHelper.getSetting("hours_time_close")},
    { day: SettingsHelper.getSetting("day_4"), hours: SettingsHelper.getSetting("hours_time_open")},
    { day: SettingsHelper.getSetting("day_5"), hours: SettingsHelper.getSetting("hours_time_open")},
    { day: SettingsHelper.getSetting("day_6"), hours: SettingsHelper.getSetting("hours_time_open")},
    { day: SettingsHelper.getSetting("day_7"), hours: SettingsHelper.getSetting("hours_time_open")},
];

const payments = [
    { typeName: SettingsHelper.getSetting("payment_1"), icon: faMoneyBillWave },
    { typeName: SettingsHelper.getSetting("payment_2"), icon: faCcMastercard },
    { typeName: SettingsHelper.getSetting("payment_3"), icon: faMoneyCheck },
    { typeName: SettingsHelper.getSetting("payment_4"), icon: faTicket },
];

const Contact: FC = (): JSX.Element => {
    return (
        <div className={styles.contact__container} role="contentinfo">
            <div className={styles.contact__content}>
                <div className={styles.contact}>
                    <h2>{SettingsHelper.getSetting("contact_title")}</h2>
                    <nav>
                        <ul>
                            {contacts.map((contact, idx) => (
                                <li key={idx}>
                                    <a
                                        target="_blank"
                                        href={contact.link}
                                        title={contact.title}
                                    >
                                        <FontAwesomeIcon icon={contact.icon} />
                                        <span>{contact.text}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div>
                    <h2>{SettingsHelper.getSetting("hours_title")}</h2>
                    <ul>
                        {hours.map((hour, idx) => (
                            <li key={idx}>
                                {hour.day} : {hour.hours}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2>{SettingsHelper.getSetting("payment_title")}</h2>
                    <ul>
                        {payments.map((payment, idx) => (
                            <li key={idx}>
                                <FontAwesomeIcon icon={payment.icon} />
                                <span>{payment.typeName}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={styles.animCar}>
                <div className={styles.car}>
                    <img src={img} />
                </div>
                <div className={styles.delivery}>
                    <div className={styles.delivery__content}>
                        <h3>{SettingsHelper.getSetting("free_delivery")}</h3>
                        <FontAwesomeIcon icon={faSmile} />
                        <p>{SettingsHelper.getSetting("delivery_distance")}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
