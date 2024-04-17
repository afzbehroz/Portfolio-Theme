import { createContext, useState, useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import "./App.css";
import MyComponent from "./Test";

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
      <div className={theme}>
        <Navbar />
        <Hero />
        <MyComponent />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
