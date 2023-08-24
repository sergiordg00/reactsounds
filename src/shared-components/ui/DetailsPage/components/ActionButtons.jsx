import { MdPlayArrow } from "react-icons/md";

import { useAudioPlayer } from "@/context/AudioPlayerContext";
import MusicVaultButton from "@/shared-components/buttons/MusicVaultButton";

export default function ActionButtons({ data, tracks }) {
  const { initPlayerWithTracks } = useAudioPlayer();

  return (
    <div className="flex w-full items-center gap-x-5">
      <button 
        type="button"
        onClick={() => initPlayerWithTracks(tracks.data)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-background transition hover:scale-110"
      >
        <span className="sr-only">
          Play all
        </span>
        
        <MdPlayArrow size={40}/>
      </button>

      <MusicVaultButton
        key={data.id}
        data={data}
        className="w-8"
      />
    </div>
  );
}