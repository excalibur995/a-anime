import { useAnimeDispatch, useAnimeValue } from "@/modules/anime/contexts/FilterContexts/hooks";
import { reducer } from "@/modules/anime/contexts/FilterContexts/usecases/reducer";
import { AnimeParams } from "@/modules/anime/models/types";
import useParameters from "@/usecases/useParameters";
import { KeyboardEvent, useEffect, useReducer, useRef } from "react";

export default function useAdvanceSearch() {
  const params = useAnimeValue();
  const dispatch = useAnimeDispatch();

  const [state, setState] = useReducer(reducer, params);
  const inputRef = useRef<HTMLInputElement>(null);

  const { search_params, onChangeParams } = useParameters();

  const onResetPage = () => {
    dispatch({ page: 1 });
    onChangeParams({ page: "1" });
  };

  const onChange = (name: keyof AnimeParams, e: string) => {
    setState({ [name]: e });
  };

  const onHandleChanges = (onHandleCallback?: () => void) => {
    for (const key in state) {
      dispatch({ [key]: state[key as keyof AnimeParams] });
      onChangeParams({ [key]: state[key as keyof AnimeParams] as string });
    }

    onResetPage();
    onHandleCallback?.();
  };

  const onHandleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onHandleSearch();
    }
  };

  const onHandleSearch = () => {
    dispatch({ q: inputRef.current?.value || "" });
    onChangeParams({ q: inputRef.current?.value || "" });
  };

  useEffect(() => {
    const number_key = ["page", "limit"];

    search_params.forEach((value, key) => {
      let key_params = key as keyof AnimeParams;
      let values: string | number = "";

      if (value !== "") {
        values = value;
        if (number_key.includes(key_params)) {
          values = parseInt(value || "1", 10);
        }

        if (values !== params[key_params]) {
          dispatch({ [key]: values });
        }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    params,
    state,
    onChange,
    inputRef,
    onHandleChanges,
    onHandleKeyPress,
    onHandleSearch,
  };
}
