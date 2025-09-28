import { ICONS_DATA } from '../Icons/icons_data';
import { motion } from 'motion/react';

export default function Skills({ active }) {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { type: 'spring', duration: 0.15 } }}
			exit={{ opacity: 0, transition: { type: 'spring', duration: 0.1 } }}
			className='skills-section'
			id='skills-section'
		>
			{/* <h2>Skills</h2> */}

			{ICONS_DATA.map((icons, iconsIndex) => (
				<div
					key={iconsIndex}
					className='skills-container'
				>
					<h3>{icons.category}</h3>
					<div
						key={icons.category}
						className='skills-category'
					>
						{icons.icons.map((icon) => (
							<div className='skills-icons'>
								<img
									key={icon.alt}
									src={icon.src}
									alt={icon.alt}
								/>
								<div className='icon-tooltip'>{icon.tooltip}</div>
							</div>
						))}
					</div>
				</div>
			))}
		</motion.section>
	);
}
