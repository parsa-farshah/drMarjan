import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SkinMain from "../components/SkinMain";

const page = () => {
  return (
    <div>
      <Header
        home={"../"}
        aboutUs={"./aboutUs"}
        face={"./face"}
        body={"./body"}
        skin={"/"}
        hair={"./hair"}
      />
      <SkinMain />
      <Footer />
    </div>
  );
};

export default page;
