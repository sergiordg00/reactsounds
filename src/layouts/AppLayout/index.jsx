import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";

import AsideProvider from "@/context/AsideContext";
import AudioPlayerProvider from "@/context/AudioPlayerContext";
import MusicVaultProvider from "@/context/MusicVaultContext";

import Aside from "./Aside";
import Player from "./Player";

export default function AppLayout() {
  const location = useLocation();
  const mainRef = useRef(null);

  useEffect(() => {
    mainRef.current.scrollTo(0, 0);
  }, [location]);

  return (
    <AudioPlayerProvider>
      <MusicVaultProvider>
        <AsideProvider>
          <div className="flex h-screen w-full flex-col">
            <div className="flex h-0 w-full grow items-start">
              <Aside/>

              <main className="h-full w-full overflow-y-auto" ref={mainRef}>
                <Outlet/>
              </main>
            </div>

            <Player/>
          </div>
        </AsideProvider>
      </MusicVaultProvider>
    </AudioPlayerProvider>
  );
}