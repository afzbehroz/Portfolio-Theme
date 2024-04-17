import React, { useContext, useState } from "react";
import { ThemeContext } from "./App";

function Footer() {
  const { theme } = useContext(ThemeContext);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <footer
      className={`dark:bg-gray-700 bg-gray-500 py-4 ${
        theme === "dark" ? "text-white" : "text-black"
      }`}
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        opacity: isHovered ? 1 : 0,
        transition: "opacity 0.3s ease",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto flex justify-between items-start">
        <div className="text-white">
          <h2 className="text-lg font-bold">Contact</h2>
          <p className="mt-2">afzbehroz@gmail.com</p>
        </div>
        <div className="text-white">
          <h2 className="text-lg font-bold mr-2">Skills</h2>
          <p>Front-end web development</p>
        </div>
      </div>
      <div className="container mx-auto text-center mt-4">
        <p className={theme === "dark" ? "text-white" : "text-black"}>
          © {new Date().getFullYear()} Behroz's Portfolio
        </p>
      </div>
    </footer>
  );
}

export default Footer;
