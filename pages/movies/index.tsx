import React from "react";

const Movies = () => {
  return (
    <div className="container pt-[100px] text-white">
      <h1 className="text-[32px] font-medium">Explore</h1>
      <p className="text-[20px] font-thin text-[#868686]">
        Find the best movies collections all in one place
      </p>

      <div className="w-full mt-[16px] flex items-center grid grid-cols-6 gap-[12px]">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15].map((d, i) => (
          <div className="flex flex-col items-center mb-[24px]" key={i}>
            <div className="w-full h-full rounded-[12px] overflow-hidden relative cursor-pointer">
              <div
                className="absolute left-[0px] right-[0px] bottom-[0px] h-[65%]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(29, 29, 29, 0) 0%, #0F1E29 100%)",
                }}
              />
              <img
                src="/img/movie-1.png"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center gap-[3px] mt-[8px]">
              <img src="/img/filled-star.png" className="w-[12px] h-[12px]" />
              <img src="/img/filled-star.png" className="w-[12px] h-[12px]" />
              <img src="/img/filled-star.png" className="w-[12px] h-[12px]" />
              <img src="/img/filled-star.png" className="w-[12px] h-[12px]" />
              <img src="/img/outlined-star.png" className="w-[12px] h-[12px]" />
            </div>
            <p className="font-semibold text-[16px] mt-[8px]">
              Batman and Superman
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
