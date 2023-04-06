import { IImageObject } from "./IAppContextProviderProps";
import { IDishObject } from "./IDishContextProviderProps";
import { IQuizObject } from "./IQuizObject";

export interface IRawData {
    images: IImageObject[];
    dishes: IDishObject[];
    quiz: IQuizObject[];
}