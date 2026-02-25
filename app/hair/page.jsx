import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HairMain from "../components/HairMain";

const page = () => {
  return (
    <div>
      <Header
        home={"./"}
        aboutUs={"./aboutUs"}
        face={"./face"}
        body={"./body"}
        skin={"./skin"}
        hair={"/"}
      />
      <HairMain />
      <Footer />
    </div>
  );
};

export default page;
