import { create } from "zustand";
import { IMovie } from "../types/MovieTypes";

interface IState {
  movies: IMovie[];
  setMovies: (data: IMovie[]) => void;
}

const useMovies = create<IState>((set) => ({
  movies: [],
  setMovies: (data) => set({ movies: data }),
}));

export default useMovies;
