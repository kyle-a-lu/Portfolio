import { motion } from 'motion/react';

export default function Header({ openContactMe, returnHome, children }) {
	return (
		<header>
			<div
				onClick={returnHome}
				className='heading-container'
			>
				<h1>Kyle Lu</h1>
				<h2>Software Engineer</h2>
			</div>
			<div className='header-items'>{children}</div>
		</header>
	);
}
