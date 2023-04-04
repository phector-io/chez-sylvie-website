import { FC } from "react";
import styles from "./LegalMentions.module.css";

const LegalMentionsComponent: FC = (): JSX.Element => {
    return (
        <div className={styles.mentions}>
            <div className={styles.mentions__container}>
                <h1>Mentions légales</h1>
                <p>En vigueur au 15/10/2021</p>
                <p>
                    Conformément aux dispositions des Articles 6-III et 19 de la
                    Loi n°2004-575 du 21 juin 2004 pour la <br />
                    Confiance dans l’économie numérique, dite L.C.E.N., il est
                    porté à la connaissance des Utilisateurs du site <br />
                    chez-sylvie.com les présentes mentions légales. <br />
                    La connexion et la navigation sur le site chez-sylvie.com
                    par l’Utilisateur implique acceptation <br />
                    intégrale et sans réserve des présentes mentions légales.{" "}
                    <br />
                    Ces dernières sont accessibles sur le site à la rubrique «
                    Mentions légales ».
                </p>
                <h2>Crédits</h2>
                <p>
                    Réalisation du site internet par Pascal Hector <br />
                    <a href="https://p-hector-dev.netlify.app/" target="_blank">
                        https://p-hector-dev.netlify.app/
                    </a>
                    <br />
                    Développeur Web
                </p>
                <h2>Article 1: L'éditeur</h2>
                <p>
                    Le site que vous consultez actuellement est la propriété de
                    la Pizzeria, chez Sylvie : 17 rue Mal Foch, 57430 Sarralbe.{" "}
                    <br />
                    La directrice de la publication est Madame Sylvie Landfried.
                    Elle assure la responsabilité éditoriale du site. <br />
                    La responsabilité technique du site est assurée par Pascal
                    Hector dont l'adresse e-mail est: <br />
                    hp.hectorpascal@gmail.com
                </p>
                <h2>Article 2: Hébergement</h2>
                <ul>
                    <li>Hébergeur: Ionos by 1and1</li>
                    <li>
                        Adresse web:{" "}
                        <a href="https://www.ionos.fr/">
                            https://www.ionos.fr/
                        </a>
                    </li>
                    <li>
                        Adresse postale du siège: 7 Place de la Gare, 57200
                        Sarreguemines, FRANCE
                    </li>
                    <li>Téléphone: 09.70.80.89.11</li>
                </ul>
                <h2>Article 3: Accès au site</h2>
                <p>
                    Le site est accessible par tout endroit, 7j/7, 24h/24 sauf
                    cas de force majeure, interruption programmée ou <br />
                    non et pouvant découlant d’une nécessité de maintenance.{" "}
                    <br />
                    En cas de modification, interruption ou suspension des
                    services le site
                    <br />
                    chez-sylvie.com ne saurait être tenu responsable.
                </p>
                <h2>Article 4: Collecte des données</h2>
                <p>
                    Le site est exempté de déclaration à la Commission Nationale
                    Informatique et Libertés (CNIL) dans la mesure où il ne{" "}
                    <br />
                    collecte aucune donnée concernant les utilisateurs.
                </p>
                <h2>Article 5: Cookies</h2>
                <p>
                    L’Utilisateur est informé que lors de ses visites sur le
                    site, un cookie peut s’installer automatiquement sur <br />
                    son logiciel de navigation. <br />
                    En naviguant sur le site, il les accepte. <br />
                    Un cookie est un élément qui ne permet pas d’identifier
                    l’Utilisateur mais sert à enregistrer des informations{" "}
                    <br />
                    relatives à la navigation de celui-ci sur le site Internet.
                    L’Utilisateur pourra désactiver ce cookie par <br />
                    l’intermédiaire des paramètres figurant au sein de son
                    logiciel de navigation.
                </p>
                <h2>Article 5: Propriété intellectuelle</h2>
                <p>
                    Toute utilisation, reproduction, diffusion,
                    commercialisation, modification de toute ou partie du site{" "}
                    <br />
                    chez-sylvie.com, sans autorisation de l’Editeur est prohibée
                    et <br />
                    pourra entraînée des actions et poursuites judiciaires
                    telles que notamment prévues par le Code de la <br />
                    propriété intellectuelle et le Code civil.
                </p>
            </div>
        </div>
    );
};
export default LegalMentionsComponent;
