import AdvanceSearch from "@/modules/anime/components/advance-search-anime";
import AnimeList from "@/modules/anime/components/anime-list";
import { AnimeProvider } from "@/modules/anime/contexts/FilterContexts";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="relative flex flex-col gap-4 container mx-auto p-4">
      <Suspense>
        <AnimeProvider>
          <AdvanceSearch />
          <AnimeList />
        </AnimeProvider>
      </Suspense>
    </main>
  );
}
