import { useNavigate } from "react-router-dom";

import { useAudioPlayer } from "@/context/AudioPlayerContext";
import Cover from "@/shared-components/cards/Cover";

export default function VaultItem({ data }) {
  const { initPlayerWithTracks } = useAudioPlayer();
  const navigate = useNavigate();

  function handleClick() {
    if(data.type === "track") {
      initPlayerWithTracks([data]);
    } else {
      navigate(`/${data.type}/${data.id}`);
    }
  }

  function getType() {
    if(data.type === "track") {
      return "Track";
    } else if(data.type === "artist") {
      return "Artist";
    } else if(data.type === "playlist") {
      return "Playlist";
    } else {
      return "Album";
    }
  }

  return (
    <div 
      className="flex w-full cursor-pointer items-center gap-x-3 rounded-md p-2 transition hover:bg-gray-800" 
      onClick={handleClick}
    >
      <Cover data={data} className="w-14"/>

      <div className="w-full overflow-hidden">
        <p className="truncate text-sm font-semibold text-white">
          {data.title || data.name}
        </p>

        <p className="mt-1 truncate text-xs text-gray-400">
          {getType()} &bull; {data.artist?.name || data.user?.name || data.name}
        </p>
      </div>
    </div>
  );
}