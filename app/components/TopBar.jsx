import Image from "next/image";
import React from "react";

function TopBar() {
  return (
    <div className="w-full h-7 pt-[15px] px-[15px] lg:px-[5%] mb-[5px] 2xl:container 2xl:mx-auto duration-300">
      <ul className=" flex justify-between md:justify-end md:gap-[30px] text-textBrand">
        {/* email */}
        <li className="group">
          <a
            className="flex items-center gap-1.5"
            href="mailto:info@drmarjankhalili.com"
          >
            <div className="relative w-[17px] h-[14px]">
              <Image fill src="/icons/email-icon.webp" alt="email icon" />
            </div>
            <span className="text-sm group-hover:opacity-40 duration-300">
              info@drmarjankhalili.com
            </span>
          </a>
        </li>
        <li className="group">
          <a className="flex items-center gap-1.5" href="tel: 02126372001">
            <div className="relative w-[17px] h-[17px]">
              <Image fill src="/icons/phone-icon.webp" alt="phoe icon" />
            </div>
            <span className="text-sm group-hover:opacity-40 duration-300">
              ۰۲۱-۲۶۳۷۲۰۰۱
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default TopBar;
