import { ICONS } from './icons.js';
import { motion, AnimatePresence } from 'motion/react';

export default function Icons() {
	const iconsArray = ICONS.reduce((acc, category) => [...acc, ...category.icons], []);
	const totalIcons = iconsArray.length;

	return (
		<div className='icon-container'>
			<AnimatePresence>
				<motion.div
					className='radial-container'
					initial={{ rotate: 0 }}
					animate={{ rotate: '360deg' }}
					transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
				>
					{iconsArray.map((icon, iconIndex) => {
						const distanceFromCenter = 20; // View Width
						const minDistanceFromCenter = 1; // Rem
						const maxDistanceFromCenter = 20; // Rem
						const translateOut = `translate(clamp(${minDistanceFromCenter}rem, ${distanceFromCenter}vw, ${maxDistanceFromCenter}rem))`;
						const fanOutAngle = (360 / totalIcons) * iconIndex;
						const rotateOut = `rotate(${fanOutAngle}deg)`;
						const rotateBack = `rotate(${-fanOutAngle}deg)`;

						return (
							<motion.div
								key={icon.alt}
								className='fan-out-container'
								initial={{
									transform: `rotate(${fanOutAngle}deg) translate(0rem) rotate(-${fanOutAngle}deg)`,
									opacity: 0,
								}}
								animate={{
									transform: `${rotateOut} ${translateOut} ${rotateBack}`,
									opacity: 1,
								}}
								exit={{
									// Reverse the fan out: translate back to 0
									transform: `rotate(${fanOutAngle}deg) translate(0rem) rotate(-${fanOutAngle}deg)`,
									opacity: 0,
								}}
								transition={{
									delay: iconIndex * 0.1,
									type: 'spring',
									stiffness: 100,
								}}
							>
								<motion.img
									className='tools-icon'
									key={icon.alt}
									src={icon.src}
									alt={icon.alt}
									initial={{ rotate: 0 }}
									animate={{ rotate: '-360deg' }}
									transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
								/>
							</motion.div>
						);
					})}
				</motion.div>
			</AnimatePresence>
		</div>
	);
}
