import { URL } from "@/models/constants";
import api from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import { USE_ANIME_DETAIL_QUERY_KEY } from "./models/constants";
import { ResponseAnimeDetail } from "./models/types";

export default function useAnimeDetail(id?: string) {
  const { data, ...rest } = useQuery({
    queryKey: [USE_ANIME_DETAIL_QUERY_KEY, id],
    queryFn: ({ signal }) => api.get<ResponseAnimeDetail>(URL.ANIME + `/${id}`, { signal }),
    enabled: typeof id !== "undefined" || id !== null,
  });
  return {
    response: data?.data.data,
    ...rest,
  };
}
