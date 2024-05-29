"use client";

import useParameters from "@/usecases/useParameters";
import { useEffect, useState } from "react";

import { useAnimeDispatch, useAnimeValue } from "../../contexts/FilterContexts/hooks";
import useAnime from "../../repo/useAnime";

export default function useAnimeState() {
  const params = useAnimeValue();

  const dispatch = useAnimeDispatch();

  const [total, setTotal] = useState(0);

  const { search_params, onChangeParams } = useParameters();
  const { response, ...repo } = useAnime(params);

  const { pagination } = response;

  const changePage = (newPage: number) => {
    onChangeParams({ page: newPage.toString() });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const newPage = parseInt(search_params.get("page") || "1", 10);
    if (newPage !== params.page) {
      dispatch({ page: newPage });
    }
  }, [dispatch, params.page, search_params, total]);

  useEffect(() => {
    if (total < 1 || total !== (pagination.last_visible_page || total)) {
      setTotal(pagination.last_visible_page);
    }
  }, [pagination.last_visible_page, total]);

  return {
    repo: { ...repo, response },
    pagination: {
      ...pagination,
      page: params.page!,
      limit: params.limit!,
      changePage,
      total,
    },
  };
}
