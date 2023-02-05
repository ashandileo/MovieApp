import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <header
      className={`py-[24px] w-full fixed z-[5] ${
        router.route === "/" ? "" : "bg-[#192026] shadow-lg"
      }`}
    >
      <div className="container flex items-center justify-between text-white">
        <div className="flex items-center gap-[40px]">
          <Link href="/">Home</Link>
          <Link href="/movies">Movies</Link>
          <Link href="/about">About</Link>
        </div>
        <div>
          <Link href="/">
            <a className="text-[24px]">GoMovies`</a>
          </Link>
        </div>
        <div>
          <p>Search Movies</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
