import AnimeDetailCard from "./ui/AnimeDetailCard";
import useAnimeDetailState from "./usecases/useAnimeDetailState";

function AnimeDetail() {
  const { response, isLoading, isError } = useAnimeDetailState();
  if (isLoading) return <div>loading...</div>;
  if (!isLoading && (isError || !response)) return <div>Error</div>;
  return <AnimeDetailCard {...response!} />;
}

export default AnimeDetail;
