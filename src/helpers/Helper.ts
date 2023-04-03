import { IDishObject } from "../interfaces/ICommonContextProviderProps";

export const filterDishes = (dishes: IDishObject[], type: string): IDishObject[] => {
    return dishes.filter((dish: IDishObject) => dish.type === type);
};