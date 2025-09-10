import { ICONS } from './icons.js';

export default function Icons({ active, children }) {
	return (
		<div className={`radial-container ${active ? 'active-icons' : ''}`}>
			{ICONS.map((icon, iconIndex) => {
				return (
					<img
						key={iconIndex}
						className='tools-icon'
						src={icon.src}
						alt={icon.alt}
					/>
				);
			})}
			{children}
		</div>
	);
}
