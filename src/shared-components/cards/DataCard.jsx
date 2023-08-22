import clsx from "clsx";
import { useNavigate } from "react-router-dom";

import Cover from "./Cover";

export default function DataCard({ data, className }) {
  const navigate = useNavigate();

  function handleClick() {
    if(data.type === "track") {
      // TODO: PUT THE TRACK IN THE PLAYER
    } else {
      navigate(`/${data.type}/${data.id}`);
    }
  }

  return (
    <article 
      className={clsx(
        "shrink-0 cursor-pointer rounded-md p-2 transition hover:bg-gray-800",
        className
      )}
      onClick={handleClick}
    >
      <Cover 
        data={data} 
        className="mb-3 w-full"
      />

      {
        data.type === "artist" ?
          <p className="dots-on-overflow w-full text-center text-base text-white">
            {data.name}
          </p>
          :
          <>
            <p className="dots-on-overflow text-[15px] text-white">
              {data.title}
            </p>

            <p className="dots-on-overflow text-[14px] text-gray-400">
              {data.artist.name}
            </p>
          </>
      }
    </article>
  );
}