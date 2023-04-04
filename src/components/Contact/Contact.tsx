import { FC } from "react";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

import { SettingsHelper } from "../../helpers/SettingsHelper";
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

const ContactComponent: FC = (): JSX.Element => {
    return (
        <div className="infos" role="contentinfo" id="contact">
            <div className="infos-content">
                <div className="contact" data-aos="fade-right">
                    <h4>{SettingsHelper.getSetting("")}</h4>
                    <nav className="contact-nav">
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
                <div className="opening" data-aos="fade-right">
                    <h4>Horaires</h4>
                    <ul>
                        <li>Lundi : Fermé</li>
                        <li>Mardi : Fermé</li>
                        <li>Mercredi : Fermé</li>
                        <li>Jeudi : 18:00 - 22:00</li>
                        <li>Vendredi : 18:00 - 22:00</li>
                        <li>Samedi : 18:00 - 22:00</li>
                        <li>Dimanche : 18:00 - 22:00</li>
                    </ul>
                </div>
                <div className="payment" data-aos="fade-right">
                    <h4>Moyens de paiement</h4>
                    <ul>
                        <li>
                            <i className="fas fa-money-bill-wave"></i>
                            <span>Espèces</span>
                        </li>
                        <li>
                            <i className="fab fa-cc-visa"></i>
                            <span>Cartes bancaires</span>
                        </li>
                        <li>
                            <i className="fas fa-money-check"></i>
                            <span>Chèques</span>
                        </li>
                        <li>
                            <i className="fas fa-ticket-alt"></i>
                            <span>Tickets restaurants</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="animCar payment" data-aos="zoom-in">
                <div className="car">
                    <img src="./img/car.png" alt="" />
                </div>
                <div className="delivery">
                    <div className="delivery-content">
                        <p>Les livraisons sont offertes !!</p>
                        <i className="far fa-smile-beam"></i>
                        <p>Livraisons jusqu'à 10kms</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactComponent;
