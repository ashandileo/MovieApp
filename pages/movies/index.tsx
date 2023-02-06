import React, { useState } from "react";
import Head from "next/head";
import { useDebounce } from "use-debounce";
import Header from "../../components/Movies/Header";
import ListMovies from "../../components/Movies/ListMovies";

const Movies = () => {
  const [search, setSearch] = useState("");
  const [searchDebounce] = useDebounce(search, 250);

  return (
    <>
      <Head>
        <title>Go Movies | Explore Movies</title>
      </Head>
      <div className="container pt-[100px] text-white">
        <Header />
        <ListMovies searchDebounce={searchDebounce} />
      </div>
    </>
  );
};

export default Movies;
