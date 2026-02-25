import React from "react";
import { AccordionGallery } from "./AccordionGallery";

const GalleryMain = () => {
  return (
    <div className="w-full md:w-[70%] md:mx-auto h-fit px-[5%] bg-[#f5f1ea] md:bg-[#fff0] py-28 2xl:container 2xl:mx-auto">
      <h1 className="text-[#71815e] text-[40px] text-center md:pb-5">
        زیبایی خود را ارتقا دهید
      </h1>
      <p className="pt-2.5 text-right text-justify text-[#71815e]">
        تحولات شگفت‌انگیز مشتریان ما را از طریق تصاویر قبل و بعد مشاهده کنید.
        متخصصان ماهر ما به افراد کمک کرده‌اند تا به اهداف زیبایی خود برسند؛ چه
        جوان‌سازی پوست باشد، چه تقویت ویژگی‌های طبیعی صورت یا فرم‌دهی بدن. گالری
        تصاویر را مرور کنید تا نمونه‌های واقعی از نتایج فوق‌العاده‌ای که با
        درمان‌های شخصی‌سازی‌شده ما امکان‌پذیر است را ببینید.
      </p>
      <div className="mt-7 md:mt-20">
        <AccordionGallery />
      </div>
    </div>
  );
};

export default GalleryMain;
