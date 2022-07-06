import React, { useState } from "react";

import "./Header.css";

function Header(props) {
  const { links, activeNav, setActiveNav } = props;

  const [menuStatus, setMenuStatus] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault();
    if (!menuStatus) {
      document.querySelector(".nav-links").classList.add("nav-is-open");
    } else {
      document.querySelector(".nav-links").classList.remove("nav-is-open");
    }
    setMenuStatus(!menuStatus);
  };

  window.addEventListener("resize", () => {
    setMenuStatus(false);
    document.querySelector(".nav-links").classList.remove("nav-is-open");
  });

  const handleNavClick = (e) => {
    e.preventDefault();
    setActiveNav(e.target.textContent);
    setMenuStatus(false);
    // needs innerwidth in case resize event happened but nav wasn't toggled
      document.querySelector(".nav-links").classList.remove("nav-is-open");
  };
  return (
    <div>
      <nav className="w-100 d-flex justify-content-between align-items-center">
        <h1 className="site-title no-wrap">
          <a className="text-decoration-none text-black" href="/">
            Dave Sanders
          </a>
        </h1>
        <i
          onClick={toggleMenu}
          className="hamburger fa-solid fa-bars fa-2xl"
        ></i>
        <div className="nav-links">
          <ul className="nav-ul d-flex list-unstyled">
            {links.map((link) => {
              return (
                <li
                  key={link}
                  className={link === activeNav ? "active" : ""}
                  onClick={handleNavClick}
                >
                  {link}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
