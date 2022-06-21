import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./Header.css";

function Header() {
  return (
    <div className="w-100 d-flex justify-content-between align-items-center">
      <h2 className="site-title">Dave Sanders</h2>
      <nav className="d-flex align-items-center">
        <ul className="nav-links d-flex list-unstyled">
          <li className="p-1 me-5">
            <a className="text-decoration-none text-black" href="#about">
              About
            </a>
          </li>
          <li className="p-1 ms-5 me-5">
            <a className="text-decoration-none text-black" href="#projects">
              Projects
            </a>
          </li>
          <li className="p-1 ms-5 me-5">
            <a className="text-decoration-none text-black" href="#contact">
              Contact
            </a>
          </li>
        </ul>
          <i class="hamburger fa-solid fa-bars fa-2xl d-none"></i>
      </nav>
    </div>
  );
}

export default Header;
