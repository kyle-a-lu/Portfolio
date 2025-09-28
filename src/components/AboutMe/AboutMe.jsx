import { motion } from 'motion/react';

export default function About({ active }) {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { type: 'spring', duration: 0.15 } }}
			exit={{ opacity: 0, transition: { type: 'spring', duration: 0.1 } }}
			className='about-section'
			id='about-section'
		>
			{/* <h2>About Me</h2> */}

			<div className='about-section-block'>
				<h3>What I Do</h3>
				<p>I build responsive, accessible, and engaging web applications. I focus on creating smooth user experiences and developing custom solutions when projects require extra functionality.</p>
			</div>

			<div className='about-section-block'>
				<h3>How I Work</h3>
				<p>I thrive in small, collaborative teams where problem-solving drives results. Accessibility is always a priority, and I ensure my work performs consistently across devices and browsers.</p>
			</div>

			<div className='about-section-block'>
				<h3>My Approach</h3>
				<p>I write clean, maintainable code and focus on solutions that are easy to build on and scale. I’m always refining workflows and exploring new approaches to deliver better results.</p>
			</div>

			<div className='about-section-block'>
				<h3>Beyond the Code</h3>
				<ul>
					<li>Going to live music shows</li>
					<li>Mountain biking</li>
					<li>Gaming and game development</li>
					<li>Gardening</li>
					<li>Board games and Magic: The Gathering</li>
					<li>3D printing and design projects</li>
				</ul>
			</div>

			<div className='about-section-block'>
				<h3>What Drives Me</h3>
				<p>I bring curiosity, creativity, and focus to every project—whether coding, collaborating, or experimenting with side projects, I always strive to deliver high-quality, polished work.</p>
			</div>
		</motion.section>
	);
}
