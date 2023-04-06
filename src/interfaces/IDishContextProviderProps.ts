export interface IDishContextProviderProps {
    dishType: string;
    dishList: IDishObject[];
    showRandomDish: boolean;
    isRandomRunning: boolean;
    newRandomDish: IDishObject | null;
    launchRandomDish: (categories: string[]) => void;
    updateSelectedDishType: (type: string) => void;
};

export interface IDishObject {
    type: string;
    name: string;
    descr: string;
    price: string;
}