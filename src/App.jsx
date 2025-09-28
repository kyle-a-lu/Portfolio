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
import Icons from './components/Icons/Icons';

function App() {
	const [currentContent, setCurrentContent] = useState('Home');

	function handleSwitchContent(content) {
		if (content !== currentContent) {
			setCurrentContent(content);
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
				<AnimatePresence mode='wait'>
					{currentContent === 'Contact' && <ContactMe key='Contact' />}
					{currentContent === 'Home' && (
						<div className='avatar-container'>
							<Avatar
								key='Home'
								activeContent={currentContent}
							/>
							<Icons key='icons' />
						</div>
					)}
					{currentContent === 'About' && <AboutMe key='About' />}
					{currentContent === 'Experience' && <Experience key='Experience' />}
					{currentContent === 'Projects' && <Projects key='Projects' />}
					{currentContent === 'Skills' && <Skills key='Skills' />}
				</AnimatePresence>
			</main>
		</>
	);
}

export default App;
