import AdvanceSearch from "@/modules/anime/components/advance-search-anime";
import AnimeList from "@/modules/anime/components/anime-list";
import { AnimeProvider } from "@/modules/anime/contexts/FilterContexts";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 container mx-auto p-4">
      <AnimeProvider>
        <AdvanceSearch />
        <AnimeList />
      </AnimeProvider>
    </main>
  );
}
