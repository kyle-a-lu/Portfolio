import { motion } from 'motion/react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function ContactForm({ modalRef }) {
	useEffect(() => {
		const dialog = modalRef.current;
		if (!dialog) return;

		const handleClickOutside = (event) => {
			if (event.target === dialog) {
				dialog.close();
			}
		};

		dialog.addEventListener('click', handleClickOutside);
		return () => dialog.removeEventListener('click', handleClickOutside);
	}, [modalRef]);

	return createPortal(
		<motion.dialog
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0, transition: { type: 'spring', duration: 0.5 } }}
			exit={{ opacity: 0, y: -50, transition: { duration: 0.3 } }}
			ref={modalRef}
			className='contact-form'
		>
			<form method='dialog'>
				<div className='contact-form-input'>
					<label>
						Name
						<input
							type='text'
							name='name'
						/>
					</label>
				</div>
				<div className='contact-form-input'>
					<label>
						Email
						<input
							type='email'
							name='email'
						/>
					</label>
				</div>
				<div className='contact-form-input'>
					<label>
						Message
						<textarea name='message'></textarea>
					</label>
				</div>
				<menu>
					<button type='submit'>Send</button>
					<button
						type='button'
						onClick={() => modalRef.current.close()}
					>
						Close
					</button>
				</menu>
			</form>
		</motion.dialog>,
		document.body,
	);
}
