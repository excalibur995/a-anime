import { DEFAULT_LIMIT, DEFAULT_PAGE } from "@/models/constants";
import { FilterState } from "./types";

export const INITIAL_STATE: FilterState = {
  limit: DEFAULT_LIMIT,
  page: DEFAULT_PAGE,
  end_date: "",
  genres: "",
  genres_exclude: "",
  letter: "",
  q: "",
  start_date: "",
  producers: "",
};
