import Button from './components/Button';
import './App.css';
import { useEffect, useState } from 'react';

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
	const [buttonOne, setButtonOne] = useState(null);
	const [buttonTwo, setButtonTwo] = useState(null);
	const [disabled, setDisabled] = useState(false);

	const newGame = () => {
		const buttonsSet = [...buttonIcons, ...buttonIcons]
			.sort(() => Math.random() - 0.5)
			.map((button) => ({
				...button,
				id: Math.random(),
				matched: false,
			}));

		setButtonOne(null);
		setButtonTwo(null);
		setButtons(buttonsSet);
		setTurns(0);
	};

	const handleSelect = (button) => {
		buttonOne ? setButtonTwo(button) : setButtonOne(button);
	};

	useEffect(
		() => buttonOne && buttonTwo && compareSelection(),
		[buttonOne, buttonTwo]
	);

	const compareSelection = () => {
		setDisabled(true);
		buttonOne.name === buttonTwo.name && setMatchedSelection();
		setTimeout(() => resetTurn(), 1000);
	};

	const setMatchedSelection = () => {
		setButtons((prev) => {
			return prev.map((button) => {
				if (button.name === buttonOne.name) {
					return { ...button, matched: true };
				} else {
					return button;
				}
			});
		});
	};

	const resetTurn = () => {
		setButtonOne(null);
		setButtonTwo(null);
		setTurns((prev) => prev + 1);
		setDisabled(false);
	};

	useEffect(() => newGame(), []);

	return (
		<div className='App'>
			<h1>Memory Game</h1>
			<button onClick={newGame}>New Game</button>
			<div className='buttons-grid'>
				{buttons.map((button) => (
					<Button
						button={button}
						handleSelect={handleSelect}
						selected={
							button === buttonOne ||
							button === buttonTwo ||
							button.matched
						}
						disabled={disabled}
						key={button.id}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
