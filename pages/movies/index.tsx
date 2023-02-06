import React, { useEffect, useState } from "react";
import Head from "next/head";
import isEmpty from "lodash/isEmpty";
import { useDebounce } from "use-debounce";
import { useGetSearchMovies, useGetTopRatedMovies } from "../../hooks/movies";
import { IMovie } from "../../types/MovieTypes";
import CardMovie from "../../components/CardMovie";
import Link from "next/link";

import { useIntersectionObserver } from "react-intersection-observer-hook";

const Movies = () => {
  const [ref, { entry }] = useIntersectionObserver();
  const isVisible = entry && entry.isIntersecting;

  const [search, setSearch] = useState("");
  const [searchDebounce] = useDebounce(search, 250);

  const {
    data: topRatedMovies,
    hasNextPage: topRatedHasNextPage,
    fetchNextPage: topRatedFetchNextPage,
  } = useGetTopRatedMovies();

  const searchParams = {
    query: searchDebounce,
  };

  const {
    data: searchMovies,
    hasNextPage: searchMoviesHasNextPage,
    fetchNextPage: searchMoviesFetchNextPage,
  } = useGetSearchMovies(searchParams, {
    enabled: !isEmpty(searchDebounce),
  });

  const data = isEmpty(searchDebounce) ? topRatedMovies : searchMovies;

  const hasNextPage = isEmpty(searchDebounce)
    ? topRatedHasNextPage
    : searchMoviesHasNextPage;

  const fetchNextPage = isEmpty(searchDebounce)
    ? topRatedFetchNextPage
    : searchMoviesFetchNextPage;

  const movies = data?.pages?.flatMap((page) => page?.data?.results) || [];

  useEffect(() => {
    if (isVisible && hasNextPage) {
      fetchNextPage();
    }
  }, [isVisible]);

  return (
    <>
      <Head>
        <title>Go Movies | Explore Movies</title>
      </Head>
      <div className="container pt-[100px] text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[32px] font-medium">Explore</h1>
            <p className="text-[20px] font-thin text-[#868686]">
              Find the best movies collections all in one place
            </p>
          </div>
          <label
            htmlFor="search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative w-[300px]">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="w-full mt-[16px] flex items-center grid gap-[12px] grid-template-columns">
          {movies?.map((movie: IMovie) => (
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
          {movies?.length > 0 && <div ref={ref} />}
        </div>
      </div>
    </>
  );
};

export default Movies;
