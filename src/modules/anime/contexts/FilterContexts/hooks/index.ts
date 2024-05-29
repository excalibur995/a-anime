import { createContext, useContext } from "react";
import { DispatchAction, FilterState } from "../models/types";

export const AnimeContext = createContext<FilterState | undefined>(undefined);
export const AnimeDispatch = createContext<DispatchAction | undefined>(undefined);

export const useAnimeValue = () => {
  const context = useContext(AnimeContext);
  if (!context) throw new Error("useAnime must be used within an AnimeProvider");
  return context;
};

export const useAnimeDispatch = () => {
  const dispatch = useContext(AnimeDispatch);
  if (!dispatch) throw new Error("useAnime must be used within an AnimeProvider");

  return dispatch;
};
