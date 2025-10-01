import { PROJECTS_DATA } from '../data/projects.js';

export default function Projects() {
	return (
		<div className='projects-content-container'>
			{PROJECTS_DATA.map((project) => (
				<div
					key={project.id}
					className='project-card'
				>
					<div className='project-card-media'>
						<img
							className='project-card-image'
							src={project.image}
							alt={project.alt}
						/>
					</div>
					<div className='project-card-body'>
						<p>{project.description}</p>
					</div>
				</div>
			))}
		</div>
	);
}
