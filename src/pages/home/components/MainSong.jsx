import { BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

import artistImage from "@/assets/img/martingarrix.png";
import config from "@/config";
import { useAside } from "@/context/AsideContext";
import { useAudioPlayer } from "@/context/AudioPlayerContext";

export default function MainSong() {
  const { setIsAsideOpen } = useAside();
  const { initPlayerWithTracks } = useAudioPlayer();
  const navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();
    
    if(e.target.search.value === "") return;

    navigate(`/search?q=${e.target.search.value}`);
  }

  return (
    <section className="relative h-[500px] w-full min-[900px]:h-[600px]" style={{ background: "linear-gradient(169deg, rgba(36,136,130,1) 0%, rgba(12,18,33,1) 76%)" }}>
      <div className="relative h-full w-full max-w-[1400px] px-6 py-5 min-[900px]:px-10">
        <img 
          src={artistImage} 
          alt="Artist" 
          className="absolute right-0 top-0 h-full w-[45%] object-cover object-left" 
        />

        <div className="flex w-full items-center justify-between gap-x-4">
          <form 
            onSubmit={onSubmit} 
            className="flex w-full max-w-[500px] items-center gap-x-2 rounded-full bg-white/10 p-3 backdrop-blur-sm"
          >
            <BsSearch className="text-lg text-white/40"/>

            <input
              type="text"
              name="search"
              placeholder="Search for artists, songs, playlists or albums"
              className="w-full bg-transparent pr-2 text-white placeholder:text-white/40 focus:outline-none"
              spellCheck={false}
              autoComplete="off"
              required
            />
          </form>

          <button
            onClick={() => setIsAsideOpen(true)}
            className="block rounded-full bg-white/10 p-3 text-white backdrop-blur-sm min-[900px]:hidden"
          >
            <span className="sr-only">
              Open Aside
            </span>

            <GiHamburgerMenu size={22} />
          </button>
        </div>

        <div className="relative mt-12 flex w-full max-w-[450px] flex-col gap-y-5 min-[900px]:mt-20">
          <h1 className="w-full text-4xl font-semibold text-white min-[900px]:text-5xl">
            New Music Friday!
          </h1>

          <p className="w-full text-gray-400" style={{ textWrap: "balance" }}>
            Whether you&apos;re a dedicated electronic music fan or simply looking for the perfect track to elevate your mood, 
            &quot;In the Name of Love&quot; is your ultimate go-to. So why wait? Dive in, turn up the volume, and let the rhythm take control.
          </p>

          <button
            onClick={() => initPlayerWithTracks([config.content.main_song])}
            className="mt-1 w-full max-w-[200px] rounded-full bg-primary px-5 py-2 font-semibold text-black hover:opacity-75"
          >
            Play Now
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-[100px] w-full bg-gradient-to-t from-background to-transparent"/>
    </section>
  );
}