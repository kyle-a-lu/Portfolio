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
	const [currentContent, setCurrentContent] = useState('');

	function handleSwitchContent(content) {
		if (content !== currentContent) {
			setCurrentContent(content);
		}
	}

	return (
		<>
			<Header
				returnHome={() => handleSwitchContent('')}
				openContactMe={() => handleSwitchContent('contact')}
			/>
			<Navigation
				openAboutMe={() => handleSwitchContent('about')}
				openExperience={() => handleSwitchContent('experience')}
				openProjects={() => handleSwitchContent('projects')}
				openSkills={() => handleSwitchContent('skills')}
			></Navigation>
			<main>
				{currentContent === 'contact' && <ContactMe />}
				{currentContent === '' && (
					<Avatar
						openToolbox={() => handleSwitchContent('')}
						activeContent={currentContent}
					>
						<Icons />
					</Avatar>
				)}
				{currentContent === 'about' && <AboutMe />}
				{currentContent === 'experience' && <Experience />}
				{currentContent === 'projects' && <Projects />}
				{currentContent === 'skills' && <Skills />}
			</main>
		</>
	);
}

export default App;
