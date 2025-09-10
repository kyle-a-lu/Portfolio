export default function Avatar({ children, openToolBox, activeAbout, activeExp, activeProjects }) {
	let activeClass = '';

	if (activeAbout) {
		activeClass = 'active-about';
	} else if (activeExp) {
		activeClass = 'active-exp';
	} else if (activeProjects) {
		activeClass = 'active-projects';
	}

	return (
		<>
			<img
				onClick={openToolBox}
				className={`avatar-image ${activeClass}`}
				src='../public/assets/avatar.png'
				alt='Avatar'
			/>
			{children}
		</>
	);
}
