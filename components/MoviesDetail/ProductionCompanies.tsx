import { useRouter } from "next/router";
import React from "react";
import { useQueryClient } from "react-query";
import { IMovie } from "../../types/MovieTypes";

interface IMovieDetail {
  data: IMovie;
}

const ProductionCompanies = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const movieDetail = queryClient.getQueryData([
    "movies",
    router.query.id,
  ]) as IMovieDetail;

  return (
    <div className="mt-[250px]">
      <h1 className="text-[32px] font-medium">Production Companies</h1>
      <div className="w-full mt-[16px] flex items-center gap-[12px] flex-wrap">
        {movieDetail?.data?.production_companies?.map((company: any) => (
          <div className="text-center">
            <div className="w-[200px] h-[300px] bg-white rounded-[12px] overflow-hidden border border-white px-[12px]">
              {company?.logo_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/original${company?.logo_path}`}
                  className="w-full h-full object-contain"
                />
              ) : (
                <p className="w-full h-full text-black flex items-center justify-center">
                  {company?.name}
                </p>
              )}
            </div>
            <div className="w-[200px]">
              <p className="text-[16px] font-semibold mt-[12px] w-full truncate">
                {company?.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductionCompanies;
