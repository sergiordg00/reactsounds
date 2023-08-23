import clsx from "clsx";
import { MdPause, MdPlayArrow, MdRepeat, MdRepeatOne, MdSkipNext, MdSkipPrevious } from "react-icons/md";

import SliderControl from "@/shared-components/inputs/SliderControl";

export default function MainControls({ audioState, loading, currentTime, duration, hasNext, hasPrev, sliderProps, mode, setMode, playTrack, pauseTrack, goToNextTrack, goToPrevTrack }) {
  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  }

  return (
    <div className="w-full max-w-[800px]">
      <div className="mb-2 flex w-full items-center justify-center gap-x-4">
        <button
          onClick={() => setMode(mode === "loop_track" ? "normal" : "loop_track")}
          className="rounded-full p-1 transition hover:bg-gray-800 focus:outline-none"
        >
          <MdRepeatOne className={clsx(
            "text-2xl",
            mode === "loop_track" ? "text-primary" : "text-white"
          )}/>
        </button>

        <button
          onClick={goToPrevTrack}
          disabled={!hasPrev}
          className={clsx(
            "rounded-full p-1 transition hover:bg-gray-800 focus:outline-none",
            !hasPrev && "pointer-events-none opacity-40"
          )}
        >
          <MdSkipPrevious className="text-2xl text-white" />
        </button>

        <button
          onClick={audioState === "playing" ? pauseTrack : playTrack}
          className="rounded-full bg-white p-1 focus:outline-none"
        >
          {
            audioState === "playing" ?
              <MdPause className="text-3xl text-card" />
              :
              <MdPlayArrow className="text-3xl text-card" />
          }
        </button>

        <button
          onClick={goToNextTrack}
          disabled={!hasNext}
          className={clsx(
            "rounded-full p-1 transition hover:bg-gray-800 focus:outline-none",
            !hasNext && "pointer-events-none opacity-40"
          )}
        >
          <MdSkipNext className="text-2xl text-white" />
        </button>

        <button
          onClick={() => setMode(mode === "loop" ? "normal" : "loop")}
          className="rounded-full p-1 transition hover:bg-gray-800 focus:outline-none"
        >
          <MdRepeat className={clsx(
            "text-2xl",
            mode === "loop" ? "text-primary" : "text-white"
          )}/>
        </button>
      </div>

      <div className="flex w-full items-center gap-x-3">
        <span className="shrink-0 text-xs text-gray-400">
          {loading ? "--:--" : formatTime(currentTime)}
        </span>

        <SliderControl {...sliderProps} />

        <span className="shrink-0 text-xs text-gray-400">
          {loading ? "--:--" : formatTime(duration)}
        </span>
      </div>
    </div>
  );
}