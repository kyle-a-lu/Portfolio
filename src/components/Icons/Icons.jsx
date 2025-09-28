import { ICONS_DATA } from './icons_data.js';
import { motion } from 'motion/react';

export default function Icons() {
	const iconsArray = ICONS_DATA.reduce((acc, category) => [...acc, ...category.icons], []);
	const totalIcons = iconsArray.length;

	return (
		<div className='icon-container'>
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
								transition: { delay: iconIndex * 0.1, duration: 0.5, type: 'spring', stiffness: 100 },
							}}
							exit={{
								transform: `rotate(${fanOutAngle}deg) translate(0rem) rotate(-${fanOutAngle}deg)`,
								opacity: 0,
								transition: { delay: iconIndex * 0.05, duration: 0.5, type: 'spring' },
							}}
						>
							<motion.div
								initial={{ rotate: 0 }}
								animate={{ rotate: 360 }}
								transition={{
									duration: 0.5,
									repeat: Infinity,
									repeatDelay: 12,
									ease: 'linear',
									type: 'spring',
								}}
								className='periodic-spin-container'
							>
								<motion.div
									className='tools-scale-container'
									whileHover={{ scale: 1.3 }}
									transition={{ duration: 0.25, type: 'spring' }}
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
							</motion.div>
						</motion.div>
					);
				})}
			</motion.div>
		</div>
	);
}
