import { FC } from 'react';

import { useDishContextProvider } from '../../providers/DishContextProvider';

import { ORDER_ACTION, POPUP_TYPE } from '../../interfaces/Enum';

import DishQuantity from '../DishQuantity/DishQuantity';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping, faPhone, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';

import styles from './style.module.css';
import { SettingsHelper } from '../../helpers/SettingsHelper';
import Popup from '../Popup/Popup';

const MyOrder: FC = (): JSX.Element => {
    const { order, alertPopup, deleteDishFromOrder, openAlertPopup } = useDishContextProvider();

    const _handleOrderControl = (action: ORDER_ACTION) => {
        switch (action) {
            case ORDER_ACTION.CLEAR:
                openAlertPopup();
                break;
            case ORDER_ACTION.ORDER:
                window.location.href = SettingsHelper.getSetting("contact_phone_link");
                break;
        }
    };

    return (
        <div className={styles.order__container}>
            {order.length ? (
                <div className={styles.order__details}>
                    <ul className={`${styles.order__list} ${styles.content} ${order.length === 1 ? styles.order__list__one__child : ''}`}>
                        {order.map((item) => (
                            <li 
                                key={item.dish.name} 
                                className={`${styles.order__list__item} ${order.length > 1 ? styles.order__list__item__border : ''}`}
                            >
                                <div className={styles.order__item__content}>
                                    <h2>
                                        {item.dish.name}
                                    </h2>
                                    <DishQuantity item={item} />
                                </div>
                                <button className={styles.order__remove} onClick={() => deleteDishFromOrder(item.dish.name)}>
                                    <FontAwesomeIcon icon={faXmark} />
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className={`${styles.order__controls__price} ${styles.content}`}>
                        <div className={styles.order__prices}>

                            {/* TODO */}
                            <p>
                                Sous-total: {order.reduce((acc, item) => acc + (parseInt(item.dish.price) * item.quantity), 0)}
                                {SettingsHelper.getSetting("currency")}
                            </p>
                            <p>
                                Frais de livraison: 0{SettingsHelper.getSetting("currency")}
                            </p>
                            <h2>
                                Total: {order.reduce((acc, item) => acc + (parseInt(item.dish.price) * item.quantity), 0)}
                                {SettingsHelper.getSetting("currency")}
                            </h2>
                        </div>
                        <div className={styles.order__controls}>
                            <button onClick={() => _handleOrderControl(ORDER_ACTION.ORDER)}>
                                <FontAwesomeIcon icon={faPhone} />
                                <span>
                                    {SettingsHelper.getSetting("dish_order_button_call")}
                                </span>
                            </button>

                            <button onClick={() => _handleOrderControl(ORDER_ACTION.CLEAR)}>
                                <FontAwesomeIcon icon={faTrash} />
                                <span>
                                    {SettingsHelper.getSetting("dish_order_button_clear")}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={styles.order__empty}>
                    <FontAwesomeIcon icon={faBasketShopping} color='#fff'/>
                    <h2>
                          {SettingsHelper.getSetting("dish_order_empty")}
                    </h2>
                </div>
            )}
            {alertPopup && <Popup type={POPUP_TYPE.ALERT} />}
        </div>
    );
};

export default MyOrder;