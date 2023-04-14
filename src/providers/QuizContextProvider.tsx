import { ReactNode, createContext, useContext, useEffect, useReducer } from "react";

import { retrieveData } from "../helpers/QueryHelper";
import { selectRandomQuizObjects } from "../helpers/Helper";

import { IAnswer, IQuizContextProviderProps, IQuizObject } from "../interfaces/IQuizContextProviderProps";
import { DATA_TYPES } from "../interfaces/Enum";

import { CommonReducer } from "../reducers/CommonReducer";

type Props = {
    children: ReactNode;
};

const defaultState = {
    quizLaunched: false,
    quizList: [],
    quizProgress: 0,
    writeAnswers: 0,
    hasAnswered: false,
    quizFinished: false,
};

const QuizContext = createContext<IQuizContextProviderProps>({
    quizLaunched: false,    
    quizList: [],
    quizProgress: 0,
    hasAnswered: false,
    writeAnswers: 0,
    quizFinished: false,
    launchQuiz: () => {},
    handleNewAnswer: (userAnswer: IAnswer) => {},
    nextQuestion: () => {},
    resetQuiz: () => {},
});

export const useQuizContextProvider = () => useContext(QuizContext);

export const QuizContextProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(CommonReducer, defaultState);

    // Handle Quiz Launch
    const launchQuiz = () => {
        dispatch({
            type: "SET_QUIZ_LAUNCHED",
            quizLaunched: !state.quizLaunched,
        });
    };

    // Get Quiz Data
    const _getQuizData = () => {
        retrieveData(DATA_TYPES.QUIZ).then((result) => {
            // console.log('~> _getQuizData > retrieveData', result);
            dispatch({
                type: "SET_QUIZ_LIST",
                quizList: selectRandomQuizObjects(result as IQuizObject[]),
            });
        });
    };

    // Handle answer
    const handleNewAnswer = (userAnswer: IAnswer) => {
        dispatch({
            type: "SET_NEW_ANSWER",
            hasAnswered: true,
            writeAnswers: userAnswer.correct ? state.writeAnswers + 1 : state.writeAnswers,
        });
    };

    const nextQuestion = () => {
        if (state.quizProgress === state.quizList.length - 1) {
            dispatch({
                type: "SET_QUIZ_FINISHED",
                quizFinished: true,
            });
            return;
        }

        dispatch({
            type: "SET_NEXT_QUESTION",
            quizProgress: state.quizProgress + 1,
            hasAnswered: false,
        });
    };

    // Reset quiz
    const resetQuiz = () => {
        dispatch({
            type: "SET_RESET_QUIZ",
            quizLaunched: false,
            quizList: [],
            quizProgress: 0,
            writeAnswers: 0,
            hasAnswered: false,
            quizFinished: false,
        });
    };

    useEffect(() => {
        if (state.quizLaunched) {
            _getQuizData();
            return;
        }

        dispatch({
            type: "SET_QUIZ_LIST",
            quizList: [],
        });
    }, [state.quizLaunched]);

    const propsValues = {
        quizLaunched: state.quizLaunched,
        quizList: state.quizList,
        quizProgress: state.quizProgress,
        hasAnswered: state.hasAnswered,
        writeAnswers: state.writeAnswers,
        quizFinished: state.quizFinished,
        launchQuiz,
        handleNewAnswer,
        nextQuestion,
        resetQuiz,
    };

    return (
        <QuizContext.Provider value={propsValues}>
            {children}
        </QuizContext.Provider>
    );
};