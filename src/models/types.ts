export interface Response<T = any> {
  data: T;
  pagination: Pagination;
}

export interface PageSlugParams<T = string> {
  params: { slug: T };
}

export interface Pagination {
  current_page: number;
  last_visible_page: number;
  has_next_page: boolean;
  items: PaginationItems;
}

export interface PaginationItems {
  count: number;
  total: number;
  per_page: number;
}

export interface Genre {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface ExplicitGenre {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export type Type = "tv" | "movie" | "ova" | "special" | "ona" | "music" | "cm" | "pv" | "tv_special";
export type Rating = "g" | "pg" | "pg13" | "r17" | "r" | "rx";
export type Status = "airing" | "complete" | "upcoming";

export type OrderBy =
  | "mal_id"
  | "title"
  | "start_date"
  | "end_date"
  | "episodes"
  | "score"
  | "scored_by"
  | "rank"
  | "popularity"
  | "members"
  | "favorites";

export type SortBy = "desc" | "asc";
