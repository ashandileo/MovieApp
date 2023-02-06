import React from "react";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>GoMovies | About</title>
      </Head>
      <div className="container text-white pt-[200px]">
        <p className="text-[32px] font-semibold">Welcome to GoMovies</p>
        <p className="mt-[20px]">
          GoMovies is a movie application that provides users with information
          and details about movies. The application allows users to search for
          movies and view details. It serves as a one-stop destination for movie
          enthusiasts to stay up to date with the latest releases and to learn
          more about their favorite films.
        </p>

        <p className="mt-[20px]">
          GoMovies created using React.js and Next.js technologies. These
          technologies provide the application with a fast and efficient way to
          render its user interface, allowing users to seamlessly navigate and
          interact with the app.
        </p>

        <p className="mt-[20px] mb-[8px]">
          List technologies that GoMovies used:
        </p>
        <ul className="list-disc ml-[16px]">
          <li>React.js</li>
          <li>Next.js</li>
          <li>Tailwindcss</li>
          <li>React Query</li>
          <li>The Movie Database (TMDb) API</li>
          <li>Axios</li>
        </ul>
      </div>
    </>
  );
};

export default About;
