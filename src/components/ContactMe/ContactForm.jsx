export default function ContactForm() {
	return (
		<form className='contact-form'>
			<div className='contact-form-input'>
				<label htmlFor='name'>Name</label>
				<input
					type='text'
					id='name'
					name='name'
					required
				/>
			</div>

			<div className='contact-form-input'>
				<label htmlFor='email'>Email</label>
				<input
					type='email'
					id='email'
					name='email'
					required
				/>
			</div>

			<div className='contact-form-input'>
				<label htmlFor='message'>Message</label>
				<textarea
					id='message'
					name='message'
					rows='5'
					required
				></textarea>
			</div>

			<button type='submit'>Send Message</button>
		</form>
	);
}
