export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer>
			<p>
				Designed & Built with{' '}
				<img
					className='heart-icon'
					src='../src/assets/heart.png'
					alt='Heart'
				/>{' '}
				by Kyle Lu
			</p>
			<p>
				© <time dateTime={year.toString()}>{year}</time> Kyle Lu
			</p>
		</footer>
	);
}
