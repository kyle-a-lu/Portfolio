import Header from './components/Header/Header';
import ContactMe from './components/ContactMe/ContactMe';
import Navigation from './components/Navigation/Navigation';
import Avatar from './components/Avatar/Avatar';
import AboutMe from './components/AboutMe/AboutMe';
import Experience from './components/Experience/Experience';
import Icons from './components/Icons/Icons';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import { EXPEREIENCE } from './components/Experience/experience';
import ExperienceAccordion from './components/Experience/ExperienceAccordions';
import './scss/main.scss';
import { useState } from 'react';

function App() {
	const [iconsPopOut, setIconsPopOut] = useState(false);
	const [aboutPopOut, setAboutPopOut] = useState(false);
	const [experiencePopOut, setExperiencePopOut] = useState(false);
	const [projectsPopOut, setProjectsPopOut] = useState(false);

	function handleIcons() {
		setIconsPopOut(!iconsPopOut);
		setAboutPopOut(false);
		setExperiencePopOut(false);
		setProjectsPopOut(false);
		console.log('Fired Icons');
	}
	function handleAboutMe() {
		setIconsPopOut(false);
		setExperiencePopOut(false);
		setAboutPopOut(!aboutPopOut);
		setProjectsPopOut(false);
		console.log('Fired About');
	}

	function handleExperience() {
		setIconsPopOut(false);
		setAboutPopOut(false);
		setProjectsPopOut(false);
		setExperiencePopOut(!experiencePopOut);
		console.log('Fired EXP');
	}

	function handleProjects() {
		setIconsPopOut(false);
		setAboutPopOut(false);
		setExperiencePopOut(false);
		setProjectsPopOut(!projectsPopOut);
		console.log('Fired Projects');
	}

	return (
		<>
			<Header>{/* <ContactMe /> */}</Header>
			<Navigation
				openToolBox={handleIcons}
				openAboutMe={handleAboutMe}
				openExperience={handleExperience}
				openProjects={handleProjects}
			></Navigation>
			<main>
				<Avatar
					activeAbout={aboutPopOut}
					activeExp={experiencePopOut}
					activeProjects={projectsPopOut}
				/>
				<Icons active={iconsPopOut} />
				<AboutMe active={aboutPopOut} />
				<Experience active={experiencePopOut}>
					{EXPEREIENCE.map((job, jobIndex) => {
						return (
							<ExperienceAccordion
								key={jobIndex}
								job={job}
								jobIndex={jobIndex}
							/>
						);
					})}
				</Experience>
				<Projects active={projectsPopOut} />
				{/* <Skills></Skills> */}
			</main>
		</>
	);
}

export default App;
