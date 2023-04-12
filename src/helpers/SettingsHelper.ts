interface ISettings {
    [key: string]: string;
}

const GENERAL_SETTINGS: ISettings = {
    // General
    data_path: "../data/data.json",

    // Navigation
    route_name_home: "accueil",
    route_name_menu: "plats",
    route_name_contact: "contact",
    route_name_quiz: "quiz",
    route_path_home: "/",
    route_path_menu: "/plats",
    route_path_contact: "/contact",
    route_path_quiz: "/quiz",
    route_path_mentions: "/mentions-légales",
    route_path_404: "*",

    // Home
    popup_delivery_text: "<h2>Souriez,</h2><p>Toutes les livraisons sont offertes !</p>",
    popup_delivery_button_text: "Ok",
    company_type: "Pizzeria",
    company_name: "Chez Sylvie",
    company_description: "“Sur place, à livrer ou emporter.”",
    company_image_descr: "Image Chez Sylvie",
    menu_button_text: "Voir le menu",
    company_descr_title: "À propos",
    company_descr_first_text: "C’est au cœur de <strong>Sarralbe</strong>, petit village de Moselle-Est, peuplé de Sarralbigeois et de cigognes, que débute notre aventure, celle de <strong>Chez Sylvie</strong>. Au centre de ce village bordé par l’Albe, nous souhaitons réécrire l’histoire des <strong>pizzas</strong> en vous apportant joie, convivialité mais surtout l’appétit. C’est en maîtrisant l’art des estomacs bien remplis que nous sélectionnons chaque jour les ingrédients parfaits pour notre pâte, des produits de saisons pour vos palais désireux de qualité, des produits frais et locaux pour enrichir nos actions éco-responsables. Tout cela avec bonne humeur et sourire car oui, l’aspect culinaire compte, mais l’aspect humain prime.",
    company_descr_second_text: "Vous nous connaissez certainement sous le nom de <strong>Mimo</strong> ou bien même <strong>Mimo’zza</strong> … Aujourd’hui notre nom change, notre histoire également. Et c’est avec vous, nos chers clients, que nous souhaitons aujourd’hui écrire, la première page de notre nouvelle aventure. Venez la vivre avec nous, <strong>Chez Sylvie</strong>!",

    // Footer
    footer_mentions_text: "Mentions légales",
    footer_mentions_title: "Voir les mentions légales",
    footer_created_by_text: "Réalisation du site par Pascal Hector",
    footer_created_by_title: "Voir le site de Pascal Hector",

    // Dishes
    all_dishes_title: "toute la carte",
    pizza_dishes_title: "pizzas",
    flamm_dishes_title: "flamms",
    pasta_dishes_title: "pâtes",
    children_dishes_title: "plats enfants",
    dessert_dishes_title: "desserts",
    drink_dishes_title: "boissons",
    random_dishes_title: "plat aléatoire",
    see_my_order_title: "ma commande",
    random_form_info: "Selectionnez une ou plusieurs catégories*",
    random_dishes_button_text: "C'est parti !",
    dish_order_title: "Quantité :",
    dish_order_empty: "Aucun plat sélectionné",
    currency: "€",
    dish_order_subtotal_text: "Sous-total :",
    dish_order_delivery_text: "Frais de livraison : 0 €",
    dish_order_total_text: "Total :",
    dish_order_button_call: "Commander",
    dish_order_button_clear: "Supprimer",
    dish_order_button_confirm: "Confirmer",
    dish_order_button_cancel: "Annuler",
    popup_alert_text: "<h2>Attention !</h2><p>Voulez-vous vraiment supprimer votre commande ?</p>",

    // Contact
    contact_title: "Contacts",
    hours_title: "Horaires",
    payment_title: "Modes de paiement",
    contact_google_maps_link: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x4794373216776329:0xf78ac97312d7af5f?source=g.page.share",
    contact_google_maps_link_title: "Voir sur Google Maps",
    contact_google_maps_link_text: "17 Rue Mal Foch, 57430 Sarralbe",
    contact_phone_link: "tel:+33387970224",
    contact_phone_link_title: "Contacter par téléphone",
    contact_phone_link_text: "03 87 97 02 24",
    contact_facebook_link: "https://www.facebook.com/chezsylviesarralbe",
    contact_facebook_link_title: "Voir sur Facebook",
    contact_facebook_text: "Facebook",
    day_1: "Lundi",
    day_2: "Mardi",
    day_3: "Mercredi",
    day_4: "Jeudi",
    day_5: "Vendredi",
    day_6: "Samedi",
    day_7: "Dimanche",
    hours_time_close: "Fermé",
    hours_time_open: "18:00 - 22:00",
    payment_1: "Espèce",
    payment_2: "Carte bancaire",
    payment_3: "Chèque",
    payment_4: "Ticket restaurant",

    // Cache
    already_visited_storage_key: "already_visited",
    order_cache_key: "my_order",
};

class SettingsHelper {
    private static getLocalSettings(): ISettings {
        return GENERAL_SETTINGS;
    }

    public static getSetting(key: string): string {
        const settings = this.getLocalSettings();
        if (settings && settings[key]) {
            return settings[key];
        } else {
            return "";
        }
    }
}

export { SettingsHelper };
