import { FC } from 'react';

import { useCommonContextProvider } from '../../providers/CommonContextProvider';

import { SCROLL_TARGET } from '../../interfaces/Enum';

import styles from './style.module.css';

const ScrollTop: FC = (): JSX.Element => {
    const { scrollToTarget } = useCommonContextProvider();

    return (
       <button onClick={() => scrollToTarget(SCROLL_TARGET.TOP)}>
            Scroll to top
       </button>
    );
};

export default ScrollTop;