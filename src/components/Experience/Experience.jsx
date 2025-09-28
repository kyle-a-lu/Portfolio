import { TIMELINE_DATA } from './timeline_data';
import { motion } from 'motion/react';

export default function Experience({ active }) {
	const TIMELINE_ENTRY = TIMELINE_DATA.map((entry, entryIndex) => {
		return (
			<li
				key={entryIndex}
				className='timeline-item'
			>
				<div className='timeline-left'>
					<span>
						{entry.duration.startDate}
						<br />
						to
						<br />
						{entry.duration.endDate}
					</span>
				</div>
				<div className='timeline-right'>
					<img
						src={entry.image.src}
						alt={entry.image.alt}
					/>
				</div>
			</li>
		);
	});

	return (
		<>
			<motion.section
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, transition: { type: 'spring', duration: 0.15 } }}
				exit={{ opacity: 0, transition: { type: 'spring', duration: 0.1 } }}
				className='experience-section'
			>
				{/* <h2>Experience</h2> */}
				<div
					className='timeline-container'
					id='experience-section'
				>
					<ul className='timeline'>{TIMELINE_ENTRY}</ul>
				</div>
			</motion.section>
		</>
	);
}
