import { LabelValue, OrderBy, Pagination, Rating, SortBy, Status, Type } from "./types";

export const URL = {
  BASE_URL: "https://api.jikan.moe/v4",
  ANIME: "/anime",
  GENRES: "/genres/anime",
};

export const DATE_FORMAT = "YYYY-MM-DD";
export const DEFAULT_PAGE = 1;
export const DEFAULT_LIMIT = 12;
export const PAGINATION_DEFAULT: Pagination = {
  has_next_page: false,
  items: { count: 0, per_page: 0, total: 0 },
  last_visible_page: 0,
  current_page: 1,
};

export const ANIME_STATUS: LabelValue<Status>[] = [
  { label: "Airing", value: "airing" },
  { label: "Complete", value: "complete" },
  { label: "Upcoming", value: "upcoming" },
];

export const ANIME_TYPE: LabelValue<Type>[] = [
  { value: "tv", label: "TV" },
  { value: "movie", label: "Movie" },
  { value: "ova", label: "OVA" },
  { value: "special", label: "Special" },
  { value: "ona", label: "ONA" },
  { value: "music", label: "Music" },
  { value: "cm", label: "CM" },
  { value: "pv", label: "PV" },
  { value: "tv_special", label: "TV Special" },
];

export const ANIME_RATINGS: LabelValue<Rating>[] = [
  { value: "g", label: "G - All Ages" },
  { value: "pg", label: "PG - Children" },
  { value: "pg13", label: "PG-13 - Teens 13 or older" },
  { value: "r17", label: "R - 17+ (violence & profanity)" },
  { value: "r", label: "R+ - Mild Nudity" },
  { value: "rx", label: "Rx - Hentai" },
];

export const ORDER_BY_OPTION: LabelValue<OrderBy>[] = [
  { value: "mal_id", label: "MAL ID" },
  { value: "title", label: "Title" },
  { value: "start_date", label: "Start Date" },
  { value: "end_date", label: "End Date" },
  { value: "episodes", label: "Episodes" },
  { value: "score", label: "Score" },
  { value: "scored_by", label: "Scored By" },
  { value: "rank", label: "Rank" },
  { value: "popularity", label: "Popularity" },
  { value: "members", label: "Members" },
  { value: "favorites", label: "Favorites" },
];

export const SORT_BY_OPTION: LabelValue<SortBy>[] = [
  { value: "desc", label: "Descending" },
  { value: "asc", label: "Ascending" },
];

export const ADVANCE_SELECT_DATA = [
  { placeholder: "Select Status", data: ANIME_STATUS, name: "status" },
  { placeholder: "Select Type", data: ANIME_TYPE, name: "type" },
  { placeholder: "Select Ratings", data: ANIME_RATINGS, name: "rating" },
  { placeholder: "Order by", data: ORDER_BY_OPTION, name: "order_by" },
  { placeholder: "Sort by", data: SORT_BY_OPTION, name: "sort" },
] as const;
