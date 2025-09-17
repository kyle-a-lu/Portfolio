export default function Projects({ active }) {
	return (
		<section
			className={`projects-section ${active ? 'active-projects' : ''}`}
			id='projects-section'
		>
			<h2>Projects</h2>
			<div className='projects-content-container'>
				<div className='project-card'>
					<div className='project-card-media'>
						<img
							className='project-card-image'
							src='../public/assets/portfolio-screenshot1x1.png'
							alt='project-card'
						/>
					</div>
					<div className='project-card-body'>
						{/* <h3>Portfolio Project</h3> */}
						<p>
							My portfolio is a modern, responsive web application built with React.
							{/* It’s designed to showcase my skills in front-end development, clean UI/UX, and component-driven architecture. Each
							section of the site—projects, experience, and about—uses reusable React components for consistency and performance. The portfolio highlights my ability to work with state management,
							routing, and animation libraries, while keeping performance and accessibility in mind. It’s fully responsive, adapting seamlessly to desktop, tablet, and mobile devices, and includes
							smooth transitions for a polished user experience. I built this portfolio not only as a place to feature my projects, but also as a demonstration of how I approach scalable code,
							maintainable design systems, and interactive interfaces. */}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
