import { useRouter } from "next/router";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useQueryClient } from "react-query";
import { IMovieDetailData } from "../../types/MovieTypes";

const Backdrop = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  // Get movie detail data
  const movieDetail = queryClient.getQueryData([
    "movies",
    router.query.id,
  ]) as IMovieDetailData;

  return (
    <>
      <LazyLoadImage
        src={`https://image.tmdb.org/t/p/original${movieDetail?.data?.backdrop_path}`}
        width="100%"
        height="100%"
        alt={movieDetail?.data?.title}
        effect="blur"
      />
      <div
        className="absolute left-[0px] right-[0px] bottom-[0px] h-[65%]"
        style={{
          background:
            "linear-gradient(180deg, rgba(29, 29, 29, 0) 0%, #0F1E29 100%)",
        }}
      />
    </>
  );
};

export default Backdrop;
