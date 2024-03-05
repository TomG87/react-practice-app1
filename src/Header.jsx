import React from "react";
import logo from "./assets/react.svg";

export default function Header() {
  return (
    <div>
      <img src={logo} className="logo" />
      <header className="header_1">ReactFacts</header>
      <header className="header_2">React Course-Project 1</header>
    </div>
  );
}
