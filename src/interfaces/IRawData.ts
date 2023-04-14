import { IImageObject } from "./IAppContextProviderProps";
import { IDishObject } from "./IDishContextProviderProps";
import { IQuizObject } from "./IQuizContextProviderProps";

export interface IRawData {
    images: IImageObject[];
    dishes: IDishObject[];
    quiz: IQuizObject[];
}