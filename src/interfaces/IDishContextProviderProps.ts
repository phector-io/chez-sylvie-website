export interface IDishContextProviderProps {
    dishType: string;
    dishList: IDishObject[];
    showRandomDish: boolean;
    isRandomRunning: boolean;
    newRandomDish: IDishObject | null;
    showMyOrder: boolean;
    order: IOrder[];
    launchRandomDish: (categories: string[]) => void;
    updateSelectedDishType: (type: string) => void;
    updateOrder: (order: IOrder) => void;
    deleteDishFromOrder: (dishName: string) => void;
}

export interface IDishObject {
    type: string;
    name: string;
    descr: string;
    price: string;
}

export interface IOrder {
    quantity: number;
    dish: IDishObject;
}
