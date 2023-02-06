import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <header
      className={`py-[24px] w-full fixed z-[100] ${
        router.route === "/" ? "" : "bg-[#192026] shadow-lg"
      }`}
    >
      <div className="container flex items-center justify-between text-white">
        <div className="flex items-center gap-[40px]">
          <Link
            href="/"
            className={`link ${router.pathname === "/" ? "active" : ""}`}
          >
            Home
          </Link>
          <Link
            href="/movies"
            data-cy="header-movies"
            className={`link ${router.pathname === "/movies" ? "active" : ""}`}
          >
            Movies
          </Link>
          <Link
            href="/about"
            data-cy="header-about"
            className={`link ${router.pathname === "/about" ? "active" : ""}`}
          >
            About
          </Link>
        </div>
        <div>
          <Link href="/" className="text-[24px] font-bold">
            GoMovies
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
