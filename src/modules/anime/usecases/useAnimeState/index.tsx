"use client";

import { DEFAULT_LIMIT, DEFAULT_PAGE } from "@/models/constants";
import useParameters from "@/usecases/useParameters";
import { useEffect, useState } from "react";
import useAnime from "../../repo/useAnime";
import { UseAnimeStateProps } from "./models/types";

export default function useAnimeState({ params }: UseAnimeStateProps) {
  const [page, setPage] = useState(DEFAULT_PAGE);
  const [limit, setLimit] = useState(DEFAULT_LIMIT);
  const [total, setTotal] = useState(0);
  const { search_params, onChangeParams } = useParameters();

  const { response, ...repo } = useAnime({ page, limit, ...params } || {});
  const { pagination } = response;

  const changePage = (newPage: number) => {
    onChangeParams({ page: newPage.toString() });
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const newPage = parseInt(search_params.get("page") || "1", 10);

    if (newPage !== page) {
      setPage(newPage);
    }
  }, [page, search_params, total]);

  useEffect(() => {
    if (total < 1 && total !== pagination.last_visible_page) {
      setTotal(pagination.last_visible_page);
    }
  }, [pagination.last_visible_page, total]);

  return {
    repo: { ...repo, response },
    pagination: {
      ...pagination,
      page,
      setPage,
      limit,
      setLimit,
      changePage,
      total,
    },
  };
}
