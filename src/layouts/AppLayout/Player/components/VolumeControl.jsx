import { MdVolumeDown, MdVolumeOff, MdVolumeUp } from 'react-icons/md';

import SliderControl from '@/shared-components/inputs/SliderControl';

export default function VolumeControl({ isMuted, muteAudio, unmuteAudio, volumeSliderProps }) {
  return (
    <div className="hidden w-full max-w-[120px] items-center gap-x-2 min-[900px]:flex">
      <button
        className="rounded-full p-1 transition hover:bg-gray-800 focus:outline-none"
        onClick={isMuted ? unmuteAudio : muteAudio}
      >
        {
          isMuted ? 
            <MdVolumeOff className="text-2xl text-primary" />
            : 
            volumeSliderProps.value < 0.5 ?
              <MdVolumeDown className="text-2xl text-primary" />
              :
              <MdVolumeUp className="text-2xl text-primary" />
        }
      </button>

      <SliderControl {...volumeSliderProps} />
    </div> 
  );
}