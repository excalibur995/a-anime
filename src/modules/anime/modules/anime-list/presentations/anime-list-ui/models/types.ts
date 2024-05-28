import { Anime } from "@/modules/anime/models/types";

export interface AnimeSkeletonListProps {
  limit: number;
  anime: Anime[];
  isError: boolean;
  isLoading: boolean;
}
