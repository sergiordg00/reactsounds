import { RotatingLines } from "react-loader-spinner";
import { useParams } from "react-router-dom";

import { useAudioPlayer } from "@/context/AudioPlayerContext";
import useFetch from "@/hooks/useFetch";

import ActionButtons from "./components/ActionButtons";
import Header from "./components/Header";
import TrackItem from "./components/TrackItem";

export default function Playbum({ type }) {
  const { id } = useParams();
  const { data, loading } = useFetch(`/${type}/${id}`);
  const { initPlayerWithTracks } = useAudioPlayer();

  if(loading) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <RotatingLines strokeColor="#00d0ea" width="30"/>
      </div>
    );
  } else {
    return (
      <div className="min-h-full w-full pb-5">
        <Header data={data}/>

        <div className="w-full px-6 min-[900px]:px-10">
          <ActionButtons data={data}/>

          <div className="mt-6 grid w-full grid-cols-[30px_3fr_2fr] items-center gap-x-4 px-3 sm:grid-cols-[30px_3fr_2fr_1fr]">
            <p className="text-center text-base text-gray-400 sm:text-lg">
              #
            </p>

            <p className="text-sm text-gray-400 sm:text-base">
              Title
            </p>

            <p className="text-sm text-gray-400 sm:text-base">
              Artist
            </p>

            <p className="hidden text-sm text-gray-400 sm:block sm:text-base">
              Duration
            </p>
          </div>

          <div className="mt-2 h-[1px] w-full bg-gray-700"/>

          <div className="mt-1 w-full">
            {data.tracks.data.map((track, index) => (
              <TrackItem 
                key={track.id} 
                data={track} 
                index={index}
                onClick={() => initPlayerWithTracks(data.tracks.data, index)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}