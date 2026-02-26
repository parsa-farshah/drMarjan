import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import BeforeAfterImage from "../components/BeforeAfterImage";
import GalleryMain from "../components/GalleryMain";

function page() {
  return (
    <div>
      <Header
        home={"./"}
        aboutUs={"./aboutUs"}
        face={"./face"}
        body={"./body"}
        skin={"./skin"}
        hair={"./hair"}
      />
      <Footer />
    </div>
  );
}

export default page;
