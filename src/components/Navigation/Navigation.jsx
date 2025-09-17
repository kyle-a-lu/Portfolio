export default function Navigation({ openAboutMe, openExperience, openProjects, openSkills }) {
	return (
		<nav>
			<ul>
				<li onClick={openAboutMe}>About</li>
				<li onClick={openExperience}>Experience</li>
				<li onClick={openSkills}>Skills</li>
				<li onClick={openProjects}>Projects</li>
			</ul>
		</nav>
	);
}
