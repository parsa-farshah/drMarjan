import React from "react";
import LineText from "./LineText";
import Image from "next/image";

const OurTreatments = () => {
  const treatments = [
    {
      id: 1,
      image:
        "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/services-1.png",
      text: "صورت",
    },
    {
      id: 2,
      image:
        "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/services-2.png",
      text: "پوست",
    },
    {
      id: 3,
      image:
        "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/services-3.png",
      text: "بدن",
    },
    {
      id: 4,
      image:
        "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/services-4.png",
      text: "مو",
    },
  ];

  return (
    <div className="py-10 2xl:container 2xl:mx-auto">
      <LineText txt={"خدمات ما"} />
      <div className="flex flex-col sm:flex-row flex-wrap pt-10 px-[15px]">
        {treatments.map((val, i) => {
          return (
            <div
              key={val.id}
              className={`w-[95%] sm:w-[45%] lg:w-[23%] h-fit pt-5 px-[15px] mb-5 
    ${i % 2 === 1 ? " bg-[#a1a686] hover:bg-[#f5f1ea]" : "hover:bg-[#a1a686] bg-[#f5f1ea]"} 
    group  duration-500 mx-auto cursor-pointer`}
            >
              <div className="relative w-[95%] h-[300px] sm:h-[250px] lg:h-[200px] md:h-[350px] xl:h-[300px] mx-auto overflow-hidden">
                <Image
                  fill
                  src={val.image}
                  alt={val.text}
                  objectFit="cover"
                  className="duration-500 transform group-hover:scale-110"
                />
              </div>
              <h3
                className={`text-center text-xl lg:text-3xl lg:my-5 my-3.5 duration-300  ${i % 2 === 1 ? "group-hover:text-[#71815e] text-white " : "text-[#71815e] group-hover:text-white"}`}
              >
                {val.text}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurTreatments;
