import Image from "next/image";
import Header from "./components/Header";
import Slider from "./components/Slider";
import OurTreatments from "./components/OurTreatments";
import WhoWeAre from "./components/WhoWeAre";
import OurPartners from "./components/OurPartners";
import FollowUs from "./components/FollowUs";
import LocationAndContact from "./components/LocationAndContact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Slider />
      <OurTreatments />
      <WhoWeAre />
      <OurPartners />
      <FollowUs />
      <LocationAndContact />
      <Footer />
    </div>
  );
}
