import { useState } from 'react';

export default function ExperienceAccordion({ job, jobIndex, openAccordion }) {
	const [accordionActive, setAccordionActive] = useState(false);
	function handleOpenAccordion() {
		setAccordionActive(!accordionActive);
	}

	return (
		<div
			onClick={handleOpenAccordion}
			key={jobIndex}
			id={jobIndex}
			className={`accordion experience-content-${jobIndex} ${accordionActive ? 'active-accordion' : ''}`}
		>
			<div className={`accordion-header ${accordionActive ? 'active-accordion' : ''}`}>
				<h3>{job.company}</h3>
				<span className='stack-icons'>ICONS</span>
				<span className={`accordion-icon ${accordionActive ? 'active-accordion' : ''}`}></span>
			</div>
			<div className={`accordion-content ${accordionActive ? 'active-accordion' : ''}`}>
				<p>{job.position}</p>
				<p>{job.duration}</p>
				<p>{job.location}</p>
				<h4>Job Responsibilities:</h4>
				<ul>
					{job.responsibilities.map((item, itemIndex) => {
						return <li key={itemIndex}>{item}</li>;
					})}
				</ul>
			</div>
		</div>
	);
}
