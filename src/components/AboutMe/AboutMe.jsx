export default function About({ active }) {
	return (
		<section
			className={`about-section ${active ? 'active-about' : ''}`}
			id='about-section'
		>
			<h2>About Me</h2>
			<p className='about-content'>
				I am an experienced front-end developer who enjoys turning ideas into responsive and accessible web applications using JavaScript, SASS, and PHP. I'm passionate about creating smooth,
				user-friendly experiences and take pride in building custom plugins and modules for WordPress and Drupal when additional functionality is needed. I thrive in small team environments where
				collaboration and critical thinking help me deliver solutions that make a meaningful impact, especially in public health initiatives. Accessibility is a priority—I ensure my work meets Section
				508 standards and performs consistently across browsers. I am committed to writing clean, maintainable code and continuously improving my skills and workflows to better serve clients and
				users.
			</p>
		</section>
	);
}
