import client from "./fetchClient";

export const getPopularMovies = () => {
  return client.get("/movie/popular");
};

export const getTopRatedMovies = (params: Record<string, unknown>) => {
  return client.get("/movie/top_rated", { params });
};

export const getMovieDetail = (id: number) => {
  return client.get(`/movie/${id}`);
};
