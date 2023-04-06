import { FC, useState } from 'react';

import { IDishObject } from '../../interfaces/IDishContextProviderProps';

import styles from './style.module.css';
import { SettingsHelper } from '../../helpers/SettingsHelper';

type Props = {
    item: IDishObject;
};

const DishItem: FC<Props> = ({ item }: Props): JSX.Element => {
    const [count, setCount] = useState<number>(0);
  
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
                <div className={styles.dish__order__input}>
                    <button onClick={() => setCount(count -1)} disabled={(count <= 0)}>
                        {SettingsHelper.getSetting("dish_order_minus")}
                    </button>
                        <p>{count}</p>
                    <button onClick={() => setCount(count +1)} disabled={(count >= 30)}>
                        {SettingsHelper.getSetting("dish_order_plus")}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DishItem;