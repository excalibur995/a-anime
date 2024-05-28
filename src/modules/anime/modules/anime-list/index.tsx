"use client";

import { Pagination } from "@nextui-org/react";
import useAnimeState from "../../usecases/useAnimeState";
import AnimeListSkeleton from "./presentations/anime-list-ui";

export default function AnimeList() {
  const {
    repo: { isError, isLoading, response },
    pagination: { page, changePage, total, limit },
  } = useAnimeState({});

  if (!isLoading && isError) return <div>Error loading anime</div>;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-1 flex-wrap gap-2 justify-center">
        <AnimeListSkeleton limit={limit} isError={isError} isLoading={isLoading} anime={response.data} />
      </div>
      <Pagination
        key={total}
        className="w-full justify-center flex"
        classNames={{ item: "w-auto px-2" }}
        onChange={changePage}
        showControls
        page={page}
        total={total}
      />
    </div>
  );
}
