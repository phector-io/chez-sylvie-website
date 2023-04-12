import { FC } from 'react';

import { ALERT_ACTION, POPUP_TYPE } from '../../interfaces/Enum';

import styles from './style.module.css';
import { SettingsHelper } from '../../helpers/SettingsHelper';
import { useAppContextProvider } from '../../providers/AppContextProvider';
import { useDishContextProvider } from '../../providers/DishContextProvider';

type Props = {
    type: POPUP_TYPE;
};

const Popup: FC<Props> = ({ type }: Props): JSX.Element => {
    const { closePopup } = useAppContextProvider();
    const { handleAlertAction } = useDishContextProvider();
  
    return (
        <div className={styles.popup__overlay}>
            <div className={styles.popup}>
                {type === POPUP_TYPE.INFO ? (
                    <>
                        <div
                            className={styles.popup__text}
                            dangerouslySetInnerHTML={{__html: SettingsHelper.getSetting("popup_delivery_text")}} 
                        />
                        <div className={styles.popup__close}>
                            <button onClick={closePopup}>
                                {SettingsHelper.getSetting("popup_delivery_button_text")}
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <div
                            className={styles.popup__text}
                            dangerouslySetInnerHTML={{__html: SettingsHelper.getSetting("popup_alert_text")}} 
                        />
                        <div className={`${styles.popup__close} ${styles.alert__buttons}`}>
                            <button onClick={() => handleAlertAction(ALERT_ACTION.CONFIRM)}>
                                {SettingsHelper.getSetting("dish_order_button_confirm")}
                            </button>
                            <button onClick={() => handleAlertAction(ALERT_ACTION.CANCEL)}>
                                {SettingsHelper.getSetting("dish_order_button_cancel")}
                            </button>
                        </div>
                    </>
                )}
            </div>
      </div>
    );
};

export default Popup;

