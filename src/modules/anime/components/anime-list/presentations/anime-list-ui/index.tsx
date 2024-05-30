import { DEFAULT_LIMIT } from "@/models/constants";
import AnimeCard from "@/modules/anime/ui/anime-card";
import AnimeCardSkeleton from "@/modules/anime/ui/anime-card-skeleton";
import Link from "next/link";
import { AnimeSkeletonListProps } from "./models/types";

export default function AnimeListPresentation({ anime, isError, isLoading }: AnimeSkeletonListProps) {
  if (isError) return <div>Error loading anime</div>;
  if (isLoading) {
    return Array(DEFAULT_LIMIT)
      .fill(DEFAULT_LIMIT)
      .map((_, load) => <AnimeCardSkeleton key={load} />);
  }
  return (anime || {}).map((anime) => (
    <Link className="w-full sm:w-[40%] md:w-[30%] xl:w-[20%]" key={anime.mal_id} href={`/${anime.mal_id}`}>
      <AnimeCard {...anime} />
    </Link>
  ));
}
