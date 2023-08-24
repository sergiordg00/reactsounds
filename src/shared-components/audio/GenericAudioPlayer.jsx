import { useRef, useState } from 'react';

/* 
  TODO: IF I WANTED TO HAVE A RANDOM MODE, IT WOULD BE AS EASY AS GENERATE A RANDOM SORTED ARRAY ON INIT OR EVERY TIME @tracks change.
  By tracks change i mean "adding or removing" songs. If i click another different playlist, it should init again (as key attribute will change)

  @note -> Me encantaria tener alguna forma de arquitecturarlo mejor. En vez que todo el estado interno del player este aqui, me gustaria que dicho estado estuviera centralizado en un unico sitio
  y este componente lo recibiese. De esta manera, podriamos compartir ese estado al resto de componentes que lo necesiten y poder realizar muchas cosas (mediante context, por ejemplo). Pero de momento esto me vale.
*/
export default function GenericAudioPlayer({ initialMode="normal", initialTrack=0, initialAudioState="paused", tracks=[], onNextTrack=null, onPrevTrack=null, children }) {
  const [mode, setMode] = useState(initialMode);
  const [currentTrack, setCurrentTrack] = useState(initialTrack); 
  const [audioState, setAudioState] = useState(initialAudioState);
  const [isMuted, setIsMuted] = useState(false); /* An idea: we could persist in local storage user settings for these controls, isMuted and volume, (like many platforms do) and we init from localStorage */
  const [volume, setVolume] = useState(1);
  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(100);

  const audioPlayer = useRef(null);
  const isSliding = useRef(false);

  const isLastTrack = currentTrack === tracks.length - 1;
  const isFirstTrack = currentTrack === 0;
  const hasNext = !isLastTrack || mode === "loop";
  const hasPrev = !isFirstTrack || mode === "loop";
  const sliderProps = {
    step: 1,
    value: currentTime,
    max: duration,
    onChange: _onSlideChange,
    onTouchEnd: _onSlideEnd,
    onMouseUp: _onSlideEnd,
    onKeyDown: (e) => e.preventDefault()
  };
  const volumeSliderProps = {
    step: 0.01,
    value: volume,
    max: 1,
    onChange: _onVolumeSlideChange,
    onKeyDown: (e) => e.preventDefault()
  };

  function _onSlideChange(e) {
    isSliding.current = true;
    setCurrentTime(e.target.value);
  }

  function _onSlideEnd(e) {
    isSliding.current = false;
    audioPlayer.current.currentTime = e.target.value;
  }

  function _onVolumeSlideChange(e) {
    audioPlayer.current.volume = e.target.value;
    setVolume(e.target.value);

    if(+e.target.value === 0) {
      muteAudio();
    } else if(isMuted) {
      unmuteAudio();
    }
  }

  function _onLoadedMetadata() {
    setLoading(false);
    setDuration(Math.floor(audioPlayer.current.duration));

    if(audioState === "playing") {
      audioPlayer.current.play();
    }
  }

  function _onTimeUpdate() {
    if(!isSliding.current) {
      setCurrentTime(Math.floor(audioPlayer.current.currentTime));
    }
  }

  function _onAudioEnd() {
    if(mode === "loop_track") {
      restartTrack();
    } else if(isLastTrack && mode === "reset") {
      resetTrack();
    } else if(hasNext) {
      goToNextTrack();
    } else {
      setAudioState("paused");
    }
  }

  function playTrack() {
    audioPlayer.current.play();
    setAudioState("playing");
  }

  function pauseTrack() {
    audioPlayer.current.pause();
    setAudioState("paused");
  }

  function resetTrack() {
    audioPlayer.current.currentTime = 0;
    audioPlayer.current.pause();
    setAudioState("paused");
  }

  function restartTrack() {
    audioPlayer.current.currentTime = 0;
    audioPlayer.current.play();
    setAudioState("playing");
  }

  function goToNextTrack() {
    if(!isLastTrack) {
      setCurrentTrack(currentTrack + 1);

      if(onNextTrack) {
        onNextTrack();
      }
    } else if(mode === "loop") {
      if(tracks.length > 1) {
        setCurrentTrack(0);

        if(onNextTrack) {
          onNextTrack();
        }
      } else {
        restartTrack();
      }
    }
  }

  function goToPrevTrack() {
    if(!isFirstTrack) {
      setCurrentTrack(currentTrack - 1);

      if(onPrevTrack) {
        onPrevTrack();
      }
    } else if(mode === "loop") {
      if(tracks.length > 1) {
        setCurrentTrack(tracks.length - 1);

        if(onPrevTrack) {
          onPrevTrack();
        }
      } else {
        restartTrack();
      }
    }
  }
  
  function incrementTimeBy(timeToIncrement) {
    audioPlayer.current.currentTime += timeToIncrement;
  }

  function decrementTimeBy(timeToDecrement) {
    audioPlayer.current.currentTime -= timeToDecrement;
  }

  function playTrackAt(trackIndex) {
    setCurrentTrack(trackIndex);
    playTrack();
  }

  function muteAudio() {
    setIsMuted(true);
    setVolume(0);
  }

  function unmuteAudio() {
    setIsMuted(false);

    if(audioPlayer.current.volume === 0) {
      audioPlayer.current.volume = 1;
    }
    
    setVolume(audioPlayer.current.volume);
  }

  return (
    <>
      <audio
        src={tracks[currentTrack]} 
        style={{ display: "none" }}
        ref={audioPlayer}
        preload="metadata" 
        muted={isMuted}
        onLoadStart={() => setLoading(true)}
        onLoadedMetadata={_onLoadedMetadata}
        onTimeUpdate={_onTimeUpdate}
        onEnded={_onAudioEnd}
      /> 

      {children({
        mode,
        currentTrack,
        audioState,
        loading,
        currentTime,
        duration,
        hasNext,
        hasPrev,
        sliderProps,
        isMuted,
        volumeSliderProps,
        setMode,
        playTrack,
        pauseTrack,
        resetTrack,
        restartTrack,
        goToNextTrack,
        goToPrevTrack,
        incrementTimeBy,
        decrementTimeBy,
        playTrackAt,
        muteAudio,
        unmuteAudio,
      })}
    </>
  );
}