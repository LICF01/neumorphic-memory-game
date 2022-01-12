import './Button.css';

const Button = ({ button, selected }) => {
	return (
		<div>
			<button className={selected ? 'button selected' : 'button unselected'}>
				<i className={button.name} style={{ color: button.color }}></i>
			</button>
		</div>
	);
};

export default Button;
