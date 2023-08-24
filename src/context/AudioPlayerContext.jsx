import { createContext, useContext, useState } from "react";
import { v4 } from "uuid";

const AudioPlayerContext = createContext();

export default function AudioPlayerProvider({ children }) {
  const [audioPlayerData, setAudioPlayerData] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);

  return (
    <AudioPlayerContext.Provider value={{ audioPlayerData, setAudioPlayerData, currentTrack, setCurrentTrack }}>
      {children}
    </AudioPlayerContext.Provider>
  );
}

export function useAudioPlayer() {
  const { audioPlayerData, setAudioPlayerData, currentTrack, setCurrentTrack } = useContext(AudioPlayerContext);
  
  function initPlayerWithTracks(tracks, initialTrack=0) {
    setAudioPlayerData({
      id: v4(),
      initialTrack,
      tracks
    });

    setCurrentTrack(tracks[initialTrack]);
  }

  return { audioPlayerData, setAudioPlayerData, initPlayerWithTracks, currentTrack, setCurrentTrack };
}