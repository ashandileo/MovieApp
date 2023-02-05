import React from "react";
import { IMovie } from "../types/MovieTypes";

interface ICardMovie {
  movie: IMovie;
}

const CardMovie = ({ movie }: ICardMovie) => {
  return (
    <div
      className="w-full h-full rounded-[12px] overflow-hidden relative cursor-pointer popular-movies border border-white"
      key={movie?.id}
    >
      <div
        className="absolute left-[0px] right-[0px] bottom-[0px] h-[65%]"
        style={{
          background:
            "linear-gradient(180deg, rgba(29, 29, 29, 0) 0%, #0F1E29 100%)",
        }}
      />
      <img
        src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
        className="w-full h-full object-cover"
      />
      <div className="content absolute z-[2] bottom-[12px] px-[12px]">
        <p className="text-[18px] font-semibold">{movie?.title}</p>
        <div className="flex items-center justify-between mt-[2px]">
          <p className="text-[12px]">{movie?.release_date}</p>
          <div className="flex items-center">
            <p className="text-[12px] mr-[4px]">{movie?.vote_average}</p>
            <img src="/img/filled-star.png" className="w-[12px] h-[12px]" />
          </div>
        </div>
        <div className="w-full line-clamp-3 mt-[8px]">
          <p className="text-[12px]">{movie?.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default CardMovie;
