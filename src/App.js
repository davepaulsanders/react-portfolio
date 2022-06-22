import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
function App() {
  const [links] = useState(["About", "Projects", "Contact", "Resume"]);
  const [activeNav, setActiveNav] = useState(links[0]);
  return (
    <div className="App">
      <Header links={links} activeNav={activeNav} setActiveNav={setActiveNav} />
      <About />
    </div>
  );
}

export default App;
