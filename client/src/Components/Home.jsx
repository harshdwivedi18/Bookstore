import React from "react";
import FreeCard from "./FreeCard";

function Home() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: "url(images/Home-bg.jpg)" }}
      >
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content flex-col justify-center gap-12 md:flex-row mx-4">
          <div className="h-full w-[400px]">
            <img
              className="shadow w-full shadow-black drop-shadow-lg"
              src="/images/Logo.png"
              alt=""
            />
          </div>
          <div className="w-full md:w-1/2  my-5">
            {/* This is right section */}
            <div className="flex-col flex font-semibold  gap-6 text-2xl text-black">
              <div>
                Welcome User , to your one place stop for ultimate reading
                experience with multiple categories and genres of books.{" "}
                <span className="text-rose-500">"Happy Reading"</span>
              </div>
              <div>
                “A reader lives a thousand lives before he dies. The man who
                never reads lives only one.”
              </div>
              <div>George R.R. Martin</div>
            </div>
          </div>
        </div>
      </div>
      <FreeCard />
    </>
  );
}

export default Home;
