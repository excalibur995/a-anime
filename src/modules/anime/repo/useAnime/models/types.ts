import { Response } from "@/models/types";
import { Anime, AnimeParams } from "@/modules/anime/models/types";
import { DefinedInitialDataOptions } from "@tanstack/react-query";

export type AnimeParameters = Partial<AnimeParams>;
export type AnimeFetchConfig = Pick<DefinedInitialDataOptions, "enabled">;

export type ResponseAnime = Response<Anime[]>;
