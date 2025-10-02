import { motion } from 'motion/react';
import { useVolume } from '../../../context/VolumeContext';

export default function VolumeButton() {
	const { isMuted, toggleMute } = useVolume();

	const soundWaveOneX = isMuted ? -10 : 0;
	const soundWaveTwoX = isMuted ? -20 : 0;
	const soundWaveOneScale = isMuted ? 0 : 1;
	const soundWaveTwoScale = isMuted ? 0 : 1;

	return (
		<button
			onClick={toggleMute}
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
				alt='volume-soundwave-one'
			/>
			<motion.img
				initial={{ x: soundWaveTwoX, scale: soundWaveTwoScale }}
				animate={{ x: soundWaveTwoX, scale: soundWaveTwoScale }}
				exit={{ x: soundWaveTwoX, scale: soundWaveTwoScale }}
				transition={{ type: 'spring', duration: 0.5, bounce: 0.75 }}
				className='volume-icon-wave-two'
				src='../src/assets/sound-wave/volume-icon-soundwave.PNG'
				alt='volume-soundwave-two'
			/>
		</button>
	);
}
