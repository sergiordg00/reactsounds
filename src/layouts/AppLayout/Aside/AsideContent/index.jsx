import clsx from "clsx";
import { useState } from "react";
import { BiSolidPlaylist } from "react-icons/bi";
import { MdOutlineExplore } from "react-icons/md";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { useMusicVault } from "@/context/MusicVaultContext";
import FilterCard from "@/shared-components/cards/FilterCard";

import MusicVault from "./MusicVault";

export default function AsideContent() {
  const { pathname } = useLocation();
  const [selectedFilter, setSelectedFilter] = useState(null);
  const { musicVault } = useMusicVault();

  return (
    <div className="flex h-full w-full flex-col bg-card px-4 py-3 pt-10 min-[900px]:pt-5">
      <Link 
        to="/"
        className={clsx(
          "mb-5 flex w-full items-center gap-x-3 rounded-lg p-3 transition hover:bg-gray-800",
          pathname === "/" && "bg-gray-800"
        )}
      >
        <MdOutlineExplore className="shrink-0 text-2xl text-primary"/>

        <p className={clsx(
          "w-full text-white",
          pathname === "/" && "font-bold"
        )}>
          Discover
        </p>
      </Link>

      <h2 className="mb-4 flex w-full items-center gap-x-2 text-[17px] font-semibold text-white">
        <BiSolidPlaylist className="shrink-0 text-2xl"/>

        Music Vault
      </h2>

      <div className="flex w-full items-center gap-x-2 overflow-y-auto pb-3">
        <FilterCard
          onClick={() => setSelectedFilter(selectedFilter === "album" ? null : "album")}
          isActive={selectedFilter === "album"}
          text="Albums"
        />

        <FilterCard
          onClick={() => setSelectedFilter(selectedFilter === "artist" ? null : "artist")}
          isActive={selectedFilter === "artist"}
          text="Artists"
        />

        <FilterCard
          onClick={() => setSelectedFilter(selectedFilter === "playlist" ? null : "playlist")}
          isActive={selectedFilter === "playlist"}
          text="Playlists"
        />

        <FilterCard
          onClick={() => setSelectedFilter(selectedFilter === "track" ? null : "track")}
          isActive={selectedFilter === "track"}
          text="Tracks"
        />
      </div>

      <MusicVault 
        data={
          selectedFilter ? 
            musicVault.filter(item => item.type === selectedFilter) 
            :
            musicVault
        }
      />
    </div>
  );
}