import { motion } from 'motion/react';

export default function Avatar({ toggleIcons }) {
	return (
		<motion.img
			initial={{ scale: 0 }}
			animate={{ scale: 1 }}
			exit={{ scale: 0, transition: { delay: 0.5 } }}
			transition={{ type: 'spring', duration: 0.5 }}
			onClick={toggleIcons}
			className={'avatar-image'}
			src='../src/assets/avatar.png'
			alt='Avatar'
		/>
	);
}
