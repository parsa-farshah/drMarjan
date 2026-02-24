"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

// import "./../../styles/style.css";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

const SliderPartners = () => {
  const partners = [
    {
      id: 1,
      imageSrc:
        "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/partners/partner1.webp",
    },
    {
      id: 2,
      imageSrc:
        "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/partners/partner2.webp",
    },
    {
      id: 3,
      imageSrc:
        "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/partners/partner3.webp",
    },
    {
      id: 4,
      imageSrc:
        "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/partners/partner4.webp",
    },
    {
      id: 5,
      imageSrc:
        "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/partners/partner5.webp",
    },
    {
      id: 6,
      imageSrc:
        "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/partners/partner6.webp",
    },
  ];

  return (
    <>
      <Swiper
        className="mySwiper my-5"
        slidesPerView={4}
        spaceBetween={20}
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
      >
        {partners.map((val, i) => {
          return (
            <SwiperSlide key={val.id}>
              <div className="relative h-[100px] sm:h-[120px] md:h-[180px] lg:h-[150px]">
                <Image fill objectFit="contain" src={val.imageSrc} alt="" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default SliderPartners;
