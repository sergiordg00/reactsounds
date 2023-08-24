import { BsSearch } from "react-icons/bs";

export default function Header({ query, setQuery }) {
  function onSubmit(e) {
    e.preventDefault();
    setQuery({ q: e.target.search.value });
  }

  return (
    <div className="sticky top-0 z-[100] w-full bg-background pb-4 pt-6 min-[900px]:pt-10">
      <form 
        onSubmit={onSubmit} 
        className="flex w-full max-w-[500px] items-center gap-x-2 rounded-full bg-white/10 p-3"
      >
        <BsSearch className="shrink-0 text-lg text-white/40"/>

        <input
          type="text"
          name="search"
          placeholder="Search for artists, songs, playlists or albums"
          className="w-full bg-transparent pr-2 text-white placeholder:text-white/40 focus:outline-none"
          defaultValue={query.q}
          spellCheck={false}
          autoComplete="off"
          required
        />
      </form>
    </div>
  );
}