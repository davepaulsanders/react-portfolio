import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";

function App() {
  const [links] = useState([
    "About",
    "Projects",
    "Contact",
    "Skills",
    "Resume",
  ]);
  const [activeNav, setActiveNav] = useState(links[0]);
  return (
    <div className="App">
      <Header links={links} activeNav={activeNav} setActiveNav={setActiveNav} />
      <div className="site-container d-flex justify-content-center w-100">
        {activeNav === "Skills" && <Skills />}
        {activeNav === "About" && <About />}
        {activeNav === "Resume" && <Resume />}
        {activeNav === "Contact" && <Contact />}
      </div>
    </div>
  );
}

export default App;
