import { useRef, useState } from 'react';
import Header from './components/Header';
import HeaderLinks from './components/HeaderLinks';
import HeaderUtilities from './components/HeaderUtilities';
import ContactButton from './components/ContactButton';
import ThemeButton from './components/ThemeButton';
import Navigation from './components/Navigation';
import ContactForm from './components/ContactForm';
import Avatar from './components/Avatar';
import About from './components/About';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Section from './components/Section';
import Footer from './components/Footer';
import Icons from './components/Icons';
import VolumeButton from './components/Sound/VolumeButton/VolumeButton';
import './scss/main.scss';
import { AnimatePresence } from 'motion/react';

function App() {
	const [currentContent, setCurrentContent] = useState('Home');
	const [isContactOpen, setIsContactOpen] = useState(false);

	const handleSwitchContent = (content) => {
		if (content !== currentContent) setCurrentContent(content);
	};

	return (
		<>
			<Header returnHome={() => handleSwitchContent('Home')}>
				<HeaderLinks>
					<ContactButton openContactFormModal={() => setIsContactOpen(true)} />
					<ContactForm
						isOpen={isContactOpen}
						onClose={() => setIsContactOpen(false)}
					/>
				</HeaderLinks>
				<HeaderUtilities>
					<ThemeButton />
					<VolumeButton />
				</HeaderUtilities>
			</Header>

			<Navigation
				openContent={handleSwitchContent}
				activeContent={currentContent}
			/>

			<main>
				<AnimatePresence mode='wait'>
					<Section
						key={currentContent}
						sectionName={currentContent}
					>
						{currentContent === 'Home' && <Avatar key='Home' />}
						{currentContent === 'Home' && <Icons key='icons' />}
						{currentContent === 'About' && <About key='About' />}
						{currentContent === 'About' && <Timeline key='Timeline' />}
						{currentContent === 'Projects' && <Projects key='Projects' />}
						{currentContent === 'Skills' && <Skills key='Skills' />}
					</Section>
				</AnimatePresence>
			</main>
			<Footer />
		</>
	);
}

export default App;
