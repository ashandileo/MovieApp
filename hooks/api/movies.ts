import {
  useInfiniteQuery,
  useQuery,
  UseInfiniteQueryOptions,
} from "react-query";
import {
  getMovieDetail,
  getPopularMovies,
  getSearchMovies,
  getTopRatedMovies,
} from "../../client/moviesClient";

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

  return useInfiniteQuery<any>(
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

export const useGetMovieDetail = (id: number) => {
  return useQuery(["movies", id], () => getMovieDetail(id));
};

export const useGetSearchMovies = (
  queryParams: Record<string, unknown>,
  options: UseInfiniteQueryOptions
) => {
  const fetchSearchMovies = (pageParam = 1) => {
    const params = {
      page: pageParam,
      ...queryParams,
    };

    return getSearchMovies(params);
  };

  return useInfiniteQuery<any>(
    ["search-movies", queryParams],
    ({ pageParam = 1 }) => fetchSearchMovies(pageParam),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage?.data?.page < lastPage?.data?.total_pages) {
          return lastPage?.data?.page + 1;
        }
      },
      ...options,
    }
  );
};
