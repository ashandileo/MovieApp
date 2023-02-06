import Head from "next/head";
import { useGetMovieDetail } from "./../hooks/movies";
import { useMemo } from "react";
import { dummyMovieIds } from "../consts/moviesConsts";
import MovieHeroWrapper from "../components/Movies/MovieHeroWrapper";
import MovieHeroOverview from "../components/Movies/MovieHeroOverview";
import Top5PopularMovies from "../components/Movies/Top5PopularMovies";

const randomInteger = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default function Home() {
  const randomMovieIndex = useMemo(() => randomInteger(0, 100), []);
  const randomMovieId = dummyMovieIds[randomMovieIndex];

  useGetMovieDetail(randomMovieId);

  return (
    <>
      <Head>
        <title>Go Movies | Home</title>
      </Head>
      <MovieHeroWrapper movieId={randomMovieId}>
        <div className="container pt-[140px] relative z-[2]">
          <MovieHeroOverview movieId={randomMovieId} />
          <Top5PopularMovies />
        </div>
      </MovieHeroWrapper>
    </>
  );
}
