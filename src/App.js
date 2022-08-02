import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [links] = useState([
    { page: "About", link: "/" },
    { page: "Projects", link: "/projects" },
    { page: "Skills", link: "/skills" },
    { page: "Resume", link: "/resume" },
    { page: "Contact", link: "/contact" },
  ]);
  const [activeNav, setActiveNav] = useState(links[0]);
  return (
    <Router>
      <div className="App">
        <Header
          links={links}
          activeNav={activeNav}
          setActiveNav={setActiveNav}
        />
        <div className="site-container d-flex justify-content-center w-100">
          <Routes>
            <Route path="/react-portfolio" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
