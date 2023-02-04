import React from "react";

const Header = () => {
  return (
    <header className="py-[24px] w-full fixed z-[2]">
      <div className="container flex items-center justify-between text-white">
        <div className="flex items-center gap-[40px]">
          <a>Home</a>
          <a>Movies</a>
          <a>About</a>
        </div>
        <div>
          <p>GoMovies</p>
        </div>
        <div>
          <p>Search Movies</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
