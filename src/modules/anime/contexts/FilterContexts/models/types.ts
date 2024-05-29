import { AnimeParams } from "@/modules/anime/models/types";
import { Dispatch } from "react";

export type FilterState = Partial<AnimeParams>;
export type FilterStateAction = Partial<FilterState>;
export type DispatchAction = Dispatch<FilterStateAction>;
