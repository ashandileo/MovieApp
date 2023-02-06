import { useRouter } from "next/router";
import React from "react";
import { useQueryClient } from "react-query";
import { IGenres, IMovieDetailData } from "../../types/MovieTypes";

const MovieInformation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  // Get movie detail data
  const movieDetail = queryClient.getQueryData([
    "movies",
    router.query.id,
  ]) as IMovieDetailData;

  return (
    <div
      className="absolute left-[370px] bottom-[22px]"
      data-cy="movie-detail-content"
    >
      <p className="text-[32px] font-semibold">{movieDetail?.data?.title}</p>
      <p>Tagline: {movieDetail?.data?.tagline || "-"}</p>
      <p>Language: {movieDetail?.data?.original_language}</p>
      <div className="flex items-center">
        <p>Rating: {movieDetail?.data?.vote_average}</p>
        <img
          src="/img/filled-star.png"
          className="w-[12px] h-[12px] ml-[4px]"
        />
      </div>
      <p>Duration: {movieDetail?.data?.runtime} mins</p>
      <p>Relase Date: {movieDetail?.data?.release_date}</p>
      <div className="flex items-center gap-[12px] mt-[12px]">
        {movieDetail?.data?.genres?.map((genre: IGenres) => (
          <div
            className="border border-white py-[4px] px-[12px] rounded-full"
            key={genre?.id}
          >
            {genre?.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieInformation;
