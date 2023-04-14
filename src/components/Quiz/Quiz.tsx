import { FC, useState } from 'react';

import { useQuizContextProvider } from '../../providers/QuizContextProvider';

import { IAnswer } from '../../interfaces/IQuizContextProviderProps';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

import { SettingsHelper } from '../../helpers/SettingsHelper';
import styles from "./style.module.css";

const Quiz: FC = (): JSX.Element => {
    const { quizLaunched, quizList, quizProgress, hasAnswered, quizFinished, writeAnswers, launchQuiz, handleNewAnswer, nextQuestion, resetQuiz } = useQuizContextProvider();
    const [selectedOption, setSelectedOption] = useState<IAnswer |null>(null);

    const _onAnswered = (option: IAnswer) => {
        setSelectedOption(option);
        handleNewAnswer(option);
    };

    return (
       <div className={styles.quiz__container}>
            {!quizLaunched ? (
                <div className={styles.quiz__start}>
                    <div className={styles.quiz__start__title}>
                        <h1>{SettingsHelper.getSetting("route_name_quiz")}</h1>
                    </div>
                    <p>{SettingsHelper.getSetting("quiz_subtitle")}</p>
                    <button onClick={launchQuiz}>
                        {SettingsHelper.getSetting("quiz_start_button_text")}
                    </button>
                </div>
            ) : !quizFinished ? (
                quizList[quizProgress] && (
                    <div className={styles.quiz}>
                        <div className={styles.quiz__question}>
                            <h2>{quizList[quizProgress].question}</h2>
                        </div>
                        <div className={styles.quiz__options}>
                            {quizList[quizProgress].options.map((option, idx) => (
                                <button 
                                    key={idx} onClick={() => _onAnswered(option)}
                                    className={
                                        hasAnswered && selectedOption && selectedOption.answer === option.answer && option.correct ? styles.correct__answer :
                                        hasAnswered && selectedOption && selectedOption.answer === option.answer && !option.correct ? styles.wrong__answer :
                                        hasAnswered && option.correct ? styles.correct__answer :
                                        ""
                                    }                                                                       
                                    disabled={hasAnswered}
                                    style={hasAnswered ? {opacity: "0.8"} : {}}
                                >
                                    {option.answer}
                                </button>
                            ))}
                        </div>
                        {hasAnswered && (
                            <div className={styles.quiz__info}>
                                <p>{quizList[quizProgress].abstract}</p>
                                <button
                                    title={SettingsHelper.getSetting("quiz_next_button_title")}
                                    className={styles.next__question__btn}
                                    onClick={nextQuestion}
                                >
                                    <FontAwesomeIcon icon={faArrowAltCircleRight} />
                                </button>
                            </div>
                        )}
                    </div>
                )
            ) : (
                <div className={styles.quiz__end}>
                    <h1>
                        {SettingsHelper.getSetting("quiz_finished_title")}
                    </h1>
                    <p>
                        {SettingsHelper.getSetting("quiz_before_result_text")} {writeAnswers} {SettingsHelper.getSetting("quiz_after_result_text")} {quizList.length} {SettingsHelper.getSetting("quiz_result_punctuation")}
                    </p>
                    <button onClick={resetQuiz}>{SettingsHelper.getSetting("quiz_end_button_text")}</button>
                </div>
            )}
       </div>
    );
};
export default Quiz;