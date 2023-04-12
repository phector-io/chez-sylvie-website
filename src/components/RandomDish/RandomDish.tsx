import { FC, useState } from 'react';

import { useDishContextProvider } from '../../providers/DishContextProvider';

import { NewtonsCradle } from '@uiball/loaders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

import styles from './style.module.css';
import { SettingsHelper } from '../../helpers/SettingsHelper';
import DishItem from '../DishItem/DishItem';

const randomCategories = [
    SettingsHelper.getSetting("pizza_dishes_title"),
    SettingsHelper.getSetting("flamm_dishes_title"),
    SettingsHelper.getSetting("pasta_dishes_title"),
    SettingsHelper.getSetting("dessert_dishes_title"),
    SettingsHelper.getSetting("drink_dishes_title"),
];

const RandomDish: FC = (): JSX.Element => {
    const { isRandomRunning, newRandomDish, launchRandomDish } = useDishContextProvider();
    const [choices, setChoices] = useState<string[]>([]);

    const _handleClick = (choice: string) => {
        if (choices.includes(choice)) {
            setChoices(choices.filter((item) => item !== choice));
        } else {
            setChoices([...choices, choice]);
        }
    };

    return (
        <div className={styles.random__container}>
            <div className={styles.random}>
                <div className={styles.random__controls}>
                    <div className={styles.random__checkboxes}>
                        {randomCategories.map((category, idx) => (
                            <div key={idx} className={styles.random__checkbox_container}>
                                <input
                                    id={category}
                                    type="checkbox"
                                    defaultChecked={choices.includes(category)}
                                    className={styles.checkbox}
                                    onClick={() => _handleClick(category)}
                                    />
                                <label htmlFor={category} className={styles.check}>
                                    <svg width="25px" height="25px" viewBox="0 0 18 18">
                                        <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                                        <polyline points="1 9 7 14 15 4"></polyline>
                                    </svg>
                                </label>
                                <span>
                                    {category}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className={styles.random__button}>
                        <button
                            onClick={() => launchRandomDish(choices)}
                            style={{ opacity: isRandomRunning || !choices.length ? 0.5 : 1 }}
                            disabled={isRandomRunning || !choices.length}
                            >
                            {SettingsHelper.getSetting("random_dishes_button_text")}
                        </button>
                    </div>
                </div>
                <div className={`${!newRandomDish ? styles.random__no__dish : ""}`}>
                    {newRandomDish ? (
                        <DishItem item={newRandomDish} />
                    ) : (
                        isRandomRunning ? (
                            <div className={styles.random__icon}>
                                <NewtonsCradle 
                                    size={100}
                                    speed={1.4} 
                                    color="#e20f2f" 
                                />
                            </div>
                        ) : (
                            <div className={styles.random__icon}>
                                <FontAwesomeIcon icon={faQuestion} size="8x" color="#e20f2f"/>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default RandomDish;