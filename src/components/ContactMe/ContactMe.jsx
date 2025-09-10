export default function ContactMe() {
	return (
		<section
			className='contact-section'
			id='contact-section'
		>
			<div className='contact-content'>
				<div className='clearance-container'>
					<div className='clearance-image-container'>
						<img
							className='clearance-image'
							src='../public/assets/clearance.png'
							alt='Clearance Icon'
						/>
					</div>
					<div className='clearance-content-container'>
						<span>Security Clearance: Public Trust</span>
					</div>
				</div>
				<div className='resume-container'>
					<div className='resume-image-container'>
						<img
							className='resume-image'
							src='../public/assets/resume.png'
							alt='Resume Icon'
						/>
					</div>
					<div className='resume-content-container'>
						<span>Resume!</span>
					</div>
				</div>
				<h3>Contact Me!</h3>
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
			</div>
		</section>
	);
}
