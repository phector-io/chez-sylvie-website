export interface IQuizContextProviderProps {
    quizLaunched: boolean;
    quizList: IQuizObject[];
    quizProgress: number;
    hasAnswered: boolean;
    writeAnswers: number;
    quizFinished: boolean;
    launchQuiz: () => void;
    handleNewAnswer: (userAnswer: IAnswer) => void;
    nextQuestion: () => void;
    resetQuiz: () => void;
}

export interface IQuizObject {
    question: string;
    options: IAnswer[];
    abstract: string;
}

export interface IAnswer {
    answer: string;
    correct: boolean;
}
