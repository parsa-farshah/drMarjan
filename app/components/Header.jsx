import React from "react";
import TopBar from "./TopBar";
import Menu from "./Menu";

function Header({ home, aboutUs, face, skin, body, hair }) {
  return (
    <header>
      <TopBar />
      <Menu
        home={home}
        aboutUs={aboutUs}
        face={face}
        skin={skin}
        body={body}
        hair={hair}
      />
    </header>
  );
}

export default Header;
