import Button from './components/Button';
import './App.css';
import { useState } from 'react';

const buttonIcons = [
	{ name: 'fas fa-cat', color: '#FAC05E' },
	{ name: 'fas fa-kiwi-bird', color: '#59CD90' },
	{ name: 'fas fa-dog', color: '#3FA7D6' },
	{ name: 'fas fa-horse', color: '#F79D84' },
	{ name: 'fas fa-dragon', color: '#EE6352' },
	{ name: 'fas fa-spider', color: '#9893DA' },
];

function App() {
	const [buttons, setButtons] = useState([]);
	const [turns, setTurns] = useState(0);

	const newGame = () => {
		const buttonsSet = [...buttonIcons, ...buttonIcons]
			.sort(() => Math.random() - 0.5)
			.map((button) => ({
				...button,
				id: Math.random(),
				matched: false,
				selected: false,
			}));

		setButtons(buttonsSet);
		setTurns(0);
	};

	const handleNewGame = () => {
		newGame();
	};

	return (
		<div className='App'>
			<h1>Memory Game</h1>
			<button onClick={handleNewGame}>New Game</button>
			<div className='buttons-grid'>
				{buttons.map((button) => (
					<Button button={button} key={button.id} />
				))}
			</div>
		</div>
	);
}

export default App;
