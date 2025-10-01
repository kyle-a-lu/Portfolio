import { motion } from 'motion/react';

export default function Section({ children, sectionName }) {
	let exitAnimation;
	if (sectionName !== 'Home') {
		exitAnimation = { opacity: 0, transition: { type: 'spring', duration: 0.5 } };
	} else {
		exitAnimation = undefined;
	}

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { type: 'spring', duration: 0.5 } }}
			exit={exitAnimation}
			className={`${sectionName.toLowerCase()}-section`}
			id={`${sectionName.toLowerCase()}-section`}
		>
			{children}
		</motion.section>
	);
}
