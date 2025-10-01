import { TIMELINE_DATA } from '../data/timeline_data';
import { motion } from 'motion/react';

export default function Timeline() {
	return (
		<div className='timeline-container'>
			<h2>My Timeline</h2>
			<ul className='timeline'>
				{TIMELINE_DATA.map((entry, index) => (
					<a
						key={index}
						href={entry.website.url}
						target='_blank'
					>
						<motion.li
							className='timeline-item'
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: index * 0.2 } }}
							whileHover={{ scale: 1.1, transition: { type: 'spring', bounce: 0.5, duration: 0.25 } }}
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
						</motion.li>
					</a>
				))}
			</ul>
		</div>
	);
}
