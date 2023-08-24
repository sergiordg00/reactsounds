import { useParams } from "react-router-dom";

import useFetch from "@/hooks/useFetch";
import DetailsPage from "@/shared-components/ui/DetailsPage";

export default function Artist() {
  const { id } = useParams();
  const { data, loading } = useFetch(`/artist/${id}`);
  const { data: tracks, loading: tracksLoading } = useFetch(`/artist/${id}/top?limit=50`);

  console.log(data, tracks);

  return (
    <DetailsPage
      data={data}
      loading={loading || tracksLoading}
      tracks={tracks}
    />
  );
}