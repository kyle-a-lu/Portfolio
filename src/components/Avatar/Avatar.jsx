import { useState } from 'react';
import Icons from '../Icons/Icons';
import { motion, AnimatePresence } from 'motion/react';

export default function Avatar({}) {
	const [toggleIconsRadial, setToggleIconsRadial] = useState(true);
	function handleOpenIconsRadial() {
		setToggleIconsRadial(!toggleIconsRadial);
		console.log('Fired Icons', toggleIconsRadial);
	}
	return (
		<div className='avatar-container'>
			<motion.img
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ type: 'spring', duration: 1 }}
				exit={{ opacity: 0 }}
				onClick={handleOpenIconsRadial}
				className={'avatar-image'}
				src='/assets/avatar.png'
				alt='Avatar'
			/>
			<AnimatePresence propagate>{toggleIconsRadial && <Icons />}</AnimatePresence>
		</div>
	);
}
