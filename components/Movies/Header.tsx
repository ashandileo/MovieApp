import React, { useEffect } from "react";
import useSearch from "../../hooks/useSearch";
import { useDebounce } from "use-debounce";

import { shallow } from "zustand/shallow";
import Button from "../Button";
import useMovies from "../../hooks/useMovies";
import PDFReport from "../PDFReport";
import { pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";

const Header = () => {
  // Consume search hooks
  const { search, setSearch, setDebounceSearch } = useSearch(
    (state) => ({
      search: state.search,
      setSearch: state.setSearch,
      setDebounceSearch: state.setDebounceSearch,
    }),
    shallow
  );

  // Consume movies hooks state
  const movies = useMovies((state) => state.movies);

  // Seach debounce
  const [searchDebounce] = useDebounce(search, 250);

  // Function to print rendered lists movies
  const printLists = async () => {
    const doc = <PDFReport movies={movies} />;
    const asPdf = pdf();
    asPdf.updateContainer(doc);
    const blob = await asPdf.toBlob();
    saveAs(blob, `List Movies.pdf`);
  };

  useEffect(() => {
    setDebounceSearch(searchDebounce);
  }, [searchDebounce]);

  return (
    <div>
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
              className="w-5 h-5 text-white-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
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

      <Button customClass="mt-[20px]" onClick={printLists}>
        Print Lists
      </Button>
    </div>
  );
};

export default Header;
