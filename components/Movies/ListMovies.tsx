import React, { useEffect } from "react";
import Link from "next/link";
import isEmpty from "lodash/isEmpty";
import { IMovie } from "../../types/MovieTypes";
import CardMovie from "../CardMovie";
import { useIntersectionObserver } from "react-intersection-observer-hook";
import { useGetSearchMovies, useGetTopRatedMovies } from "../../hooks/movies";
import useSearch from "../../hooks/useSearch";

const ListMovies = () => {
  const [ref, { entry }] = useIntersectionObserver();
  const isVisible = entry && entry.isIntersecting;

  const searchDebounce = useSearch((state) => state.searchDebounce);

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
    <div className="w-full mt-[16px] flex items-center grid gap-[12px] grid-template-columns">
      {movies?.map((movie: IMovie, index: number) => {
        const isLastMovie = movies?.length - 1 === index;

        return (
          <Link
            href={`/movies/${movie?.id}`}
            as={`/movies/${movie?.id}`}
            key={movie?.id}
          >
            <div ref={isLastMovie ? ref : null}>
              <CardMovie
                title={movie?.title}
                image={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
                releaseDate={movie?.release_date}
                voteAverage={movie?.vote_average}
                description={movie?.overview}
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ListMovies;
