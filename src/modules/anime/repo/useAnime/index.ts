import { DEFAULT_LIMIT, DEFAULT_PAGE, URL } from "@/models/constants";
import api from "@/services/api";
import { uniqueById } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { DEFAULT_RESPONSE, USE_ANIME_QUERY_KEY } from "./models/constants";
import { AnimeFetchConfig, AnimeParameters, ResponseAnime } from "./models/types";

export default function useAnime(params: AnimeParameters, config?: AnimeFetchConfig) {
  const { limit = DEFAULT_LIMIT, page = DEFAULT_PAGE } = params;

  const { data: response, ...rest } = useQuery({
    queryKey: [USE_ANIME_QUERY_KEY, params],
    queryFn: ({ signal }) => api.get<ResponseAnime>(URL.ANIME, { signal, params: { ...params, limit, page } }),
    select: (response) => ({
      data: {
        data: uniqueById(response.data.data, "mal_id"),
        pagination: response.data.pagination,
      },
    }),
    ...config,
  });

  return {
    response: response?.data || DEFAULT_RESPONSE,
    ...rest,
  };
}
