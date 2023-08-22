import { useState } from "react";

import SliderControl from "@/shared-components/inputs/SliderControl";

export default function Prueba() {
  const [value, setValue] = useState(450);
  return (
    <div className="min-h-screen w-full p-12">
      <div className="w-full">
        <SliderControl
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
    </div>
  );
}