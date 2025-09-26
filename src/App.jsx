import Header from './components/Header/Header';
import ContactMe from './components/ContactMe/ContactMe';
import Navigation from './components/Navigation/Navigation';
import Avatar from './components/Avatar/Avatar';
import AboutMe from './components/AboutMe/AboutMe';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import './scss/main.scss';
import { useState } from 'react';
import { AnimatePresence } from 'motion/react';

function App() {
	const [currentContent, setCurrentContent] = useState(undefined);

	function handleSwitchContent(content) {
		console.log('Fired', content);
		if (content !== currentContent) {
			setCurrentContent(content);
		} else {
			setCurrentContent(undefined);
		}
	}

	return (
		<>
			<Header
				returnHome={() => handleSwitchContent('Home')}
				openContactMe={() => handleSwitchContent('Contact')}
			/>
			<Navigation
				openContent={handleSwitchContent}
				activeContent={currentContent}
			></Navigation>
			<main>
				<AnimatePresence>
					{currentContent === 'Contact' && <ContactMe />}
					{/* {currentContent === 'Home' &&  */}
					<Avatar activeContent={currentContent} />
					{/* } */}
					{currentContent === 'About' && <AboutMe />}
					{currentContent === 'Experience' && <Experience />}
					{currentContent === 'Projects' && <Projects />}
					{currentContent === 'Skills' && <Skills />}
				</AnimatePresence>
			</main>
		</>
	);
}

export default App;
