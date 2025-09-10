export default function Header({ children }) {
	return (
		<header>
			<div className='header-content'>
				<div className='heading-container'>
					<h1>Kyle Lu</h1>
					<h2>Software Engineer</h2>
				</div>
				<>{children}</>
			</div>
		</header>
	);
}
