import React from 'react';
import clickSoundFile from '../../../assets/audio/hover.wav';
import hoverSoundFile from '../../../assets/audio/select.wav';
import { useVolume } from '../../../context/VolumeContext';

export default function HoverSound({ children }) {
	const { isMuted } = useVolume();

	const hoverSound = React.useMemo(() => new Audio(hoverSoundFile), []);
	const clickSound = React.useMemo(() => new Audio(clickSoundFile), []);

	const handleHoverSound = () => {
		if (isMuted) return;
		hoverSound.currentTime = 0;
		hoverSound.volume = 0.2;
		hoverSound.play();
	};

	const handleClickSound = () => {
		if (isMuted) return;
		clickSound.currentTime = 0;
		clickSound.volume = 0.2;
		clickSound.play();
	};

	return React.cloneElement(children, {
		onMouseEnter: (event) => {
			handleHoverSound();
			children.props.onMouseEnter?.(event);
		},
		onClick: (event) => {
			handleClickSound();
			children.props.onClick?.(event);
		},
	});
}
