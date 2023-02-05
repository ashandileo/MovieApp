import { useQuery } from "react-query";
import { getPopularMovies } from "./../client/moviesClient";

export const useGetPopularMovies = () => {
  return useQuery(["popular-movies"], getPopularMovies);
};
