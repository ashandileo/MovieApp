import CardMovie from "../components/CardMovie";
import Link from "next/link";
import { IMovie } from "../types/MovieTypes";
import { useGetMovieDetail, useGetPopularMovies } from "./../hooks/movies";
import { useMemo } from "react";
import { dummyMovieIds } from "../consts/moviesConsts";

const randomInteger = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default function Home() {
  const { data } = useGetPopularMovies();

  const movies = data?.data?.results || [];

  const randomMovieIndex = useMemo(() => randomInteger(0, 100), []);
  const randomMovieId = dummyMovieIds[randomMovieIndex];

  const { data: movieHero } = useGetMovieDetail(randomMovieId);

  return (
    <div
      className="background-image overflow-hidden"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movieHero?.data?.backdrop_path})`,
      }}
    >
      <div className="container pt-[140px] relative z-[2]">
        <div className="text-white">
          <div className="leading-[70px]">
            <h1 className="text-[90px] font-bold">{movieHero?.data?.title}</h1>
            <h1 className="text-[40px] font-bold">
              {movieHero?.data?.tagline}
            </h1>
          </div>
          <div className="line-clamp-2">
            <p className="mt-[12px] text-[18px] w-[55%]">
              {movieHero?.data?.overview}
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
            <button className="rounded-full bg-[#64B6D0] hover:bg-[#0da0cf] duration-150 py-[8px] px-[16px] font-bold">
              See Detail
            </button>
          </div>
        </div>

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
      </div>
    </div>
  );
}
