import { createContext, useContext, useState } from "react";
import { v4 } from "uuid";

const AudioPlayerContext = createContext();

export default function AudioPlayerProvider({ children }) {
  const [audioPlayerData, setAudioPlayerData] = useState(null);

  return (
    <AudioPlayerContext.Provider value={{ audioPlayerData, setAudioPlayerData }}>
      {children}
    </AudioPlayerContext.Provider>
  );
}

export function useAudioPlayer() {
  const { audioPlayerData, setAudioPlayerData } = useContext(AudioPlayerContext);
  
  function initPlayerWithTracks(tracks, initialTrack=0) {
    setAudioPlayerData({
      id: v4(),
      initialTrack,
      tracks
    });
  }

  return { audioPlayerData, setAudioPlayerData, initPlayerWithTracks };
}