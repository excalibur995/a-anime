"use client";

import { Pagination } from "@nextui-org/react";
import useAnimeState from "../../usecases/useAnimeState";
import AnimeListPresentation from "./presentations/anime-list-ui";

export default function AnimeList() {
  const {
    repo: { isError, isLoading, response },
    pagination: { page, changePage, total },
  } = useAnimeState();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-1 flex-wrap gap-2 justify-center">
        <AnimeListPresentation isError={isError} isLoading={isLoading} anime={response.data} />
      </div>
      {total > 0 && (
        <Pagination
          key={total}
          className="w-full justify-center flex"
          classNames={{ item: "w-auto px-2" }}
          onChange={changePage}
          showControls
          page={page}
          total={total}
        />
      )}
    </div>
  );
}
