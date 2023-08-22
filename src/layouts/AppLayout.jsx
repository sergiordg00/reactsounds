import { Outlet } from "react-router-dom";

import MusicVaultProvider from "@/context/MusicVaultContext";

export default function AppLayout() {
  return (
    <MusicVaultProvider>
      <Outlet/>
    </MusicVaultProvider>
  );
}