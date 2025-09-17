import { ICONS } from './icons.js';

export default function Icons({ active }) {
	return (
		<div className={`radial-container ${active ? 'active-icons' : ''}`}>
			{ICONS.map((iconsCatagory) => {
				return iconsCatagory.icons.map((icons) => {
					return (
						<img
							className='tools-icon'
							key={icons.alt}
							src={icons.src}
							alt={icons.alt}
						/>
					);
				});
			})}
		</div>
	);
}
