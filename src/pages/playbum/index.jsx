import { RotatingLines } from "react-loader-spinner";
import { useParams } from "react-router-dom";

import useFetch from "@/hooks/useFetch";

import Header from "./components/Header";

export default function Playbum({ type }) {
  const { id } = useParams();
  const { data, loading } = useFetch(`/${type}/${id}`);

  if(loading) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <RotatingLines strokeColor="#00d0ea" width="30"/>
      </div>
    );
  } else {
    return (
      <div className="min-h-full w-full">
        <Header data={data} />
      </div>
    );
  }
}