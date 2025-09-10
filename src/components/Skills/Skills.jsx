export default function Skills() {
	return (
		<section
			class='skills-section'
			id='skills-section'
		>
			<div class='skills-image-container'>
				<img
					class='skills-image'
					src='../public/assets/skills.png'
					alt='Skills Icon'
				/>
			</div>
			<div class='skills-container'>
				<div class='skills-content-1 accordion'>
					<h3 class='accordion-header'>
						Technical Skills:<span class='accordion-icon'></span>
					</h3>
					<div class='accordion-content'>
						<ul>
							<li>Front-end development with HTML5, CSS3, SCSS, JavaScript, and Bootstrap</li>
							<li>Backend scripting and templating with PHP, Twig, and YAML</li>
							<li>Cross-browser compatibility and Section 508 accessibility compliance</li>
							<li>Responsive design implementation using USWDS</li>
							<li>Development with Drupal, WordPress, and Mura CMS</li>
							<li>Source control using Git, GitHub, AWS CodeCommit</li>
							<li>Built and maintained containerized development environments using Docker</li>
							<li>
								Deployed and maintained Drupal sites leveraging Acquia Cloud, Jenkins, and GitHub Actions—using each platform's pipelines and automation features to streamline continuous integration
								and deployment processes
							</li>
						</ul>
					</div>
				</div>
				<div class='skills-content-2 accordion'>
					<h3 class='accordion-header'>
						Project & Collaboration:<span class='accordion-icon'></span>
					</h3>
					<div class='accordion-content'>
						<ul>
							<li>Agile and Scrum workflow participation</li>
							<li>Effective communication with cross-functional teams and stakeholders</li>
							<li>Issue tracking and team collaboration via JIRA, Microsoft Teams, Office 365</li>
							<li>Technical documentation and knowledge base creation</li>
							<li>Delivers under tight deadlines with strong attention to detail and quality</li>
						</ul>
					</div>
				</div>
				<div class='skills-content-3 accordion'>
					<h3 class='accordion-header'>
						Professional Strengths:<span class='accordion-icon'></span>
					</h3>
					<div class='accordion-content'>
						<ul>
							<li>Clear and concise technical communication</li>
							<li>Adaptable in fast-paced environments</li>
							<li>Strong problem-solving and debugging skills</li>
							<li>Consistent delivery of high-quality solutions</li>
							<li>Proactive in improving accessibility and usability</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
