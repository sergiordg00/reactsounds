import clsx from "clsx";
import { Audio } from "react-loader-spinner";

import { useAudioPlayer } from "@/context/AudioPlayerContext";

export default function TrackItem({ data, index, onClick }) {
  const { currentTrack }  = useAudioPlayer();

  function parseDuration() {
    const minutes = Math.floor(data.duration / 60);
    const seconds = data.duration - minutes * 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  }

  return (
    <div 
      onClick={onClick}
      className={clsx(
        "w-full cursor-pointer rounded-md p-3 transition hover:bg-gray-800", 
        "grid grid-cols-[30px_3fr_2fr] items-center gap-x-4 sm:grid-cols-[30px_3fr_2fr_1fr]"
      )}
    >
      <div className="flex h-[28px] items-center justify-center text-base text-white sm:text-lg">
        {
          currentTrack?.id === data.id ? 
            <Audio
              width="20"
              height="20"
              color="#00d0ea"
            /> 
            :
            index + 1
        }
      </div>

      <p className={clsx(
        "truncate text-sm sm:text-base",
        currentTrack?.id === data.id ? "text-primary" : "text-white"
      )}>
        {data.title}
      </p>

      <p className="truncate text-sm text-white sm:text-base">
        {data.artist.name}
      </p>

      <p className="hidden text-sm text-white sm:block sm:text-base">
        {parseDuration()}
      </p>
    </div>
  );
}