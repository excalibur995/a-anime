"uae client";

import { ErrorResponse } from "@/models/types";
import { useRouter } from "next/navigation";
import AnimeDetailCard from "./ui/AnimeDetailCard";
import AnimeDetailError from "./ui/AnimeDetailError";
import AnimeDetailSkeleton from "./ui/AnimeDetailSkeleton";
import useAnimeDetailState from "./usecases/useAnimeDetailState";

function AnimeDetail() {
  const { response, isLoading, isError, data } = useAnimeDetailState();
  const { back } = useRouter();
  if (isLoading) return <AnimeDetailSkeleton />;
  if (!isLoading && (isError || !response || data?.status === 500))
    return (
      <AnimeDetailError
        message={(data?.data as unknown as ErrorResponse)?.message || "Error Occured"}
        onHandleBack={back}
      />
    );
  return <AnimeDetailCard {...response!} />;
}

export default AnimeDetail;
