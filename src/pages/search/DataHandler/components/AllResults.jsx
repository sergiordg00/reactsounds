import DataSlider from "@/shared-components/sliders/DataSlider";

export default function AllResults({ queryText, tracks, albums, artists, playlists, error }) {
  return (
    <>
      <p className="mb-3 text-gray-400">
        Search results for

        &nbsp;

        <span className="font-bold text-white">
          &quot;{queryText}&quot;
        </span>
      </p>

      {!error && (
        <div className="flex w-full flex-col gap-y-7 min-[900px]:gap-y-10">
          <DataSlider
            title="Tracks"
            data={tracks.data}
          />

          <DataSlider
            title="Albums"
            data={albums.data}
          />

          <DataSlider
            title="Artists"
            data={artists.data}
          />

          <DataSlider
            title="Playlists"
            data={playlists.data}
          />
        </div>
      )}

    </>
  );
}