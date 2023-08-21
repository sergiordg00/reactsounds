import RangeTouch from 'rangetouch';
import { useEffect, useRef } from 'react';

import useForceRender from '@/hooks/useForceRender';

import './styles/CustomInputRange.css';

// TODO: USE CLSX, AND ADD CLASSNAMES TO TRACK, PROGRESS AND THUMB (IN ORDER TO CUSTOMIZE THEM WITH TAILWIND OR JUST CSS. BUT THIS WAY I ALLOW BOTH)
// we have the .css in GITHUB!

export default function CustomInputRange({ className="", ...inputProps }) {
  const forceRender = useForceRender();
  const realInputRange = useRef();
  const currentWidth = getCurrentWidth();

  useEffect(()=>{
    const range = new RangeTouch(realInputRange.current);
    return () => range.destroy();
  }, []);

  function getCurrentWidth() {
    let currentValue = null;
    if(isTruthy(value)) {
      if(value <= minValue) currentValue = minValue;
      else if(value >= maxValue) currentValue = maxValue;
      else currentValue = value;
    } else if(realInputRange.current) {
      currentValue = realInputRange.current.value;
    } else {
      if(defaultValue <= minValue) currentValue = minValue;
      else if(defaultValue >= maxValue) currentValue = maxValue;
      else currentValue = defaultValue;
    }
    return ((currentValue - minValue) / (maxValue - minValue)) * 100;
  }

  function eventHandler(e, eventController) {
    if(eventController) eventController(e);
    forceRender();
  }

  function isTruthy(item) {
    return item !== null && item !== undefined;
  }

  return (
    <>
      <div className={`custom-input-range__track ${className}`}>
        <div style={{ width: `${currentWidth}%` }} className="custom-input-range__progress">
          {thumb && (
            <div style={{ transform: `translateX(${100-currentWidth}%)` }} className="custom-input-range__thumb">
              {customThumb}
            </div>
          )}
        </div>

        <input  
          type="range" 
          className="custom-input-range__real-range" 
          value={value}
          defaultValue={isTruthy(value) ? undefined : defaultValue}
          min={minValue}
          max={maxValue} 
          ref={node => {
            if(reference) reference.current = node;
            realInputRange.current = node;
          }} 
          onInput={(e)=>eventHandler(e, onInput)} 
          onMouseUp={(e)=>eventHandler(e, onMouseUp)}
          onTouchEnd={(e)=>eventHandler(e, onTouchEnd)}
          onKeyDown={(e)=>eventHandler(e, onKeyDown)}
          step={step}
        />
      </div>
    </>
  );
}