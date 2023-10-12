import { useRef, useState } from 'react';

/* 
  TODO: IF I WANTED TO HAVE A RANDOM MODE, IT WOULD BE AS EASY AS GENERATE A RANDOM SORTED ARRAY ON INIT OR EVERY TIME @tracks change.
  By tracks change i mean "adding or removing" songs. If i click another different playlist, it should init again (as key attribute will change)

  @note -> Me encantaria tener alguna forma de arquitecturarlo mejor. En vez que todo el estado interno del player este aqui, me gustaria que dicho estado estuviera centralizado en un unico sitio
  y este componente lo recibiese. De esta manera, podriamos compartir ese estado al resto de componentes que lo necesiten y poder realizar muchas cosas (mediante context, por ejemplo). Pero de momento esto me vale.

  Realmente, la mejor opcion seria que este componente fuese el que estuviese el mas arriba en el render tree y fuera el que tuviera la logica del context. Asi, exportariamos todos estos valores y podriamos añadir aqui la capa
  de funcionalidad y asi estarian todos estos valores disponibles globalmente. Pero para este proyecto esto me sirve. Pero de cara a un futuro, me gustaria tenerlo en cuenta. Asi que, en vez de retornar children(), retornaria
  un contexto y ya luego accederia al valor que quisiera en cualquier componente del render tree.

  Edit: Ya se como hacerlo. Todo estara extrapolado en un custom hook. Cada vez que importes ese hook será como inicializar un reproductor de música y ya luego eres libre de crear la UI que quieras. Si tiene que ser el patron
  render props en vez de un custom hook (porque debemos de tener una etiqueta audio) pues igual. El planteamiento debe de ser ese. Cada vez que lo importas defines un reproductor musical. Para este caso, es sencillo:
  Inicializas un reproductor musical. Lo defines en un contexto y usando el contexto compartes a todo el render tree los atributos del custom hook. Asi, luego defines la UI en la parte que quieras y luego en cualquier parte del render tree tmabien
  podran manipular el reproductor. Por lo tanto ese es el palntemianto. Creas el reproductor, compartes al render tree las propiedades. Y ya luego es crear su UI (usando las propiedades del reproductor que se generan al importar el hook y son compartidas en el contexto) y ya luego
  tambien tendrías la posibilidad de manipularlo donde sea. Ahora bien, deberíamos de añadir un useState que contenga los tracks. De esta manera ya tendríamos todo en un mismo sitio.

  Esto es una mejora porque tal y como lo tengo ahora, la lógica siempre esta pegada en la UI. SIEMPRE. No tenemos forma de separar lógica de UI. Estoy inicializando el reproductor en el mismo sitio donde defino su UI. Con el plantemiento de arriba,
  podría definir la instanciación del reproductor muy arriba en el render tree, y luego en cualquier parte del render tree simplemente crearme un componente que consume los valores del reproductor y los usa para crear la UI. ESTO ES GENIAL!

  Edit: Para lo del random, lo que haría seria generar una semilla (que se resetearía cada vez que cambie tracks) ya que esto nos garantiza que en un mismo set nunca se repite el mismo numero. Por eso las semillas!
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