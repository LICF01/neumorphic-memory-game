import { useEffect, useState } from 'react';
import './Button.css';

const Button = ({ button, selected, handleSelect, disabled }) => {
	const handleClick = () => {
		if (!disabled) {
			handleSelect(button);
		}
	};

	return (
		<div>
			<button
				className={selected ? 'button selected' : 'button unselected'}
				onClick={handleClick}
			>
				<i className={button.name} style={{ color: button.color }}></i>
			</button>
		</div>
	);
};

export default Button;
