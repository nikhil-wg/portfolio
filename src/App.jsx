import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import Contact from "./components/MySocials";
import ContactCard from "./components/ContactCard";
import Switch from "./components/Switch";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    console.log("Current theme:", theme); // Log the current theme
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      console.log("Dark mode enabled");
    } else {
      document.documentElement.classList.remove("dark");
      console.log("Light mode enabled");
    }
  }, [theme]);

  return (
    <>
      <div className="dark:bg-black text-black dark:text-white">
        <Switch handleTheme={handleThemeSwitch} />
        <Intro />
        <Portfolio />
        <Timeline />
        <ContactCard />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
