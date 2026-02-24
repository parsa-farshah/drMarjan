import React from "react";
import LineText from "./LineText";

function WhyChooseUs() {
  const textWhyChooseUS = [
    {
      id: 1,
      text: "طراحی درمان با هوش مصنوعی و تجهیزات اورجینال",
    },
    {
      id: 2,
      text: "تلفیق علم و هنر چهره‌شناسی",
    },
    {
      id: 3,
      text: "نتایج طبیعی، ماندگار و ایمن",
    },
    {
      id: 4,
      text: "تیم حرفه‌ای، آموزش‌دیده و خوش‌برخورد",
    },
    {
      id: 5,
      text: "دسترسی آسان از شمال تهران",
    },
  ];

  return (
    <div className="py-10  px-[30px] lg:mx-[33px] lg:px-[56px] px-4">
      <div className="md:flex hidden">
        <LineText
          txt={"چرا کلینیک دکتر مرجان خلیلی هوشمندانه‌ترین انتخاب است؟"}
        />
      </div>

      <strong className="text-[#71815d] md:hidden flex flex pb-2.5 mb-4">
        "چرا کلینیک دکتر مرجان خلیلی هوشمندانه‌ترین انتخاب است؟"
      </strong>
      <ul className="flex flex-col gap-3 text-[#71815d] list-disc  mt-6 px-10">
        {textWhyChooseUS.map((val) => {
          return <li key={val.id}>{val.text}</li>;
        })}
      </ul>
    </div>
  );
}

export default WhyChooseUs;
