import { motion, AnimatePresence } from 'motion/react';

const NAV_ITEMS = ['About', 'Experience', 'Skills', 'Projects'];

export default function Navigation({ openContent, activeContent }) {
	return (
		<nav>
			<ul>
				{NAV_ITEMS.map((content, contentIndex) => {
					return (
						<AnimatePresence key={content}>
							<motion.li
								layout
								animate={{ scale: 0.95 }}
								transition={{ duration: 0.6, type: 'spring' }}
								whileHover={{ scale: 1, borderRadius: 10 }}
								whileTap={{ scale: 0.85 }}
								onClick={() => openContent(content)}
							>
								{NAV_ITEMS[contentIndex]}
								{activeContent === content ? (
									<motion.div
										className='active-content'
										layoutId='underline'
									></motion.div>
								) : null}
							</motion.li>
						</AnimatePresence>
					);
				})}
			</ul>
		</nav>
	);
}
