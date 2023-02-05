import client from "./fetchClient";

export const getPopularMovies = () => {
  return client.get("/movie/popular");
};
