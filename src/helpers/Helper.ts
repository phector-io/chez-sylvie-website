import { IDishObject } from "../interfaces/IDishContextProviderProps";

import { SettingsHelper } from "./SettingsHelper";

export const filterDishes = (dishes: IDishObject[], selection: string): IDishObject[] => {
    switch (selection) {
        case SettingsHelper.getSetting("all_dishes_title"):
            return dishes;
        case SettingsHelper.getSetting("pizza_dishes_title"):
            return dishes.filter((dish) => dish.type === "pizzas");
        case SettingsHelper.getSetting("flamm_dishes_title"):
            return dishes.filter((dish) => dish.type === "flamms");
        case SettingsHelper.getSetting("pasta_dishes_title"):
            return dishes.filter((dish) => dish.type === "pâtes");
        case SettingsHelper.getSetting("children_dishes_title"):
            return dishes.filter((dish) => dish.type === "enfants");
        case SettingsHelper.getSetting("dessert_dishes_title"):
            return dishes.filter((dish) => dish.type === "desserts");
        case SettingsHelper.getSetting("drink_dishes_title"):
            return dishes.filter((dish) => dish.type === "boissons");
        default:
            return [];
    }
};

export const getRandomDish = (dishes: IDishObject[], categories: string[]): IDishObject => {  
    const filteredDishes = dishes.filter((dish) => categories.includes(dish.type));
    const randomDish = filteredDishes[Math.floor(Math.random() * filteredDishes.length)];
    return randomDish;
};
