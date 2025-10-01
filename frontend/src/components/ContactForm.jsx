import { motion, AnimatePresence } from 'motion/react';
import { createPortal } from 'react-dom';
import { useEffect, useRef } from 'react';

export default function ContactForm({ isOpen, onClose }) {
	const modalContainerReference = useRef(null);
	const firstInputFieldReference = useRef(null);
	const lastFocusableElementReference = useRef(null);

	useEffect(() => {
		if (!isOpen) return;

		// Focus the first input field when modal opens
		firstInputFieldReference.current?.focus();

		// Handle Escape key and focus trap
		const handleKeyboardNavigation = (keyboardEvent) => {
			if (keyboardEvent.key === 'Escape') {
				onClose();
			}

			if (keyboardEvent.key === 'Tab') {
				const focusableElementsInsideModal = modalContainerReference.current.querySelectorAll('a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])');

				const firstFocusableElement = focusableElementsInsideModal[0];
				const lastFocusableElement = focusableElementsInsideModal[focusableElementsInsideModal.length - 1];

				// Trap focus inside modal
				if (!keyboardEvent.shiftKey && document.activeElement === lastFocusableElement) {
					keyboardEvent.preventDefault();
					firstFocusableElement.focus();
				} else if (keyboardEvent.shiftKey && document.activeElement === firstFocusableElement) {
					keyboardEvent.preventDefault();
					lastFocusableElement.focus();
				}
			}
		};

		document.addEventListener('keydown', handleKeyboardNavigation);
		return () => document.removeEventListener('keydown', handleKeyboardNavigation);
	}, [isOpen, onClose]);

	const handleClickOutsideModal = (mouseEvent) => {
		if (mouseEvent.target.dataset.modalBackdrop === 'true') {
			onClose();
		}
	};

	return createPortal(
		<AnimatePresence>
			{isOpen && (
				<motion.div
					data-modal-backdrop='true'
					className='contact-form-backdrop'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onClick={handleClickOutsideModal}
					role='presentation'
				>
					<motion.div
						className='contact-form'
						ref={modalContainerReference}
						role='dialog'
						aria-modal='true'
						aria-labelledby='contact-form-header'
						aria-describedby='contact-form-subtitle'
						initial={{ y: -50, opacity: 0 }}
						animate={{ y: 0, opacity: 1, transition: { type: 'spring', duration: 0.75 } }}
						exit={{ y: -50, opacity: 0, transition: { duration: 0.5 } }}
						onClick={(mouseEvent) => mouseEvent.stopPropagation()}
					>
						<h2
							id='contact-form-header'
							className='contact-form-header'
						>
							Contact Us
						</h2>
						<p
							id='contact-form-subtitle'
							className='contact-form-subtitle'
						>
							Fill out the form below and we will get back to you shortly.
						</p>
						<form autoComplete='on'>
							<div className='contact-form-input'>
								<label htmlFor='name'>Name *</label>
								<input
									type='text'
									id='name'
									name='name'
									ref={firstInputFieldReference}
									autoComplete='name'
									required
								/>
							</div>
							<div className='contact-form-input'>
								<label htmlFor='email'>Email *</label>
								<input
									type='email'
									id='email'
									name='email'
									autoComplete='email'
									required
								/>
							</div>
							<div className='contact-form-input'>
								<label htmlFor='message'>Message *</label>
								<textarea
									id='message'
									name='message'
									autoComplete='off'
									required
								></textarea>
							</div>
							<menu>
								<button type='submit'>Send</button>
								<button
									type='button'
									onClick={onClose}
									ref={lastFocusableElementReference}
								>
									Close
								</button>
							</menu>
						</form>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>,
		document.body,
	);
}
