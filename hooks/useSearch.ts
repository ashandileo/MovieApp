import { create } from "zustand";

interface IState {
  search: string;
  searchDebounce: string;
  setSearch: (value: string) => void;
  setDebounceSearch: (value: string) => void;
}

const useSearch = create<IState>((set) => ({
  search: "",
  searchDebounce: "",
  setSearch: (value) => set({ search: value }),
  setDebounceSearch: (value: string) => set({ searchDebounce: value }),
}));

export default useSearch;
