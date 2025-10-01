import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function ThemeButton() {
	const [theme, setTheme] = useState('Light');

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
	}, [theme]);

	function handleToggleTheme() {
		setTheme((prevTheme) => (prevTheme === 'Dark' ? 'Light' : 'Dark'));
	}

	const x = theme === 'Dark' ? 0 : 31;
	const color = theme === 'Dark' ? '#000' : '#fff';
	const bgColor = theme === 'Dark' ? '#fff' : '#000';

	return (
		<motion.button
			animate={{ backgroundColor: bgColor }}
			className='theme-switch-container'
			onClick={handleToggleTheme}
			aria-label='Toggle theme'
		>
			<motion.div
				animate={{ x, backgroundColor: color }}
				className='theme-switch'
			/>
		</motion.button>
	);
}
