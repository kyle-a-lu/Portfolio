export default function ContactMe({ active }) {
	return (
		<>
			<section
				className={`contact-section ${active ? 'active-contact-me' : ''}`}
				id='contact-section'
			>
				<ul>
					<li>
						<a href='tel:240-342-1527'>
							<img
								className='contact-icon'
								src='../public/assets/contact-icons/telephone.png'
								alt='Phone Icon'
							/>
							Phone
						</a>
					</li>
					<li>
						<a href='mailto:Lu.Kyle.A@gmail.com'>
							<img
								className='contact-icon'
								src='../public/assets/contact-icons/gmail.png'
								alt='Gmail Icon'
							/>
							Email
						</a>
					</li>
					<li>
						<a href='https://github.com/kyle-a-lu'>
							<img
								className='contact-icon'
								src='../public/assets/contact-icons/github.png'
								alt='GitHub Icon'
							/>
							GitHub
						</a>
					</li>
					<li>
						<a href='https://www.linkedin.com/in/kyle-a-lu/'>
							<img
								className='contact-icon'
								src='../public/assets/contact-icons/linkedin.png'
								alt='LinkedIn Icon'
							/>
							LinkedIn
						</a>
					</li>
				</ul>
			</section>
		</>
	);
}
