import React from "react";
import { Document, Page, Text, View } from "@react-pdf/renderer";
import { IMovie } from "../types/MovieTypes";

interface IPDFReport {
  movieDetail: IMovie;
}

const PDFReport = ({ movieDetail }: IPDFReport) => {
  return (
    <Document>
      <Page size="A4" style={{ paddingTop: "15px" }}>
        <View style={{ padding: 20 }}>
          <Text style={{ marginBottom: "12px" }}>
            Title: {movieDetail?.title}
          </Text>
          <Text style={{ marginBottom: "12px" }}>
            Tagline: {movieDetail?.tagline || "-"}
          </Text>
          <Text style={{ marginBottom: "12px" }}>
            Language: {movieDetail?.original_language}
          </Text>
          <Text style={{ marginBottom: "12px" }}>
            Rating: {movieDetail?.vote_average}
          </Text>
          <Text style={{ marginBottom: "12px" }}>
            Duration: {movieDetail?.runtime} mins
          </Text>
          <Text style={{ marginBottom: "12px" }}>
            Relase Date: {movieDetail?.release_date}
          </Text>
          <Text style={{ marginBottom: "12px" }}>
            Genres: {movieDetail?.genres?.map((genre) => genre?.name + ",")}
          </Text>
          <Text style={{ marginBottom: "12px" }}>
            Overview: {movieDetail?.overview}
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default PDFReport;
