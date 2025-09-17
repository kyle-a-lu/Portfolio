import { ICONS } from '../Icons/icons';

export default function Skills({ active }) {
	return (
		<section
			className={`skills-section ${active ? 'active-skills' : ''}`}
			id='skills-section'
		>
			<h2>Skills</h2>

			<div className='skills-container'>
				{ICONS.map((icons) => (
					<div>
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
		</section>
	);
}
