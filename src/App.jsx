import { useState } from 'react';
import styles from './App.module.css';

function App() {
	const [value, setValue] = useState(null);
	const [error, setError] = useState(false);
	const [list, setList] = useState([]);

	const enterValue = () => {
		const newValue = prompt('Введите значение');
		if (newValue.length < 3) {
			setError(true);
		} else {
			setError(false);
			setValue(newValue);
		}
	};

	const addToList = () => {
		setList([...list, { id: Date.now(), value: value }]);
		setValue(null);
		setError(false);
	};

	return (
		<div className={styles.app}>
			<h1 className={styles.pageHeading}>Ввод значения</h1>
			<p className={styles.noMarginText}>
				Текущее значение <code>value</code>: "
				<output className={styles.currentValue}>{value}</output>"
			</p>
			{error && (
				<div className={styles.error}>
					Введенное значение должно содержать минимум 3 символа
				</div>
			)}
			<div className={styles.buttonsContainer}>
				<button className={styles.button} onClick={enterValue}>
					Ввести новое
				</button>
				<button className={styles.button} onClick={addToList} disabled={!value}>
					Добавить в список
				</button>
			</div>
			<div className={styles.listContainer}>
				<h2 className={styles.listHeading}>Список:</h2>
				{!list.length && <p className={styles.noMarginText}>Нет добавленных элементов</p>}
				<ul className={styles.list}>
					{list.map(({ id, value }) => (
						<li key={id} className={styles.listItem}>
							<span>{value}</span>
							<span>{new Date(id).toLocaleString().replace(',', '')}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default App;
