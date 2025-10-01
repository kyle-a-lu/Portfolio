import { ICONS_DATA } from '../data/icons_data';

export default function Skills({}) {
	return (
		<div className='skills-wrapper'>
			{ICONS_DATA.map((categoryItem, categoryIndex) => (
				<div
					className='skills-container'
					key={categoryItem.category}
				>
					<h3>{categoryItem.category}</h3>
					<div className='skills-category'>
						{categoryItem.icons.map((icon) => (
							<div
								className='skills-icons'
								key={icon.alt}
							>
								<img
									src={icon.src}
									alt={icon.alt}
								/>
								<div className='icon-tooltip'>{icon.tooltip}</div>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
}
