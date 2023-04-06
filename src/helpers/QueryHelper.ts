
import { IRawData } from "../interfaces/IRawData";
import { IImageObject } from "../interfaces/IAppContextProviderProps";
import { IDishObject } from "../interfaces/IDishContextProviderProps";
import { IQuizObject } from "../interfaces/IQuizObject";
import { DATA_TYPES } from "../interfaces/Enum";
import { SettingsHelper } from "./SettingsHelper";

export const retrieveData = async (dataType: DATA_TYPES): Promise<IImageObject[] | IDishObject[] | IQuizObject[]> => {
    try {
        const res = await fetch(SettingsHelper.getSetting("data_path"));
        const data = await res.json();
        return _filterData(data, dataType);
    } catch (err) {
        console.error(`~> retrieveData Error: ${dataType} > ${err}`);
        return [];
    }
};

const _filterData = (data: IRawData, dataType: DATA_TYPES): IImageObject[] | IDishObject[] | IQuizObject[] => {
    switch (dataType) {
        case DATA_TYPES.IMAGES:
            return data.images;
        case DATA_TYPES.DISHES:
            return data.dishes;
        case DATA_TYPES.QUIZ:
            return data.quiz;
        default:
            return [];
    };
};
