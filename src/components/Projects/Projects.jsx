export default function Projects({ active }) {
	return (
		<section
			className={`projects-section ${active ? 'active-projects' : ''}`}
			id='projects-section'
		>
			<h2>Projects</h2>
			<div className='projects-content-container'>
				<div className='project-card'>Project</div>
				<div className='project-card'>Project</div>
				<div className='project-card'>Project</div>
				<div className='project-card'>Project</div>
				<div className='project-card'>Project</div>
			</div>
		</section>
	);
}
