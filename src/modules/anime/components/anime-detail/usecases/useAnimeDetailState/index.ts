import useAnimeDetail from "@/modules/anime/repo/useAnimeDetail";
import { useParams } from "next/navigation";

export default function useAnimeDetailState() {
  const { slug } = useParams();
  const { response, isLoading, isError, ...rest } = useAnimeDetail(slug as string);
  return {
    response,
    isLoading,
    isError,
    ...rest,
  };
}
