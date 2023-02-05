import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useGetMovieDetail } from "../../../hooks/movies";

interface IMovieDetail {
  movieId: number;
}

const MovieDetail = ({ movieId }: IMovieDetail) => {
  const { data } = useGetMovieDetail(movieId);

  const movieDetail = data?.data;

  return (
    <div className="container pt-[100px] text-white">
      <div className="relative">
        <div className="w-full h-[500px] rounded-[12px] overflow-hidden relative">
          <LazyLoadImage
            src={`https://image.tmdb.org/t/p/original${movieDetail?.backdrop_path}`}
            width="100%"
            height="100%"
            alt={movieDetail?.title}
            effect="blur"
          />
          <div
            className="absolute left-[0px] right-[0px] bottom-[0px] h-[65%]"
            style={{
              background:
                "linear-gradient(180deg, rgba(29, 29, 29, 0) 0%, #0F1E29 100%)",
            }}
          />

          <div className="absolute left-[370px] bottom-[70px]">
            <p className="text-[32px] font-semibold">{movieDetail?.title}</p>
            <p>Tagline: {movieDetail?.tagline}</p>
            <p>Language: {movieDetail?.original_language}</p>
            <div className="flex items-center">
              <p>Rating: {movieDetail?.vote_average}</p>
              <img
                src="/img/filled-star.png"
                className="w-[12px] h-[12px] ml-[4px]"
              />
            </div>
            <p>Duration: {movieDetail?.runtime} mins</p>
            <p>Relase Date: {movieDetail?.release_date}</p>
          </div>
        </div>

        <div className="w-[300px] h-[450px] rounded-[12px] overflow-hidden absolute left-[40px] bottom-[-220px]">
          <LazyLoadImage
            src={`https://image.tmdb.org/t/p/original${movieDetail?.poster_path}`}
            width="100%"
            height="100%"
            alt={movieDetail?.title}
            effect="blur"
          />
        </div>
      </div>
    </div>
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
