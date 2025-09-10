export default function Experience({ active, children }) {
	return (
		<section
			className={`experience-section ${active ? 'active-exp' : ''}`}
			id='experience-section'
		>
			<h2>Experience</h2>
			<div className='experience-content-container'>{children}</div>
		</section>
	);
}
