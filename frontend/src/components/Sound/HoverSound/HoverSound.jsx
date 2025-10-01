import React from 'react';
import clickSoundFile from '../../assets/audio/hover.wav';
import hoverSoundFile from '../../assets/audio/select.wav';

export default function HoverSound({ children, muted }) {
	const hoverSound = React.useMemo(() => new Audio(hoverSoundFile), []);
	const clickSound = React.useMemo(() => new Audio(clickSoundFile), []);

	function handleHoverSound() {
		if (!muted) {
			hoverSound.currentTime = 0;
			hoverSound.play();
		}
	}

	function handleClickSound() {
		if (!muted) {
			clickSound.currentTime = 0;
			clickSound.play();
		}
	}

	return React.cloneElement(children, {
		onMouseEnter: (e) => {
			handleHoverSound();
			if (children.props.onMouseEnter) {
				children.props.onMouseEnter(e);
			}
		},
		onClick: (e) => {
			handleClickSound();
			if (children.props.onClick) {
				children.props.onClick(e);
			}
		},
	});
}
