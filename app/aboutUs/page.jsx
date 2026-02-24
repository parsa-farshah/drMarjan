import React from "react";
import Header from "../components/Header";
import MainAboutUs from "../components/MainAboutUs";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";
import LocationAndContact from "../components/LocationAndContact";

const page = () => {
  return (
    <div>
      <Header home={"./"} aboutUs={"/"} />
      {/* main */}
      <MainAboutUs />
      <WhyChooseUs />
      <div className="relative mt-10 w-full">

        <div className="absolute top-[-5%] left-0 w-full z-20">
          <img
            src="/images/aboutFooterBg.webp"
            alt="Footer Background"
            className="w-full h-auto"
          />
        </div>

        <div className="relative z-30">
          <LocationAndContact />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default page;
