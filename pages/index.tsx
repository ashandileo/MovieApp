export default function Home() {
  return (
    <div className="background-image">
      <div className="container pt-[140px] relative z-[2]">
        <div className="text-white">
          <div className="leading-[70px]">
            <h1 className="text-[90px] font-bold">GODZILLA</h1>
            <h1 className="text-[40px] font-bold">KING OF THE MONSTERS</h1>
          </div>
          <p className="mt-[12px] text-[18px]">
            It is a long established fact that a reader will be distracted by
            the readable content <br /> of a page when looking at its layout.
            The point of using Lorem Ipsum is that it has <br /> a more-or-less
            normal distribution of letters.
          </p>
          <div className="flex items-center gap-[6px] mt-[24px]">
            <img src="/img/filled-star.png" />
            <img src="/img/filled-star.png" />
            <img src="/img/filled-star.png" />
            <img src="/img/filled-star.png" />
            <img src="/img/outlined-star.png" />
          </div>
          <div className="flex items-center mt-[24px]">
            <button className="rounded-full bg-[#64B6D0] hover:bg-[#0da0cf] duration-150 py-[8px] px-[16px] font-bold">
              See Detail
            </button>
          </div>
        </div>

        <div className="mt-[16px] text-white">
          <p className="text-[20px] font-bold">Popular Movies</p>
          <div
            className="w-full h-[280px] mt-[16px] flex items-center grid grid-cols-6 gap-4 py-[8px] px-[16px] rounded-[12px]"
            style={{ backgroundColor: "rgba(103, 101, 113, 0.34)" }}
          >
            {[1, 2, 3, 4, 5, 6].map((a, i) => (
              <div
                className="w-full h-full rounded-[12px] overflow-hidden relative cursor-pointer popular-movies"
                key={i}
              >
                <img
                  src="/img/movie-1.png"
                  className="w-full h-full object-cover"
                />
                <div className="content absolute z-[2] bottom-[20px] left-[8px]">
                  <p>BATMAN</p>
                  <div className="flex items-center gap-[3px]">
                    <img
                      src="/img/filled-star.png"
                      className="w-[12px] h-[12px]"
                    />
                    <img
                      src="/img/filled-star.png"
                      className="w-[12px] h-[12px]"
                    />
                    <img
                      src="/img/filled-star.png"
                      className="w-[12px] h-[12px]"
                    />
                    <img
                      src="/img/filled-star.png"
                      className="w-[12px] h-[12px]"
                    />
                    <img
                      src="/img/outlined-star.png"
                      className="w-[12px] h-[12px]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
