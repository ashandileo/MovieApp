import React from "react";
import Head from "next/head";
import { useGetMovieDetail } from "../../../hooks/api/movies";
import Backdrop from "../../../components/MoviesDetail/Backdrop";
import MovieInformation from "../../../components/MoviesDetail/MovieInformation";
import Poster from "../../../components/MoviesDetail/Poster";
import Overview from "../../../components/MoviesDetail/Overview";
import ProductionCompanies from "../../../components/MoviesDetail/ProductionCompanies";
import AnimatePage from "../../../components/AnimatePage";

interface IMovieDetail {
  movieId: number;
}

const MovieDetail = ({ movieId }: IMovieDetail) => {
  const { data } = useGetMovieDetail(movieId);

  const movieDetail = data?.data;

  return (
    <AnimatePage>
      <Head>
        <title>Go Movies | {movieDetail?.title}</title>
      </Head>
      <div className="container pt-[100px] text-white pb-[40px]">
        <div className="relative">
          <div className="w-full h-[500px] rounded-[12px] overflow-hidden relative">
            <Backdrop />
            <MovieInformation />
          </div>
          <Poster />
          <Overview />
        </div>

        <ProductionCompanies />
      </div>
    </AnimatePage>
  );
};

export async function getServerSideProps(context: any) {
  return {
    props: {
      movieId: context.query.id,
    },
  };
}

export default MovieDetail;
