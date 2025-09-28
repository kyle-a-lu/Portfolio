import { motion } from 'motion/react';

export default function Header({ openContactMe, returnHome }) {
	return (
		<header>
			<div
				onClick={returnHome}
				className='heading-container'
			>
				<h1>Kyle Lu</h1>
				<h2>Software Engineer</h2>
			</div>
			<div className='contact-me-button-container'>
				<motion.img
					whileHover={{ scale: 1.1 }}
					transition={{
						type: 'spring',
						stiffness: 500,
						mass: 0.5,
					}}
					whileTap={{ scale: 0.95 }}
					onClick={openContactMe}
					className='contact-me-icon'
					src='../src/assets/contact.png'
					alt='Contact Me Icon'
				/>
			</div>
		</header>
	);
}
