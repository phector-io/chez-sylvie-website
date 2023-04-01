import { ReactNode, createContext, useContext } from "react";
import { IQuizContextProps } from "../interfaces/ICommonContextProps";

type Props = {
    children: ReactNode;
};

const QuizContext = createContext<IQuizContextProps>({});

export const useQuizContext = () => useContext(QuizContext);

export const QuizContextProvider = ({ children }: Props) => {

    const propsValues = {};

    return (
        <QuizContext.Provider value={propsValues}>
            {children}
        </QuizContext.Provider>
    );
};