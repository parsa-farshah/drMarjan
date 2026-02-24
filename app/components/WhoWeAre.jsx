import React from "react";
import LineText from "./LineText";
import Link from "next/link";

const WhoWeAre = () => {
  return (
    <div className="py-10 2xl:container 2xl:mx-auto">
      <LineText txt={"کلینیک دکتر مرجان خلیلی"} />
      <h5 className="my-6 w-[80%] text-xl text-center mx-auto text-[#71815e]">
        دکتر مرجان خلیلی با بیش از 10 سال تجربه در ارائه خدمات پوست، مو، لیزر و
        زیبایی شامل اندولیفت بدن، تزریق بوتاکس، فیلر، مزوتراپی، لیزر موهای زائد
        و جوانسازی پوست با استفاده از جدیدترین تجهیزات پزشکی و محصولات استاندارد
        اروپایی.
      </h5>
      <div className="text-sm xl:text-[16px] px-3 xl:px-10 w-fit mx-auto">
        <button className="cursor-pointer px-6 py-2 text-[#71815e] border border-[#71815E] rounded-full hover:bg-[#70815E] duration-300 hover:text-white ">
          <Link href="/">بیشتر بدانید</Link>
        </button>
      </div>
    </div>
  );
};

export default WhoWeAre;
