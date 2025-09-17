import Header from './components/Header/Header';
import ContactMe from './components/ContactMe/ContactMe';
import Navigation from './components/Navigation/Navigation';
import Avatar from './components/Avatar/Avatar';
import AboutMe from './components/AboutMe/AboutMe';
import Experience from './components/Experience/Experience';
import Icons from './components/Icons/Icons';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import './scss/main.scss';
import { useState } from 'react';

function App() {
	const [iconsPopOut, setIconsPopOut] = useState(true);
	const [aboutPopOut, setAboutPopOut] = useState(false);
	const [experiencePopOut, setExperiencePopOut] = useState(false);
	const [projectsPopOut, setProjectsPopOut] = useState(false);
	const [contactMePopOut, setContactMePopOut] = useState(false);
	const [skillsPopOut, setSkillsMePopOut] = useState(false);

	function handleIcons() {
		setAboutPopOut(false);
		setExperiencePopOut(false);
		setProjectsPopOut(false);
		setContactMePopOut(false);
		setSkillsMePopOut(false);
		setIconsPopOut(!iconsPopOut);
	}
	function handleAboutMe() {
		setIconsPopOut(false);
		setExperiencePopOut(false);
		setProjectsPopOut(false);
		setContactMePopOut(false);
		setSkillsMePopOut(false);
		setAboutPopOut(!aboutPopOut);
	}

	function handleExperience() {
		setIconsPopOut(false);
		setAboutPopOut(false);
		setProjectsPopOut(false);
		setContactMePopOut(false);
		setSkillsMePopOut(false);
		setExperiencePopOut(!experiencePopOut);
	}

	function handleProjects() {
		setIconsPopOut(false);
		setAboutPopOut(false);
		setExperiencePopOut(false);
		setContactMePopOut(false);
		setSkillsMePopOut(false);
		setProjectsPopOut(!projectsPopOut);
	}

	function handleContactMe() {
		setIconsPopOut(false);
		setAboutPopOut(false);
		setExperiencePopOut(false);
		setProjectsPopOut(false);
		setSkillsMePopOut(false);
		setContactMePopOut(!contactMePopOut);
	}

	function handleSkills() {
		setIconsPopOut(false);
		setAboutPopOut(false);
		setExperiencePopOut(false);
		setProjectsPopOut(false);
		setContactMePopOut(false);
		setSkillsMePopOut(!skillsPopOut);
	}
	function handleReturnHome() {
		setIconsPopOut(true);
		setAboutPopOut(false);
		setExperiencePopOut(false);
		setProjectsPopOut(false);
		setContactMePopOut(false);
		setSkillsMePopOut(false);
	}

	return (
		<>
			<Header
				returnHome={handleReturnHome}
				openContactMe={handleContactMe}
			/>
			<Navigation
				openAboutMe={handleAboutMe}
				openExperience={handleExperience}
				openProjects={handleProjects}
				openSkills={handleSkills}
			></Navigation>
			<main>
				<ContactMe active={contactMePopOut} />
				<Avatar
					openToolbox={handleIcons}
					activeAbout={aboutPopOut}
					activeExp={experiencePopOut}
					activeSkills={skillsPopOut}
					activeProjects={projectsPopOut}
				>
					<Icons active={iconsPopOut} />
				</Avatar>
				<AboutMe active={aboutPopOut} />
				<Experience active={experiencePopOut} />
				<Projects active={projectsPopOut} />
				<Skills active={skillsPopOut}></Skills>
			</main>
		</>
	);
}

export default App;
