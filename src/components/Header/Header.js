import React, { useState } from "react";

import "./Header.css";

function Header(props) {
  const { links, activeNav, setActiveNav } = props;

  const [menuStatus, setMenuStatus] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault();
    if (menuStatus) {
      document.querySelector(".nav-links").style.display = "none";
    } else {
      document.querySelector(".nav-links").style.display = "block";
    }
    setMenuStatus(!menuStatus);
  };

  window.addEventListener("resize", () => {
    if (window.innerWidth > 700) {
      document.querySelector(".nav-links").style.display = "block";
      setMenuStatus(true);
    } else {
      setMenuStatus(false);
      document.querySelector(".nav-links").style.display = "none";
    }
  });

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
          <ul className="d-flex list-unstyled">
            {links.map((link) => {
              return (
                <li
                  key={link}
                  className={link === activeNav && "active"}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveNav(link);
                  }}
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
