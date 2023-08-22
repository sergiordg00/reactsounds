import { Outlet } from "react-router-dom";

import AsideProvider from "@/context/AsideContext";
import MusicVaultProvider from "@/context/MusicVaultContext";

import Aside from "./Aside";
import Player from "./Player";

export default function AppLayout() {
  return (
    <MusicVaultProvider>
      <AsideProvider>
        <div className="flex h-screen w-full flex-col">
          <div className="flex h-0 w-full grow items-start">
            <Aside/>

            <main className="h-full w-full overflow-y-auto">
              <Outlet/>
            </main>
          </div>

          <Player/>
        </div>
      </AsideProvider>
    </MusicVaultProvider>
  );
}