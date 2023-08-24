import { useParams } from "react-router-dom";

import useFetch from "@/hooks/useFetch";
import DetailsPage from "@/shared-components/ui/DetailsPage";

export default function Playbum({ type }) {
  const { id } = useParams();
  const { data, loading } = useFetch(`/${type}/${id}`);

  return (
    <DetailsPage
      data={data}
      loading={loading}
      tracks={data?.tracks}
    />
  );
}