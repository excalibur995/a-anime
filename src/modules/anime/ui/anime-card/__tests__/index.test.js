import { render, screen } from "@testing-library/react";
import AnimeCard from "..";

const mockAnime = {
  title: "Naruto",
  score: 8.2,
  status: "Finished Airing",
  genres: [
    { mal_id: 1, name: "Action" },
    { mal_id: 2, name: "Adventure" },
  ],
  images: {
    webp: {
      image_url: "https://example.com/naruto.webp",
    },
  },
};

describe("AnimeCard Component", () => {
  test("renders correctly with given props", () => {
    render(<AnimeCard {...mockAnime} />);

    expect(screen.getByText(mockAnime.title)).toBeInTheDocument();

    expect(screen.getByText(mockAnime.score.toString())).toBeInTheDocument();

    expect(screen.getByText(mockAnime.status)).toBeInTheDocument();

    mockAnime.genres.forEach((genre) => {
      expect(screen.getByText(genre.name)).toBeInTheDocument();
    });
  });

  test("renders detail button", () => {
    render(<AnimeCard {...mockAnime} />);

    const detailButton = screen.getByRole("button", { name: /detail/i });
    expect(detailButton).toBeInTheDocument();
  });
});
