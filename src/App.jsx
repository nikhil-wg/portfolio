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
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      
    } else {
      document.documentElement.classList.remove("dark");
      
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
