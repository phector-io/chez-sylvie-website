import { FC } from 'react';

import styles from './style.module.css'; 

export const Forbidden: FC = (): JSX.Element => {

	return (
		<div className={styles.forbidden__container}>
			<h1>Forbidden</h1>
			<p>You don't have permission to access this page.</p>
		</div>
	);
};
