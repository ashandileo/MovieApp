import { useRouter } from "next/router";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useQueryClient } from "react-query";
import { IMovieDetailData } from "../../types/MovieTypes";

const Poster = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  // Get movie detail data
  const movieDetail = queryClient.getQueryData([
    "movies",
    router.query.id,
  ]) as IMovieDetailData;

  return (
    <div className="w-[300px] h-[450px] rounded-[12px] overflow-hidden absolute left-[40px] bottom-[-220px]">
      <LazyLoadImage
        src={`https://image.tmdb.org/t/p/original${movieDetail?.data?.poster_path}`}
        width="100%"
        height="100%"
        alt={movieDetail?.data?.title}
        effect="blur"
      />
    </div>
  );
};

export default Poster;
