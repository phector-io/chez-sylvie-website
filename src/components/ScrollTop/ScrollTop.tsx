import { FC, useEffect, useRef } from 'react';

import { useAppContextProvider } from '../../providers/AppContextProvider';

import { SCROLL_TARGET } from '../../interfaces/Enum';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

import styles from './style.module.css';

const ScrollTop: FC = (): JSX.Element => {
    const { getScreenHeight, scrollToTarget } = useAppContextProvider();
    const buttonRef = useRef<HTMLButtonElement>(null);

    const _handleScroll = () => {
        if (buttonRef.current) {
            if (window.scrollY > getScreenHeight()) {
                buttonRef.current.style.display = "block";
            } else {
                buttonRef.current.style.display = "none";
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", _handleScroll);
        return () => window.removeEventListener("scroll", _handleScroll);   
    });

    return (
       <button ref={buttonRef} onClick={() => scrollToTarget(SCROLL_TARGET.TOP)} className={styles.top__button}>
            <FontAwesomeIcon icon={faArrowUp} />
       </button>
    );
};

export default ScrollTop;