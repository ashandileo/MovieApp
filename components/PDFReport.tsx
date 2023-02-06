import React from "react";
import { Document, Page, Text, View } from "@react-pdf/renderer";
import { IMovie } from "../types/MovieTypes";

interface IPDFReport {
  movies: IMovie[];
}

const PDFReport = ({ movies }: IPDFReport) => {
  return (
    <Document>
      <Page size="A4">
        <View style={{ padding: "20px" }}>
          <Text style={{ marginBottom: "12px" }}>Movie Report</Text>
          <View
            style={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "row",
              border: "1px solid black",
            }}
          >
            <Text
              style={{
                padding: "8px",
                width: "50px",
                maxWidth: "200px",
                borderRight: "1px solid black",
                height: "100%",
              }}
            >
              No
            </Text>
            <Text
              style={{
                padding: "8px",
                width: "200px",
                maxWidth: "200px",
                borderRight: "1px solid black",
                height: "100%",
              }}
            >
              Title
            </Text>
            <Text
              style={{
                padding: "8px",
                width: "200px",
                maxWidth: "200px",
                borderRight: "1px solid black",
                height: "100%",
              }}
            >
              Release Date
            </Text>
            <Text
              style={{
                padding: "8px",
                width: "100px",
                maxWidth: "200px",
                height: "100%",
              }}
            >
              Language
            </Text>
          </View>
          {movies?.map((movie: IMovie, index: number) => (
            <View
              style={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "row",
                border: "1px solid black",
              }}
              key={movie?.id}
            >
              <Text
                style={{
                  padding: "8px",
                  width: "50px",
                  maxWidth: "200px",
                  borderRight: "1px solid black",
                  height: "100%",
                }}
              >
                {index + 1}
              </Text>
              <Text
                style={{
                  padding: "8px",
                  width: "200px",
                  maxWidth: "200px",
                  borderRight: "1px solid black",
                  height: "100%",
                }}
              >
                {movie?.title}
              </Text>
              <Text
                style={{
                  padding: "8px",
                  width: "200px",
                  maxWidth: "200px",
                  borderRight: "1px solid black",
                  height: "100%",
                }}
              >
                {movie?.release_date}
              </Text>
              <Text
                style={{
                  padding: "8px",
                  width: "100px",
                  maxWidth: "200px",
                  height: "100%",
                }}
              >
                {movie?.original_language}
              </Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default PDFReport;
