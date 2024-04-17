import React, { useContext } from "react";
import { ThemeContext } from "./App";
import Projects from "./Projects";

function Hero() {
  const { theme } = useContext(ThemeContext);
  const heroClass = theme === "dark" ? "bg-dark-hero" : "bg-light-hero";

  return (
    <div
      className={`w-screen ml-0 m-8 flex flex-col justify-center items-center mr-auto min-h-screen overflow-x-hidden dark:bg-blue-900 text-white ${heroClass} bg-gradient-to-b from-purple-500 via-indigo-500 to-cyan-400 sm:pt-24`}
    >
      <div className="mx-auto dark:bg-blue-900 px-5 py-24">
        <div className="text-left  w-full">
          <div className="flex items-center">
            <h1 className="my-4 text-xl font-bold leading-tight">
              Hi👋, <br /> My name is Behroz
              <br /> I am a Front-end developer
            </h1>

            <img
              src="profile.jpeg"
              alt="Profile Picture"
              className="h-48 rounded-5xl shadow-xl ml-4"
            />
          </div>
          <p className="mb-16">
            Welcome to my portfolio! <br /> I'm Behroz Afzali, eager and
            persistent web-developer <br /> with a keen interest in tech. <br />
            I embrace challenges with a positive mindset, <br /> always eager to
            learn and adapt. Feel free to browse through my portfolio.
          </p>
          <div className="container mx-auto  flex items-center justify-center flex-col mt-8">
            <p className="text-xl mb-3">My Tech Toolkit so far</p>
            <div className="flex justify-center mx-auto mb-5">
              <img
                src="html.png"
                alt="html"
                className="w-12 h-12 mr-2 ransition-transform transform hover:scale-110"
              />
              <img
                src="css.png"
                alt="css"
                className="w-12 h-12 mr-2 ransition-transform transform hover:scale-110"
              />
              <img
                src="tailwind.png"
                alt="tailwind"
                className="w-12 h-12 mr-2 transition-transform transform hover:scale-110"
              />

              <img
                src="git2.png"
                alt="git"
                className="w-11 h-11 mr-2 ransition-transform transform hover:scale-110"
              />
              <img
                src="github.png"
                alt="github"
                className="w-11 h-11 mr-2 ransition-transform transform hover:scale-110"
              />
              <img
                src="javascript.png"
                alt="javascript"
                className="w-10 h-10 mr-2 ransition-transform transform hover:scale-110"
              />
              <img
                src="microsoft_visual_studio_code_alt_macos.png"
                alt="Vs-Code"
                className="w-12 h-12 mr-3 ransition-transform transform hover:scale-110"
              />
            </div>
            <div className="flex justify-center mx-auto ">
              <a
                href="https://github.com/afzbehroz?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline bg-white text-gray-800 font-bold rounded-full py-4 px-8 mt-2"
              >
                View Projects on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      <Projects />
    </div>
  );
}

export default Hero;
