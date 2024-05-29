"use client";

import { PropsWithChildren, useReducer } from "react";
import { AnimeContext, AnimeDispatch } from "./hooks";
import { INITIAL_STATE } from "./models/constants";
import { reducer } from "./usecases/reducer";

export const AnimeProvider = ({ children }: PropsWithChildren) => {
  const [value, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <AnimeDispatch.Provider value={dispatch}>
      <AnimeContext.Provider value={value}>{children}</AnimeContext.Provider>
    </AnimeDispatch.Provider>
  );
};
