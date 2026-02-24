import React from "react";
import LineText from "./LineText";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

const FollowUs = () => {
  return (
    <div className="py-20 2xl:container 2xl:mx-auto">
      <LineText txt={"ما را دنبال کنید"} />
      <h3 className="text-center text-3xl pt-14">در اینستاگرام</h3>
      <div className="mt-12 flex justify-center">
        <Link
          href=""
          className="w-fit text-white rounded-md py-[7px] px-[14px] bg-[#408bd1] flex items-center gap-3 duration-300 hover:bg-[#359dff]"
        >
          دنبال کردن در اینستاگرام
          <FaInstagram />
        </Link>
      </div>
    </div>
  );
};

export default FollowUs;
