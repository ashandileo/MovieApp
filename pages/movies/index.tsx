import React, { useEffect } from "react";
import { useGetTopRatedMovies } from "../../hooks/movies";
import { IMovie } from "../../types/MovieTypes";
import CardMovie from "../../components/CardMovie";

import { useIntersectionObserver } from "react-intersection-observer-hook";

const Movies = () => {
  const [ref, { entry }] = useIntersectionObserver();
  const isVisible = entry && entry.isIntersecting;

  const { data, hasNextPage, fetchNextPage } = useGetTopRatedMovies();

  const movies = data?.pages?.flatMap((page) => page?.data?.results) || [];

  useEffect(() => {
    if (isVisible && hasNextPage) {
      fetchNextPage();
    }
  }, [isVisible]);

  return (
    <div className="container pt-[100px] text-white">
      <h1 className="text-[32px] font-medium">Explore</h1>
      <p className="text-[20px] font-thin text-[#868686]">
        Find the best movies collections all in one place
      </p>

      <div className="w-full mt-[16px] flex items-center grid grid-cols-6 gap-[12px]">
        {movies?.map((movie: IMovie) => (
          <CardMovie key={movie?.id} movie={movie} />
        ))}
        {movies?.length > 0 && <div ref={ref} />}
      </div>
    </div>
  );
};

export default Movies;
