import { MdOutlineLibraryMusic } from "react-icons/md";

export default function EmptyVault() {
  return (
    <div className="flex h-0 w-full grow items-center justify-center overflow-y-auto">
      <div className="flex max-w-[500px] flex-col items-center gap-y-3">
        <MdOutlineLibraryMusic className="text-6xl text-primary"/>

        <p className="text-lg font-semibold text-white">
          Your music vault is empty
        </p>

        <p className="text-center text-sm text-gray-400">
          You can add albums, artists, playlists and tracks to the vault by clicking the like button.
          This will help you find your favorite music faster.
        </p>
      </div>
    </div>
  );
}