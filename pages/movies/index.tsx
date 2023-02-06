import React from "react";
import Head from "next/head";

import Header from "../../components/Movies/Header";
import ListMovies from "../../components/Movies/ListMovies";

const Movies = () => {
  return (
    <>
      <Head>
        <title>Go Movies | Explore Movies</title>
      </Head>
      <div className="container pt-[100px] text-white">
        <Header />
        <ListMovies />
      </div>
    </>
  );
};

export default Movies;
