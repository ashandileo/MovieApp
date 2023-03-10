import { useRouter } from "next/router";
import React from "react";
import { useQueryClient } from "react-query";
import { IMovieDetailData } from "../../types/MovieTypes";
import PDFReport from "../PDFReport";
import { pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import Button from "../Button";

const Overview = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  // Get movie detail data
  const movieDetail = queryClient.getQueryData([
    "movies",
    router.query.id,
  ]) as IMovieDetailData;

  // Function to download movie detail information to pdf
  const downloadPDF = async () => {
    const doc = <PDFReport movies={[movieDetail?.data]} />;
    const asPdf = pdf();
    asPdf.updateContainer(doc);
    const blob = await asPdf.toBlob();
    saveAs(blob, `${movieDetail?.data?.title}.pdf`);
  };

  return (
    <div className="absolute w-[60%] left-[370px] mt-[12px]">
      <p className="text-[22px] font-semibold">Overview</p>
      <p>{movieDetail?.data?.overview}</p>
      <Button onClick={downloadPDF} customClass="mt-[16px]">
        Print {movieDetail?.data?.title}
      </Button>
    </div>
  );
};

export default Overview;
