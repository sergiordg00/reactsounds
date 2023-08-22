import { IoClose } from "react-icons/io5";

import { useAside } from "@/context/AsideContext";
import useScreenSize from "@/hooks/useScreenSize";
import Drawer from "@/shared-components/modals/Drawer";

import AsideContent from "./AsideContent";

export default function Aside() {
  const screenSize = useScreenSize();
  const { isAsideOpen, setIsAsideOpen } = useAside();

  if(screenSize.width < 900) {
    return (
      <Drawer
        isOpen={isAsideOpen}
        onClose={() => setIsAsideOpen(false)}
        className="w-full"
      >
        <button 
          type="button" 
          className="absolute right-2 top-2 rounded-md text-white transition hover:bg-gray-700 focus:outline-gray-700" 
          onClick={() => setIsAsideOpen(false)}
        >
          <span className="sr-only">
            Close drawer
          </span>

          <IoClose className="h-auto w-6"/>
        </button>
        
        <AsideContent/>
      </Drawer>
    );
  } else {
    return (
      <aside className="h-full w-[350px] shrink-0 shadow-[6px_0px_7px_-6px_rgba(0,0,0,0.75)]">
        <AsideContent/>
      </aside>
    );
  }
}