import { Pagination } from "./types";

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
