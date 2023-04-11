import { FC } from 'react';

import { IDishObject } from '../../interfaces/IDishContextProviderProps';

import DishQuantity from '../DishQuantity/DishQuantity';

import styles from './style.module.css';
import { SettingsHelper } from '../../helpers/SettingsHelper';

type Props = {
    item: IDishObject;
};

const DishItem: FC<Props> = ({ item }: Props): JSX.Element => {
    return (
        <div className={styles.dish__container} /*TODO data-aos="fade-up"*/>
            <h2>{item.name}</h2>
            <div className={styles.dish__etiquet__price}>
                <p>{item.price}</p>
                <div></div>
            </div>
            <div className={styles.dish__descr__container}>
                <p className={styles.dish__descr__text}>
                    {item.descr}.
                </p>
            </div>
            <div className={styles.dish__order__container}>
                <p>{SettingsHelper.getSetting("dish_order_title")}</p>
                <DishQuantity item={item} />
            </div>
        </div>
    );
};

export default DishItem;