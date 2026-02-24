import React from "react";
import TopBar from "./TopBar";
import Menu from "./Menu";

function Header({ home, aboutUs }) {
  return (
    <header>
      <TopBar />
      <Menu home={home} aboutUs={aboutUs} />
    </header>
  );
}

export default Header;
