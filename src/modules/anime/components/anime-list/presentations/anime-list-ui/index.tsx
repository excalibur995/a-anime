import AnimeCard from "@/modules/anime/ui/anime-card";
import AnimeCardSkeleton from "@/modules/anime/ui/anime-card-skeleton";
import { AnimeSkeletonListProps } from "./models/types";

export default function AnimeListPresentation({ anime, limit = 1, isError, isLoading }: AnimeSkeletonListProps) {
  if (isError) return <div>Error loading anime</div>;
  if (isLoading) {
    return Array(limit)
      .fill(limit)
      .map((_, load) => <AnimeCardSkeleton key={load} />);
  }
  return (anime || {}).map((anime) => <AnimeCard key={anime.mal_id} {...anime} />);
}
