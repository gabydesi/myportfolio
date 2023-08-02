import React from "react";
import Videogames from "../assets/videogames.png";
import Promanitas from "../assets/promanitas.png";
import Dogs from "../assets/dogs.jpg";
import Nomadeando from "../assets/nomadeando.jpg";
import Oddi from "../assets/oddi.jpg";

function Work() {
  return (
    <div
      name="work"
      className="w-full md:h-screen text-[#a1bdd0] bg-[#18434e] pt-80"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-[#a1bdd0] border-[#d8ddea] ">
            Work
          </p>
          <p className="py-6">Check out some of my recent work:</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item nomadeando*/}
          <div
            style={{ backgroundImage: `url(${Nomadeando})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text 2xl font-bold text-[#d8ddea] tracking-wider">
                WordPress Blog
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://nomadeando.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#d8ddea] text-[#18434e] font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item dogs*/}
          <div
            style={{ backgroundImage: `url(${Dogs})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100 py-1 px-4">
              <span className="text 2xl font-bold text-[#d8ddea] tracking-wider">
                Single page aplication <br /> <br /> ReactJS, JavaScript,
                NodeJS, Express, PostgreSQL, HTML, CSS
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/gabydesi/Individual_Project_Dogs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#d8ddea] text-[#18434e] font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item videogames*/}
          <div
            style={{ backgroundImage: `url(${Videogames})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100 py-1 px-4">
              <span className="text 2xl font-bold text-[#d8ddea] tracking-wider">
                Single page aplication <br /> <br /> ReactJS, JavaScript,
                NodeJS, Express, PostgreSQL, HTML, CSS
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/gabydesi/Individual_Project_VideoGames"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#d8ddea] text-[#18434e] font-bold text-lg">
                    Code
                  </button>
                </a>

                <a
                  href="https://individual-project-video-games.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#d8ddea] text-[#18434e] font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item promanitas*/}
          <div
            style={{ backgroundImage: `url(${Promanitas})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100 py-1 px-4">
              <span className="text 2xl font-bold text-[#d8ddea] tracking-wider">
                Job market place <br />
                <br /> React JS, JavaScript, NodeJS, Express, PostgreSQL, MUI,
                AuthO, Cloudinary
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/ProManitas"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#d8ddea] text-[#18434e] font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item ODDI*/}
          <div
            style={{ backgroundImage: `url(${Oddi})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100 py-1 px-4">
              <span className="text 2xl font-bold text-[#d8ddea] tracking-wider">
                Website <br />
                <br /> ReactJS, Tailwind CSS
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://oddi.es/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <a
                    href="https://github.com/Dentmedia-oddi/client_oddi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#d8ddea] text-[#18434e] font-bold text-lg">
                      Code
                    </button>
                  </a>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#d8ddea] text-[#18434e] font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
