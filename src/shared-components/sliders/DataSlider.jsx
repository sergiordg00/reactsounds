import clsx from "clsx";
import { useMemo } from "react";

import DataCard from "@/shared-components/cards/DataCard";

import FHSlider from "./FHSlider";

export default function DataSlider({ title, data }) {
  const dataToRender = useMemo(() => data.slice(0, 10), [data]);

  return (
    <section className="">
      <h2 className="mb-4 w-full text-xl font-semibold text-white md:mb-5 md:text-2xl">
        {title}
      </h2>

      <FHSlider>
        {dataToRender.map((item) => (
          <DataCard 
            key={item.id}
            data={item} 
            className={clsx(
              item.type === "artist" ? "w-[110px] md:w-[130px]" : "w-[150px] md:w-[180px]"
            )}
          />
        ))}
      </FHSlider>
    </section>
  );
}