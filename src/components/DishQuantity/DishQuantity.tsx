import { FC, useEffect, useState } from 'react';

import { useDishContextProvider } from '../../providers/DishContextProvider';

import { IDishObject, IOrder } from '../../interfaces/IDishContextProviderProps';
import { QUANTITY_ACTION } from '../../interfaces/Enum';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

import styles from './style.module.css';


type Props = {
    item: IDishObject | IOrder;
};

const DishQuantity: FC<Props> = ({ item }: Props): JSX.Element => {
    const { dishType, order,  updateOrder } = useDishContextProvider();
    const [quantity, setQuantity] = useState<number>(0);

    const _handleOrder = (action: QUANTITY_ACTION) => {
        const updatedQuantity = action === QUANTITY_ACTION.ADD ? quantity + 1 : quantity - 1;
        setQuantity(updatedQuantity);

        if ("quantity" in item) {
            item.quantity = updatedQuantity;
            updateOrder(item);
            return;
        }
        
        updateOrder({quantity: updatedQuantity, dish: item});
    };

    useEffect(() => {
        if ("quantity" in item) {
            setQuantity(item.quantity);
            return;
        }

        if (dishType !== "myOrder") {
            const targetOrder = order.find((order) => order.dish.name === item.name);
            setQuantity(targetOrder ? targetOrder.quantity : 0);
        }
    }, [dishType, order, item]);
  
    return (
        <div className={`${styles.order__form__container} ${"quantity" in item ? styles.order__quantity : ""}`}>
            <div className={styles.order__form__quantity}>
                <button onClick={() => _handleOrder(QUANTITY_ACTION.REMOVE)} disabled={(quantity <= 0)}>
                    <FontAwesomeIcon icon={faMinus} />
                </button>
                    <p>
                        {quantity}
                    </p>
                <button onClick={() => _handleOrder(QUANTITY_ACTION.ADD)} disabled={(quantity >= 30)}>
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
        </div>
    );
};

export default DishQuantity;