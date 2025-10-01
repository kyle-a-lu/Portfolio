import { motion } from 'motion/react';

export default function ContactButton({ openContactFormModal }) {
	return (
		<div className='contact-icons'>
			<motion.img
				whileHover={{ scale: 1.1 }}
				transition={{
					type: 'spring',
					stiffness: 500,
					mass: 0.5,
				}}
				whileTap={{ scale: 0.95 }}
				onClick={openContactFormModal}
				src='../src/assets/contact-icons/contact.png'
				alt='Contact Me Icon'
			/>

			<a
				href='https://github.com/kyle-a-lu'
				target='_blank'
			>
				<motion.img
					whileHover={{ scale: 1.1 }}
					transition={{
						type: 'spring',
						stiffness: 500,
						mass: 0.5,
					}}
					whileTap={{ scale: 0.95 }}
					src='../src/assets/contact-icons/github.png'
					alt='Contact Me Icon'
				/>
			</a>

			<a
				href='https://www.linkedin.com/in/kyle-lu-dev'
				target='_blank'
			>
				<motion.img
					whileHover={{ scale: 1.1 }}
					transition={{
						type: 'spring',
						stiffness: 500,
						mass: 0.5,
					}}
					whileTap={{ scale: 0.95 }}
					src='../src/assets/contact-icons/linkedin.png'
					alt='Contact Me Icon'
				/>
			</a>
		</div>
	);
}
