import AnimeList from "@/modules/anime/modules/anime-list/lazy";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 container mx-auto p-4">
      <AnimeList />
    </main>
  );
}
