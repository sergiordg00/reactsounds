import clsx from 'clsx';
import { useRef } from 'react';

import './styles/CustomInputRange.css';

/** Use it in a controlled way */
export default function CustomInputRange({ trackClassName, progressClassName, thumb, ...inputProps }) {
  const realInputRange = useRef();
  const currentWidth = getCurrentWidth();

  function getCurrentWidth() {
    let currentValue;
    const defaultValue = inputProps.defaultValue || 0;
    const min = inputProps.min || 0;
    const max = inputProps.max || 100;

    if(inputProps.value || inputProps.value === 0) {
      if(inputProps.value <= min) currentValue = min;
      else if(inputProps.value >= max) currentValue = max;
      else currentValue = inputProps.value;
    } else if(realInputRange.current) {
      currentValue = realInputRange.current.value;
    } else {
      if(defaultValue <= min) currentValue = min;
      else if(defaultValue >= max) currentValue = max;
      else currentValue = defaultValue;
    }
    
    return ((currentValue - min) / (max - min)) * 100;
  }

  return (
    <>
      <div className={clsx(
        "custom-input-range__track",
        trackClassName
      )}>
        <div style={{ width: `${currentWidth}%` }} className={clsx(
          "custom-input-range__progress",
          progressClassName
        )}>
          {Boolean(thumb) && (
            <div style={{ transform: `translateX(${100-currentWidth}%)` }} className="custom-input-range__thumb">
              {thumb}
            </div>
          )}
        </div>

        <input  
          type="range" 
          className="custom-input-range__real-range" 
          ref={realInputRange}
          {...inputProps}
        />
      </div>
    </>
  );
}