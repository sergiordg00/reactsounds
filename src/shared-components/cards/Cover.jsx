import clsx from "clsx";

export default function Cover({ data, className }) {
  if(data.type === "track") {
    return (
      <img 
        src={data.album.cover_xl}
        alt="Track's Album Cover" 
        className={clsx(
          "aspect-square shrink-0 bg-gray-500 object-cover object-center",
          className
        )}
      />
    );
  } else if(data.type === "artist") {
    return (
      <img 
        src={data.picture_xl}
        alt="Artist's Picture" 
        className={clsx(
          "aspect-square shrink-0 rounded-full bg-gray-500 object-cover object-center",
          className
        )}
      />
    );
  } else {
    return (
      <div className={clsx(
        "relative aspect-square shrink-0",
        className
      )}>
        <img 
          src={data.picture_xl || data.cover_xl}
          alt="Cover"
          className={clsx(
            "relative z-[2] aspect-square rounded-md bg-gray-500 object-cover object-center",
            "w-[calc(100%-15px)]"
          )}
        />

        <div className={clsx(
          "absolute z-[1] aspect-square", 
          "rounded-md border border-solid border-gray-500 bg-gray-700",
          "left-[7.5px] top-[7.5px] w-[calc(100%-15px)]"
        )}/>

        <div className={clsx(
          "absolute aspect-square", 
          "rounded-md border border-solid border-gray-500 bg-gray-500/30",
          "left-[15px] top-[15px] w-[calc(100%-15px)]"
        )}/>
      </div>
    );
  }
}