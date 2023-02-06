import Head from "next/head";
import { useGetMovieDetail } from "../hooks/api/movies";
import { useMemo } from "react";
import { dummyMovieIds } from "../consts/moviesConsts";
import MovieHeroWrapper from "../components/Home/MovieHeroWrapper";
import MovieHeroOverview from "../components/Home/MovieHeroOverview";
import Top5PopularMovies from "../components/Home/Top5PopularMovies";
import AnimatePage from "../components/AnimatePage";

const randomInteger = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default function Home() {
  const randomMovieIndex = useMemo(() => randomInteger(0, 100), []);
  const randomMovieId = dummyMovieIds[randomMovieIndex];

  useGetMovieDetail(randomMovieId);

  return (
    <AnimatePage>
      <Head>
        <title>Go Movies | Home</title>
      </Head>
      <MovieHeroWrapper movieId={randomMovieId}>
        <div className="container pt-[140px] relative z-[2]">
          <MovieHeroOverview movieId={randomMovieId} />
          <Top5PopularMovies />
        </div>
      </MovieHeroWrapper>
    </AnimatePage>
  );
}
