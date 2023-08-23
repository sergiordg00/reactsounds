import { Audio } from "react-loader-spinner";

import MusicVaultButton from "@/shared-components/buttons/MusicVaultButton";

export default function TrackInfo({ data, isPlaying }) {
  return (
    <div className="hidden w-full max-w-[250px] items-center gap-x-3 min-[900px]:flex">
      {isPlaying && (
        <Audio
          className="shrink-0"
          width={22}
          height={22}
          color="#00d0ea"
        />
      )}

      <img 
        src={data.album.cover_small} 
        alt="Track's Album Cover" 
        className="aspect-square w-14 shrink-0 bg-gray-500 object-cover object-center" 
      />

      <div className="w-full overflow-hidden">
        <p className="w-full truncate text-sm font-medium text-white">
          {data.title}
        </p>

        <p className="mt-1 w-full truncate text-xs text-gray-400">
          {data.artist.name}
        </p>
      </div>

      <MusicVaultButton 
        key={data.id} /** This is important to prevent the button from not updating when the track changes */
        data={data} 
        className="w-5"
      />
    </div>
  );
}