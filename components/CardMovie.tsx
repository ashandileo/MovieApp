import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface ICardMovie {
  image?: string;
  title?: string;
  releaseDate?: string;
  voteAverage?: number;
  description?: string;
}

const CardMovie = ({
  image,
  title,
  releaseDate,
  voteAverage,
  description,
}: ICardMovie) => {
  return (
    <div className="w-full h-full rounded-[12px] overflow-hidden relative cursor-pointer popular-movies border border-white bg-white">
      <div
        className="absolute left-[0px] right-[0px] bottom-[0px] h-[65%]"
        style={{
          background:
            "linear-gradient(180deg, rgba(29, 29, 29, 0) 0%, #0F1E29 100%)",
        }}
      />

      <LazyLoadImage
        src={image}
        width="100%"
        height="100%"
        alt={title}
        effect="blur"
      />

      <div className="content absolute z-[2] bottom-[12px] px-[12px]">
        <p className="text-[18px] font-semibold">{title}</p>
        <div className="flex items-center justify-between mt-[2px]">
          <p className="text-[12px]">{releaseDate}</p>
          <div className="flex items-center">
            <p className="text-[12px] mr-[4px]">{voteAverage}</p>
            <img src="/img/filled-star.png" className="w-[12px] h-[12px]" />
          </div>
        </div>
        <div className="w-full line-clamp-3 mt-[8px]">
          <p className="text-[12px]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardMovie;
