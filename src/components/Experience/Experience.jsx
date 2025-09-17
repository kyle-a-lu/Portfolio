import { TIMELINE_DATA } from './timeline_data';

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
			<section className={`experience-section ${active ? 'active-exp' : ''}`}>
				<h2>Experience</h2>
				<div
					className='timeline-container'
					id='experience-section'
				>
					{/* <div className='scroll-icons'>
						<img
							src=''
							alt=''
						/>
						Scroll{' '}
						<img
							src=''
							alt=''
						/>
					</div> */}
					<ul className='timeline'>{TIMELINE_ENTRY}</ul>
				</div>
			</section>
		</>
	);
}
