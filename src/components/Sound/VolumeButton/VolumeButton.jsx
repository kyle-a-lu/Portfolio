import { useState } from 'react';
import { motion } from 'motion/react';

export default function VolumeButton() {
	const [volumeToggle, setVolumeToggle] = useState(true);

	let soundWaveOneX = -10;
	let soundWaveTwoX = -20;
	let soundWaveOneScale = 0;
	let soundWaveTwoScale = 0;

	function handleToggleVolume() {
		const newVolumeToggle = !volumeToggle;
		setVolumeToggle(newVolumeToggle);
	}

	if (volumeToggle) {
		soundWaveOneX = 0;
		soundWaveTwoX = 0;
		soundWaveOneScale = 1;
		soundWaveTwoScale = 1;
	}

	return (
		<button
			onClick={handleToggleVolume}
			className='volume-container'
		>
			<img
				className='volume-icon'
				src='../src/assets/sound-wave/volume-icon.PNG'
				alt='volume-icon'
			/>

			<motion.img
				initial={{ x: soundWaveOneX, scale: soundWaveOneScale }}
				animate={{ x: soundWaveOneX, scale: soundWaveOneScale }}
				exit={{ x: soundWaveOneX, scale: soundWaveOneScale }}
				transition={{ type: 'spring', duration: 0.5, bounce: 0.75 }}
				className='volume-icon-wave-one'
				src='../src/assets/sound-wave/volume-icon-soundwave.PNG'
				alt='volume-icon'
			/>
			<motion.img
				initial={{ x: soundWaveTwoX, scale: soundWaveTwoScale }}
				animate={{ x: soundWaveTwoX, scale: soundWaveTwoScale }}
				exit={{ x: soundWaveTwoX, scale: soundWaveTwoScale }}
				transition={{ type: 'spring', duration: 0.5, bounce: 0.75 }}
				className='volume-icon-wave-two'
				src='../src/assets/sound-wave/volume-icon-soundwave.PNG'
				alt='volume-icon'
			/>
		</button>
	);
}
