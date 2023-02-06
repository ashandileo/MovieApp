import React from "react";
import Button from "../Button";
import { useRouter } from "next/router";
import { useQueryClient } from "react-query";
import { IMovieDetailData } from "../../types/MovieTypes";

interface IMovieHeroOverview {
  movieId: number;
}

const MovieHeroOverview = ({ movieId }: IMovieHeroOverview) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const movieDetail = queryClient.getQueryData([
    "movies",
    movieId,
  ]) as IMovieDetailData;

  return (
    <div className="text-white">
      <div className="leading-[70px]">
        <h1 data-cy="movie-hero-title" className="text-[90px] font-bold">
          {movieDetail?.data?.title}
        </h1>
        <h1 data-cy="movie-hero-tagline" className="text-[40px] font-bold">
          {movieDetail?.data?.tagline}
        </h1>
      </div>
      <div className="line-clamp-2">
        <p
          className="mt-[12px] text-[18px] w-[55%]"
          data-cy="movie-hero-overview"
        >
          {movieDetail?.data?.overview}
        </p>
      </div>
      <div className="flex items-center gap-[6px] mt-[24px]">
        <img src="/img/filled-star.png" />
        <img src="/img/filled-star.png" />
        <img src="/img/filled-star.png" />
        <img src="/img/filled-star.png" />
        <img src="/img/outlined-star.png" />
      </div>
      <div className="flex items-center mt-[24px]">
        <Button
          onClick={() => router.push(`/movies/${movieDetail?.data?.id}`)}
          dataCy="movie-hero-see-detail"
        >
          See Detail
        </Button>
      </div>
    </div>
  );
};

export default MovieHeroOverview;
