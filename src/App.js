import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";

function App() {
  const [links] = useState(["About", "Projects", "Contact", "Resume"]);
  const [activeNav, setActiveNav] = useState(links[0]);
  return (
    <div className="App">
      <Header links={links} activeNav={activeNav} setActiveNav={setActiveNav} />
      <div className="site-container d-flex justify-content-center w-100">
        {activeNav === "Resume" && <Resume />}
        {activeNav === "About" && <About />}
      </div>
    </div>
  );
}

export default App;
