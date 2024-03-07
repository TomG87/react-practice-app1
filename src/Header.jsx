import React from "react";
import logo from "./assets/react.svg";

export default function Header() {
  return (
    <nav className="nav">
      <img src={logo} className="logo" />
      <h3 className="header_1">ReactFacts</h3>
      <h4 className="header_2">React Course-Project 1</h4>
    </nav>
  );
}
