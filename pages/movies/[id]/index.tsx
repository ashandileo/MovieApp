import React from "react";
import Head from "next/head";
import { pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useGetMovieDetail } from "../../../hooks/movies";
import { IGenres } from "../../../types/MovieTypes";
import PDFReport from "../../../components/PDFReport";

interface IMovieDetail {
  movieId: number;
}

const MovieDetail = ({ movieId }: IMovieDetail) => {
  const { data } = useGetMovieDetail(movieId);

  const movieDetail = data?.data;

  const downloadPDF = async () => {
    const doc = <PDFReport movieDetail={movieDetail} />;
    const asPdf = pdf();
    asPdf.updateContainer(doc);
    const blob = await asPdf.toBlob();
    saveAs(blob, "document.pdf");
  };

  return (
    <>
      <Head>
        <title>Go Movies | {movieDetail?.title}</title>
      </Head>
      <div className="container pt-[100px] text-white pb-[40px]">
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

            <div className="absolute left-[370px] bottom-[22px]">
              <p className="text-[32px] font-semibold">{movieDetail?.title}</p>
              <p>Tagline: {movieDetail?.tagline || "-"}</p>
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
              <div className="flex items-center gap-[12px] mt-[12px]">
                {movieDetail?.genres?.map((genre: IGenres) => (
                  <div
                    className="border border-white py-[4px] px-[12px] rounded-full"
                    key={genre?.id}
                  >
                    {genre?.name}
                  </div>
                ))}
              </div>
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

          <div className="absolute w-[60%] left-[370px] mt-[12px]">
            <p className="text-[22px] font-semibold">Overview</p>
            <p>{movieDetail?.overview}</p>
            <button
              className="rounded-full bg-[#64B6D0] hover:bg-[#0da0cf] duration-150 py-[8px] px-[16px] font-bold mt-[16px]"
              onClick={downloadPDF}
            >
              Print
            </button>
          </div>
        </div>

        <div className="mt-[250px]">
          <h1 className="text-[32px] font-medium">Production Companies</h1>
          <div className="w-full mt-[16px] flex items-center gap-[12px] flex-wrap">
            {movieDetail?.production_companies
              ?.filter((company: any) => company?.logo_path)
              ?.map((company: any) => (
                <div className="text-center">
                  <div className="w-[200px] h-[300px] bg-white rounded-[12px] overflow-hidden">
                    <img
                      src={`https://image.tmdb.org/t/p/original${company?.logo_path}`}
                      className="w-full h-full object-contain"
                    />
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
      </div>
    </>
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
