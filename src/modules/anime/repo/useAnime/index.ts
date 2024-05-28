import { URL } from "@/models/constants";
import api from "@/services/api";
import { uniqueById } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { DEFAULT_RESPONSE, USE_ANIME_QUERY_KEY } from "./models/constants";
import { ResponseAnime, UseAnimeParams } from "./models/types";

export default function useAnime({ limit = 10, page = 1, ...params }: UseAnimeParams) {
  const { data: response, ...rest } = useQuery({
    queryKey: [USE_ANIME_QUERY_KEY, limit, page, params],
    queryFn: ({ signal }) => api.get<ResponseAnime>(URL.ANIME, { signal, params: { ...params, limit, page } }),
    select: (response) => ({
      data: {
        data: uniqueById(response.data.data, "mal_id"),
        pagination: response.data.pagination,
      },
    }),
  });

  return {
    response: response?.data || DEFAULT_RESPONSE,
    ...rest,
  };
}
