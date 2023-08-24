import Cover from "@/shared-components/cards/Cover";

export default function Header({ data }) {
  console.log(data);
  return (
    <header 
      className="relative flex min-h-[340px] w-full items-end overflow-y-auto bg-background bg-cover bg-center bg-no-repeat p-6 min-[900px]:min-h-[400px] min-[900px]:p-10"
      style={{ backgroundImage: `url(${data.picture_small || data.cover_small})` }}
    >
      <div className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-background to-transparent backdrop-blur-xl"/>

      <div className="items relative flex w-full flex-col gap-x-5 gap-y-3 max-[899px]:items-center min-[900px]:flex-row">
        <Cover data={data} className="w-[200px]"/>

        <div className="flex flex-col justify-end gap-y-3 min-[900px]:gap-y-4">
          <h1 className="text-center text-4xl font-bold text-white min-[900px]:text-start min-[900px]:text-6xl">
            {data.title}
          </h1>

          <p className="text-center text-sm font-semibold text-white min-[900px]:text-start min-[900px]:text-base">
            <span className="font-normal text-gray-400">
              {data.type === "album" ? "Album by" : "Created by"}
            </span>

            &nbsp;

            {data.artist?.name || data.creator?.name}
          </p>
        </div>

      </div>
    </header>
  );
}