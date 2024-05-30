import { Anime } from "@/modules/anime/models/types";
import { Card, Chip } from "@nextui-org/react";
import { Star } from "lucide-react";
import Image from "next/image";

export default function AnimeDetailCard(response?: Anime) {
  return (
    <>
      <Card className="p-4 lg:p-8">
        <section className="flex flex-col lg:flex-row gap-4">
          <figure className="relative h-[40vh] w-full lg:max-w-xs">
            <Image
              fill
              className="object-cover object-center rounded-xl"
              alt=""
              src={response?.images.webp.large_image_url || ""}
            />
          </figure>
          <section className="relative w-full space-y-5">
            <h1 className="font-bold text-4xl max-w-lg">{response?.title}</h1>
            <Chip color="primary" size="lg" className="lg:absolute top-1 right-0 lg:!m-0">
              <span className="inline-flex items-center gap-2">
                <Star color="yellow" fill="yellow" size={14} />
                {response?.score}
              </span>
            </Chip>
            <section className="space-x-4">
              {response?.year && <Chip color="primary">{response.year}</Chip>}
              <span className="space-x-2 space-y-2">
                {(response?.genres || []).map((genre) => (
                  <Chip color="primary" key={genre.mal_id}>
                    {genre.name}
                  </Chip>
                ))}
              </span>
            </section>
            <p className="text-base text-justify leading-loose font-normal">{response?.synopsis}</p>
          </section>
        </section>
      </Card>
      {response?.trailer?.url && (
        <div className="space-y-4">
          <h2 className="font-bold text-3xl">Trailer</h2>
          <Card className="max-w-sm h-60">
            <iframe className="w-full h-full" src={response.trailer.embed_url} />
          </Card>
        </div>
      )}
    </>
  );
}
