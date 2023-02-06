import React from "react";
import Head from "next/head";
import AnimatePage from "../../components/AnimatePage";

const About = () => {
  const listTech = [
    {
      text: "React.js",
      link: "https://reactjs.org/",
    },
    {
      text: "Next.js",
      link: "https://nextjs.org/",
    },
    {
      text: "Tailwindcss",
      link: "https://tailwindcss.com/",
    },
    {
      text: "React Query",
      link: "https://tanstack.com/query/v3/",
    },
    {
      text: "The Movie Database (TMDb) API",
      link: "https://www.themoviedb.org/",
    },
    {
      text: "Axios",
      link: "https://axios-http.com",
    },
    {
      text: "Zustand",
      link: "https://github.com/pmndrs/zustand",
    },
  ];

  return (
    <AnimatePage>
      <Head>
        <title>GoMovies | About</title>
      </Head>
      <div className="container text-white pt-[200px]" data-cy="about-content">
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
          {listTech.map((tech) => (
            <li>
              <a href={tech.link} target="__blank">
                {tech.text}
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-[20px]">
          GitHub Repository{" "}
          <a
            className="text-sky-500"
            href="https://github.com/ashandileo/MovieApp"
            target="__blank"
          >
            https://github.com/ashandileo/MovieApp
          </a>
        </p>
      </div>
    </AnimatePage>
  );
};

export default About;
