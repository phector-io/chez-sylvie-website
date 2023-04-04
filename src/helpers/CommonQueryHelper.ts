import { IImageObject, IDishObject, IQuestionObject, IRawData } from "../interfaces/ICommonContextProviderProps";
import { DATA_TYPES } from "../interfaces/Enum";

export const retrieveData = async (dataType: DATA_TYPES): Promise<IImageObject[] | IDishObject[] | IQuestionObject[]> => {
    try {
        const res = await fetch('../data/data.json');
        const data = await res.json();
        return _filterData(data, dataType);
    } catch (err) {
        console.error(`~> retrieveData Error: ${dataType} > ${err}`);
        return [];
    }
};

const _filterData = (data: IRawData, dataType: DATA_TYPES): IImageObject[] | IDishObject[] | IQuestionObject[] => {
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
