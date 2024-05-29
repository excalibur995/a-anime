import { useAnimeDispatch, useAnimeValue } from "@/modules/anime/contexts/FilterContexts/hooks";
import { AnimeParams } from "@/modules/anime/models/types";
import useParameters from "@/usecases/useParameters";
import { KeyboardEvent, useEffect, useRef } from "react";

export default function useAdvanceSearch() {
  const inputRef = useRef<HTMLInputElement>(null);
  const params = useAnimeValue();
  const dispatch = useAnimeDispatch();
  const { search_params, onChangeParams } = useParameters();

  const onResetPage = () => {
    dispatch({ page: 1 });
    onChangeParams({ page: "1" });
  };

  const onHandleChanges = (name: keyof AnimeParams, e: string) => {
    dispatch({ [name]: e });
    onChangeParams({ [name]: e });
    onResetPage();
  };

  const onHandleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onHandleSearch();
    }
  };

  const onHandleSearch = () => {
    onHandleChanges("q", inputRef.current?.value || "");
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
    inputRef,
    onHandleChanges,
    onHandleKeyPress,
    onHandleSearch,
  };
}
