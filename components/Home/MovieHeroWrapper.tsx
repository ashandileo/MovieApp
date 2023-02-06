import React from "react";
import { useQueryClient } from "react-query";
import { IMovieDetailData } from "../../types/MovieTypes";

interface IMovieHeroWrapper {
  children: React.ReactNode;
  movieId: number;
}

const MovieHeroWrapper = ({ children, movieId }: IMovieHeroWrapper) => {
  const queryClient = useQueryClient();

  const movieDetail = queryClient.getQueryData([
    "movies",
    movieId,
  ]) as IMovieDetailData;

  return (
    <div
      className="background-image overflow-hidden"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movieDetail?.data?.backdrop_path})`,
      }}
    >
      {children}
    </div>
  );
};

export default MovieHeroWrapper;
