import { RotatingLines } from "react-loader-spinner";

import useFetch from "@/hooks/useFetch";

import AllResults from "./components/AllResults";

export default function DataHandler({ query }) {
  const { data: tracks, loading: tracksLoading, error: tracksError } = useFetch(`/search?q=${query.q}`);
  const { data: albums, loading: albumsLoading, error: albumsError } = useFetch(`/search/album?q=${query.q}`);
  const { data: artists, loading: artistsLoading, error: artistsError } = useFetch(`/search/artist?q=${query.q}`);
  const { data: playlists, loading: playlistsLoading, error: playlistsError } = useFetch(`/search/playlist?q=${query.q}`);

  if(tracksLoading || albumsLoading || artistsLoading || playlistsLoading) {
    return (
      <div className="mt-14 flex w-full items-center justify-center">
        <RotatingLines strokeColor="#00d0ea" width="30"/>
      </div>
    );
  } else {
    return (
      <AllResults
        queryText={query.q}
        tracks={tracks}
        albums={albums}
        artists={artists}
        playlists={playlists}
        error={tracksError || albumsError || artistsError || playlistsError}
      />
    );
  }
}