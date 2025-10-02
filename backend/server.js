import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.post('/send', async (req, res) => {
	const { name, email, message } = req.body;

	try {
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			},
		});

		await transporter.sendMail({
			from: email,
			to: process.env.EMAIL_USER,
			subject: `Message from ${name}`,
			text: message,
		});

		res.status(200).json({ message: 'Email sent successfully' });
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: 'Failed to send email', error: err.message });
	}
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
