import { Anime } from "@/modules/anime/models/types";
import { Button, Card, CardFooter, CardHeader } from "@nextui-org/react";
import { Star } from "lucide-react";
import Image from "next/image";

export default function AnimeCard(props: Anime) {
  return (
    <Card isFooterBlurred className="relative cursor-pointer w-full h-[300px] bg-zinc-600">
      <CardHeader className="absolute z-10 top-1 flex-col items-start ">
        <p className="inline-flex items-center gap-2">
          <Star fill="orange" className="text-yellow-500" size={14} />
          <span className="text-white">{props.score}</span>
        </p>
        <h4 className="text-white font-medium text-2xl">{props.title}</h4>
      </CardHeader>
      <Image
        alt={props.title}
        fill
        className="hover:brightness-75  transition-all z-0 w-full brightness-50 h-full object-cover object-center"
        src={props.images.webp.image_url}
      />
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div className="text-white text-[11px] space-y-1">
          <p>{props.status}</p>
          <span className="inline-flex flex-wrap">
            {props.genres.slice(0, 2).map((genre) => (
              <p className="not-last-after-content" key={genre.mal_id}>
                {genre.name}
              </p>
            ))}
          </span>
        </div>
        <Button className="text-tiny" color="primary" radius="full" size="sm">
          Detail
        </Button>
      </CardFooter>
    </Card>
  );
}
