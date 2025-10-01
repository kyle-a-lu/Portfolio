import { ABOUT_DATA } from '../data/about_data';

export default function About({}) {
	return (
		<div className='about-container'>
			{ABOUT_DATA.map((section, index) => (
				<div
					className='about-section-block'
					key={index}
				>
					<h3>{section.title}</h3>
					{section.content && section.content.map((p, i) => <p key={i}>{p}</p>)}
					{section.list && (
						<ul>
							{section.list.map((item, i) => (
								<li key={i}>{item}</li>
							))}
						</ul>
					)}
				</div>
			))}
		</div>
	);
}
