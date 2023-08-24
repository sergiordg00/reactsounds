import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Header from "./components/Header";
import DataHandler from "./DataHandler";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState({
    q: searchParams.get("q") || "a",
  });

  useEffect(() => {
    setSearchParams(query, { replace: true });
  }, [query]);

  return (
    <div className="w-full p-6 pt-0 min-[900px]:p-10 min-[900px]:pt-0">
      <Header query={query} setQuery={setQuery}/>
      
      <DataHandler query={query}/>
    </div>
  );
}