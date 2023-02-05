import { useInfiniteQuery, useQuery } from "react-query";
import { getPopularMovies, getTopRatedMovies } from "../client/moviesClient";

export const useGetPopularMovies = () => {
  return useQuery(["popular-movies"], getPopularMovies);
};

export const useGetTopRatedMovies = () => {
  const fetchTopRatedMovies = (pageParam = 1) => {
    const params = {
      page: pageParam,
    };

    return getTopRatedMovies(params);
  };

  return useInfiniteQuery(
    ["top-rated-movies"],
    ({ pageParam = 1 }) => fetchTopRatedMovies(pageParam),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage?.data?.page < lastPage?.data?.total_pages) {
          return lastPage?.data?.page + 1;
        }
      },
    }
  );
};
