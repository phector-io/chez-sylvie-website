import { FC } from 'react';

import { useDishContextProvider } from '../../providers/DishContextProvider';

import DishQuantity from '../DishQuantity/DishQuantity';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping, faBeerMugEmpty, faXmark } from '@fortawesome/free-solid-svg-icons';

import styles from './style.module.css';
import { SettingsHelper } from '../../helpers/SettingsHelper';

const MyOrder: FC = (): JSX.Element => {
    const { order, deleteDishFromOrder } = useDishContextProvider();

    return (
        <div className={styles.order__container}>
            {order.length ? (
                <div className={styles.order__details}>
                    <ul className={styles.order__list}>
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
                    <div className={styles.order__total__price}>
                        <h2>
                            Total: {order.reduce((acc, item) => acc + (parseInt(item.dish.price) * item.quantity), 0)}$
                        </h2>
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
        </div>
    );
};

export default MyOrder;