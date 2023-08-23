import config from "@/config";
import DataSlider from "@/shared-components/sliders/DataSlider";

import MainSong from "./components/MainSong";

export default function Home() {
  return (
    <div className="min-h-full w-full pb-10">
      <MainSong />

      <div className="relative mt-[-50px] flex w-full flex-col gap-y-7 px-6 min-[900px]:mt-[-100px] min-[900px]:gap-y-10 min-[900px]:px-10">
        <DataSlider 
          title="Popular Albums" 
          data={config.content.popular_albums}
        />

        <DataSlider 
          title="Popular Artists" 
          data={config.content.popular_artists}
        />

        <DataSlider 
          title="Popular Tracks" 
          data={config.content.popular_tracks}
        />

        <DataSlider 
          title="Popular Playlists" 
          data={config.content.popular_playlists}
        />
      </div>
    </div>
  );
}