import clsx from "clsx";
import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";

import { useMusicVault } from "@/context/MusicVaultContext";

export default function MusicVaultButton({ data, className }) {
  const { contains, add, remove } = useMusicVault();
  const [isInVault, setIsInVault] = useState(contains(`${data.type}-${data.id}`));

  function addToVault() {
    add(`${data.type}-${data.id}`);
    setIsInVault(true);
  }

  function removeFromVault() {
    remove(`${data.type}-${data.id}`);
    setIsInVault(false);
  }

  return (
    <button 
      type="button"
      onClick={isInVault ? removeFromVault : addToVault}
      className={clsx(
        "flex aspect-square shrink-0 items-center justify-center",
        className
      )}
    >
      <AiFillHeart className={clsx(
        "h-auto w-full",
        isInVault ? "fill-primary stroke-none" : "fill-none stroke-primary stroke-[50]"
      )}/>
    </button>
  );
}