export default function Navigation({ openToolBox, openAboutMe, openExperience, openProjects }) {
	return (
		<nav>
			<ul>
				<li onClick={openAboutMe}>About</li>
				<li onClick={openExperience}>Experience</li>
				<li onClick={openToolBox}>Skills</li>
				<li onClick={openProjects}>Projects</li>
			</ul>
		</nav>
	);
}
