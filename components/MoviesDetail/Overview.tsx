import { useRouter } from "next/router";
import React from "react";
import { useQueryClient } from "react-query";
import { IMovie } from "../../types/MovieTypes";
import PDFReport from "../PDFReport";
import { pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";

interface IMovieDetail {
  data: IMovie;
}

const Overview = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const movieDetail = queryClient.getQueryData([
    "movies",
    router.query.id,
  ]) as IMovieDetail;

  const downloadPDF = async () => {
    const doc = <PDFReport movieDetail={movieDetail?.data} />;
    const asPdf = pdf();
    asPdf.updateContainer(doc);
    const blob = await asPdf.toBlob();
    saveAs(blob, "document.pdf");
  };

  return (
    <div className="absolute w-[60%] left-[370px] mt-[12px]">
      <p className="text-[22px] font-semibold">Overview</p>
      <p>{movieDetail?.data?.overview}</p>
      <button
        className="rounded-full bg-[#64B6D0] hover:bg-[#0da0cf] duration-150 py-[8px] px-[16px] font-bold mt-[16px]"
        onClick={downloadPDF}
      >
        Print
      </button>
    </div>
  );
};

export default Overview;
