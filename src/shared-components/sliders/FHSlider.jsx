import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import './styles/FHSlider.css';

export default function FHSlider({ children, gapX="gap-x-3 sm:gap-x-4" }) {
  const [displayPrev, setDisplayPrev] = useState(false);
  const [displayNext, setDisplayNext] = useState(false);
  const fhSliderRef = useRef(null);

  useEffect(()=>{
    _checkOverflows();
  }, []);

  function _checkOverflows() {
    const { clientWidth, scrollLeft, scrollWidth } = fhSliderRef.current;

    if(scrollLeft !== 0) setDisplayPrev(true);
    else setDisplayPrev(false);

    if(scrollLeft + clientWidth < scrollWidth) setDisplayNext(true);
    else setDisplayNext(false);
  }

  function slideNext() {
    const { clientWidth, scrollLeft, scrollWidth } = fhSliderRef.current;
    const newScrollLeft = scrollLeft + (clientWidth / 2);

    fhSliderRef.current.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });

    if(newScrollLeft >= scrollWidth - clientWidth && displayNext) setDisplayNext(false);
    if(newScrollLeft > 0 && !displayPrev) setDisplayPrev(true);
  }

  function slidePrev() {
    const { clientWidth, scrollLeft, scrollWidth } = fhSliderRef.current;
    const newScrollLeft = scrollLeft - (clientWidth / 2);

    fhSliderRef.current.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });

    if(newScrollLeft <= 0 && displayPrev) setDisplayPrev(false);
    if(newScrollLeft < scrollWidth - clientWidth && !displayNext) setDisplayNext(true);
  }

  return (
    <>
      <div className="fhslider__container" onMouseEnter={_checkOverflows}>
        <div 
          ref={fhSliderRef}
          className={clsx(
            "fhslider__viewport",
            gapX
          )}
        >
          {children}
        </div>

        <button 
          type="button" 
          onClick={slidePrev}
          className={clsx(
            "fhslider__controls prev",
            "left-0 z-10 flex shrink-0 items-center justify-center rounded-full border border-white bg-primary text-white",
            "h-[35px] w-[35px] md:h-[40px] md:w-[40px]",
            displayPrev && "active"
          )} 
        >
          <FaArrowLeft size={20}/>
        </button>

        <button 
          type="button" 
          onClick={slideNext}
          className={clsx(
            "fhslider__controls prev",
            "right-0 z-10 flex shrink-0 items-center justify-center rounded-full border border-white bg-primary text-white",
            "h-[35px] w-[35px] md:h-[40px] md:w-[40px]",
            displayNext && "active"
          )} 
        >
          <FaArrowRight size={20}/>
        </button>
      </div>
    </>
  );
}