import { useEffect } from "react";

import { useAudioPlayer } from "@/context/AudioPlayerContext";
import GenericAudioPlayer from "@/shared-components/audio/GenericAudioPlayer";

import MainControls from "./components/MainControls";
import TrackInfo from "./components/TrackInfo";
import VolumeControl from "./components/VolumeControl";

export default function Player() {
  const { audioPlayerData } = useAudioPlayer();

  if(!audioPlayerData) return <></>;

  return (
    <GenericAudioPlayer 
      key={audioPlayerData.id} 
      tracks={audioPlayerData.tracks.map(track => track.preview)} 
      initialAudioState="playing"
      initialTrack={audioPlayerData.initialTrack}
    >
      {({
        currentTrack, 
        playTrack, 
        pauseTrack, 
        audioState, 
        loading, 
        currentTime, 
        duration, 
        hasNext, 
        hasPrev, 
        goToNextTrack, 
        goToPrevTrack, 
        sliderProps, 
        setMode, 
        mode, 
        isMuted,
        muteAudio,
        unmuteAudio,
        volumeSliderProps,
      }) => {
        const { setCurrentTrack } = useAudioPlayer();

        useEffect(() => {
          setCurrentTrack(audioPlayerData.tracks[currentTrack]);
        }, [currentTrack]);

        return (
          <footer className="relative flex w-full items-center justify-between gap-x-6 bg-card px-5 py-3 shadow-[0px_-4px_7px_-6px_rgba(0,0,0,0.75)]">
            <TrackInfo 
              data={audioPlayerData.tracks[currentTrack]}
              isPlaying={audioState === "playing"}
            />

            <MainControls
              audioState={audioState}
              loading={loading}
              currentTime={currentTime}
              duration={duration}
              hasNext={hasNext}
              hasPrev={hasPrev}
              sliderProps={sliderProps}
              mode={mode}
              setMode={setMode}
              playTrack={playTrack}
              pauseTrack={pauseTrack}
              goToNextTrack={goToNextTrack}
              goToPrevTrack={goToPrevTrack}
            />

            <VolumeControl
              isMuted={isMuted}
              muteAudio={muteAudio}
              unmuteAudio={unmuteAudio}
              volumeSliderProps={volumeSliderProps}
            />
          </footer>
        );
      }}
    </GenericAudioPlayer>
  );
}