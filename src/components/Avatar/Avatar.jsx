// export default function Avatar({ children, openToolbox, activeAbout, activeExp, activeProjects, activeSkills }) {
export default function Avatar({ children, openToolbox, activeAbout, activeExp, activeProjects, activeSkills }) {
	let activeClass = '';

	if (activeAbout) {
		activeClass = 'active-about';
	} else if (activeExp) {
		activeClass = 'active-exp';
	} else if (activeSkills) {
		activeClass = 'active-skills';
	} else if (activeProjects) {
		activeClass = 'active-projects';
	}

	return (
		<>
			<img
				onClick={openToolbox}
				className={`avatar-image ${activeClass}`}
				src='../public/assets/avatar.png'
				alt='Avatar'
			/>
			{children}
		</>
	);
}
