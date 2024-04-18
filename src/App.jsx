import { createContext, useState, useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import "./App.css";

export const ThemeContext = createContext(null);

export default function App() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Navbar />
      <div className="flex items-center justify-center bg-gradient-to-b dark:from-blue-900 from-purple-500 via-indigo-500 to-cyan-400 sm:pt-24">
        <div className="w-[900px]">
          <Hero />
          <Footer />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
