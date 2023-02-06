import React from "react";
import Link from "next/link";
import CardMovie from "../CardMovie";
import { IMovie } from "../../types/MovieTypes";
import { useGetPopularMovies } from "../../hooks/movies";

const Top5PopularMovies = () => {
  const { data } = useGetPopularMovies();

  const movies = data?.data?.results || [];

  return (
    <div className="mt-[16px] text-white">
      <p className="text-[20px] font-bold">Popular Movies</p>
      <div
        className="w-full mt-[16px] flex items-center grid grid-template-columns gap-4 py-[8px] px-[16px] rounded-[12px]"
        style={{ backgroundColor: "rgba(103, 101, 113, 0.34)" }}
      >
        {movies?.slice(0, 5)?.map((movie: IMovie) => (
          <Link
            href={`/movies/${movie?.id}`}
            as={`/movies/${movie?.id}`}
            key={movie?.id}
          >
            <a>
              <CardMovie
                title={movie?.title}
                image={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
                releaseDate={movie?.release_date}
                voteAverage={movie?.vote_average}
                description={movie?.overview}
              />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Top5PopularMovies;
