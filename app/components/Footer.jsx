import Image from "next/image";
import Link from "next/link";
import React from "react";
import SocialLinks from "./SocialLinks";
import MenuLinks from "./MenuLinks";
import FooterLegal from "./FooterLegal";

const Footer = () => {
  return (
    <div className="w-full h-fit bg-[#f5f1ea] py-4 border-t border-t-[#71815e]">
      <div className="w-40 h-40 relative mx-auto">
        <Image fill src="/images/logo.png" alt="logo" />
      </div>
      <div className="flex justify-center pt-8 pb-4">
        <SocialLinks />
      </div>
      <div className="flex justify-center mb-4">
        <MenuLinks />
      </div>
      <div>
        <FooterLegal />
      </div>
    </div>
  );
};

export default Footer;
