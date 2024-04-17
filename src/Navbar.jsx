import React, { useContext } from "react";
import { ThemeContext } from "./App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navbarTheme = theme === "dark" ? "bg-dark-hero" : "bg-light-hero";

  return (
    <nav
      className={`bg-indigo-600 w-full py-4 dark:bg-indigo-900 ${navbarTheme}`}
      style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000 }}
    >
      <div className="container-fluid mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-white text-xl font-bold ml-3">Behroz Afzali</h1>
        </div>
        <ul className="flex space-x-4">
          <li>
            <span className="text-white hover:text-gray-300 cursor-pointer">
              Projects
            </span>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/behroz-afzali-b07316278/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 cursor-pointer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <button
              onClick={toggleTheme}
              className="text-white hover:text-gray-300 cursor-pointer mr-3"
            >
              {theme === "light" ? (
                <FontAwesomeIcon icon={faSun} />
              ) : (
                <FontAwesomeIcon icon={faMoon} />
              )}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
