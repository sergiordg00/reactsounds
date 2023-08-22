import { useAside } from "@/context/AsideContext";
import MusicVaultButton from "@/shared-components/buttons/MusicVaultButton";

export default function Home() {
  const { setIsAsideOpen } = useAside();
  const track = {
    "id": 916424,
    "readable": true,
    "title": "Without Me",
    "title_short": "Without Me",
    "title_version": "",
    "link": "https://www.deezer.com/track/916424",
    "duration": 290,
    "rank": 961431,
    "explicit_lyrics": true,
    "explicit_content_lyrics": 1,
    "explicit_content_cover": 0,
    "preview": "https://cdns-preview-c.dzcdn.net/stream/c-cca63b2c92773d54e61c5b4d17695bd2-8.mp3",
    "md5_image": "ec3c8ed67427064c70f67e5815b74cef",
    "artist": {
      "id": 13,
      "name": "Eminem",
      "link": "https://www.deezer.com/artist/13",
      "picture": "https://api.deezer.com/artist/13/image",
      "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg",
      "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg",
      "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg",
      "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg",
      "tracklist": "https://api.deezer.com/artist/13/top?limit=50",
      "type": "artist"
    },
    "album": {
      "id": 103248,
      "title": "The Eminem Show",
      "cover": "https://api.deezer.com/album/103248/image",
      "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/56x56-000000-80-0-0.jpg",
      "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/250x250-000000-80-0-0.jpg",
      "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/500x500-000000-80-0-0.jpg",
      "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/1000x1000-000000-80-0-0.jpg",
      "md5_image": "ec3c8ed67427064c70f67e5815b74cef",
      "tracklist": "https://api.deezer.com/album/103248/tracks",
      "type": "album"
    },
    "type": "track"
  };

  const artist = {
    "id": 13,
    "name": "Eminem",
    "link": "https://www.deezer.com/artist/13",
    "picture": "https://api.deezer.com/artist/13/image",
    "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg",
    "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg",
    "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg",
    "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg",
    "nb_album": 56,
    "nb_fan": 16480266,
    "radio": true,
    "tracklist": "https://api.deezer.com/artist/13/top?limit=50",
    "type": "artist"
  };

  const playlist = {
    "id": 3645740262,
    "title": "100% Eminem",
    "public": true,
    "nb_tracks": 39,
    "link": "https://www.deezer.com/playlist/3645740262",
    "picture": "https://api.deezer.com/playlist/3645740262/image",
    "picture_small": "https://e-cdns-images.dzcdn.net/images/playlist/8e917792796412110f79996f4ae53b09/56x56-000000-80-0-0.jpg",
    "picture_medium": "https://e-cdns-images.dzcdn.net/images/playlist/8e917792796412110f79996f4ae53b09/250x250-000000-80-0-0.jpg",
    "picture_big": "https://e-cdns-images.dzcdn.net/images/playlist/8e917792796412110f79996f4ae53b09/500x500-000000-80-0-0.jpg",
    "picture_xl": "https://e-cdns-images.dzcdn.net/images/playlist/8e917792796412110f79996f4ae53b09/1000x1000-000000-80-0-0.jpg",
    "checksum": "e44a7560b332f4b12d88aeada97be77c",
    "tracklist": "https://api.deezer.com/playlist/3645740262/tracks",
    "creation_date": "2017-10-02 10:07:26",
    "md5_image": "8e917792796412110f79996f4ae53b09",
    "picture_type": "playlist",
    "user": {
      "id": 1990304482,
      "name": "Deezer Artist Editor",
      "tracklist": "https://api.deezer.com/user/1990304482/flow",
      "type": "user"
    },
    "type": "playlist"
  };

  const album = {
    "id": 103248,
    "title": "The Eminem Show",
    "link": "https://www.deezer.com/album/103248",
    "cover": "https://api.deezer.com/album/103248/image",
    "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/56x56-000000-80-0-0.jpg",
    "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/250x250-000000-80-0-0.jpg",
    "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/500x500-000000-80-0-0.jpg",
    "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/1000x1000-000000-80-0-0.jpg",
    "md5_image": "ec3c8ed67427064c70f67e5815b74cef",
    "genre_id": 116,
    "nb_tracks": 20,
    "record_type": "album",
    "tracklist": "https://api.deezer.com/album/103248/tracks",
    "explicit_lyrics": true,
    "artist": {
      "id": 13,
      "name": "Eminem",
      "link": "https://www.deezer.com/artist/13",
      "picture": "https://api.deezer.com/artist/13/image",
      "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg",
      "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg",
      "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg",
      "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg",
      "tracklist": "https://api.deezer.com/artist/13/top?limit=50",
      "type": "artist"
    },
    "type": "album"
  };

  return (
    <div className="flex w-full flex-col gap-y-6 p-5">
      <button className="w-fit rounded-lg bg-sky-500 px-3 py-2" onClick={() => setIsAsideOpen(true)}>
        Open aside
      </button>

      <div className="flex w-fit cursor-pointer gap-x-3 rounded-lg p-2 transition hover:bg-gray-800">
        <MusicVaultButton
          data={track}
          className="w-[20px]"
        />

        <p className="text-white">
          Track button
        </p>
      </div>

      <div className="flex w-fit cursor-pointer gap-x-3 rounded-lg p-2 transition hover:bg-gray-800">
        <MusicVaultButton
          data={artist}
          className="w-[20px]"
        />

        <p className="text-white">
          Artist button
        </p>
      </div>

      <div className="flex w-fit cursor-pointer gap-x-3 rounded-lg p-2 transition hover:bg-gray-800">
        <MusicVaultButton
          data={playlist}
          className="w-[20px]"
        />

        <p className="text-white">
          Playlist button
        </p>
      </div>

      <div className="flex w-fit cursor-pointer gap-x-3 rounded-lg p-2 transition hover:bg-gray-800">
        <MusicVaultButton
          data={album}
          className="w-[20px]"
        />

        <p className="text-white">
          Album button
        </p>
      </div>
    </div>
  );
}