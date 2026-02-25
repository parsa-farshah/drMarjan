import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainBody from "../components/MainBody";

const page = () => {
  return (
    <div>
      <Header
        home={"./"}
        aboutUs={"./aboutUs"}
        face={"./face"}
        body={"/"}
        skin={"./skin"}
        hair={"./hair"}
      />
      <MainBody />
      <Footer />
    </div>
  );
};

export default page;
