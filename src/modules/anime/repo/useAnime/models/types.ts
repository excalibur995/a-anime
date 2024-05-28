import { OrderBy, Rating, Response, SortBy, Status, Type } from "@/models/types";
import { Anime } from "@/modules/anime/models/types";

export interface AnimeParams {
  page: number;
  limit: number;
  q: string;
  type: Type;
  score: number;
  min_score: number;
  max_score: number;
  status: Status;
  rating: Rating;
  sfw: boolean;
  genres: string | string[];
  genres_exclude: string | string[];
  order_by: OrderBy;
  sort: SortBy;
  letter: string;
  producers: string;
  start_date: string;
  end_date: string;
}

export type UseAnimeParams = Partial<AnimeParams>;
export type ResponseAnime = Response<Anime[]>;
