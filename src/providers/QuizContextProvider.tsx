import { ReactNode, createContext, useContext } from "react";
import { IQuizContextProviderProps } from "../interfaces/IQuizContextProviderProps";

type Props = {
    children: ReactNode;
};

const QuizContext = createContext<IQuizContextProviderProps>({});

export const useQuizContextProvider = () => useContext(QuizContext);

export const QuizContextProvider = ({ children }: Props) => {

    const propsValues = {};

    return (
        <QuizContext.Provider value={propsValues}>
            {children}
        </QuizContext.Provider>
    );
};