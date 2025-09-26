import { ICONS } from '../Icons/icons';
import { motion } from 'motion/react';

export default function Skills({ active }) {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ type: 'spring', duration: 1 }}
			exit={{ opacity: 0 }}
			className='skills-section'
			id='skills-section'
		>
			<h2>Skills</h2>

			<div className='skills-container'>
				{ICONS.map((icons, iconsIndex) => (
					<div key={iconsIndex}>
						<h3>{icons.category}</h3>
						<div
							key={icons.category}
							className='skills-category'
						>
							<div className='skills-icons'>
								{icons.icons.map((icon) => (
									<img
										key={icon.alt}
										src={icon.src}
										alt={icon.alt}
									/>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</motion.section>
	);
}
