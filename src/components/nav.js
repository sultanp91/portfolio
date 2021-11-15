import React from "react";

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects"> Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>{" "}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
