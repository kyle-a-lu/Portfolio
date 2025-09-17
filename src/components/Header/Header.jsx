export default function Header({ openContactMe, returnHome }) {
	return (
		<header>
			<div
				onClick={returnHome}
				className='heading-container'
			>
				<h1>Kyle Lu</h1>
				<h2>Software Engineer</h2>
			</div>
			<div className='contact-me-button-container'>
				<img
					onClick={openContactMe}
					className='contact-me-icon'
					src='/public/assets/contact.png'
					alt='Contact Me Icon'
				/>
			</div>
		</header>
	);
}
