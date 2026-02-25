import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FaceMain from "../components/FaceMain";

const page = () => {
  return (
    <div>
      <Header
        home={"../"}
        aboutUs={"./aboutUs"}
        face={"/"}
        body={"./body"}
        skin={"./skin"}
        hair={"./hair"}

      />
      <FaceMain />
      <Footer />
    </div>
  );
};

export default page;
