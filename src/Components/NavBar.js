import React from "react";
import Logo from "./Logo";

export default function NavBar() {
  return (
    <div className="navbar">
      <ul className="navbar-ul">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/aboutme">About me!</a>
        </li>
        <li>
          <a href="/projects">Projects 🚀 </a>
        </li>
      </ul>
    </div>
  );
}
