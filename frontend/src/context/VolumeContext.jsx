import { createContext, useState, useContext } from 'react';

const VolumeContext = createContext();

export const useVolume = () => useContext(VolumeContext);

export const VolumeProvider = ({ children }) => {
	const [isMuted, setIsMuted] = useState(false);

	const toggleMute = () => setIsMuted((prev) => !prev);

	return <VolumeContext.Provider value={{ isMuted, toggleMute }}>{children}</VolumeContext.Provider>;
};
