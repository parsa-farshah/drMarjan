"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const textVariants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
      // staggerChildren: 0.2,   // اگر بخوای عناصر پشت سر هم بیان
    },
  },
};

const SwiperSlider = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `
        <span class="${className} relative w-10 h-10 border-2 border-black overflow-hidden inline-block mx-1">
          <span class="bullet-fill absolute bottom-0 left-0 w-full h-0 bg-black transition-all duration-[3000ms]"></span>
        </span>
      `;
    },
  };

  return (
    <>
      <Swiper
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={pagination}
        modules={[Pagination, Autoplay]}
        className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[700px] xl:h-[90vh]"
      >
        {/* اسلاید ۱ */}
        <SwiperSlide>
          {({ isActive }) => (
            <div className="relative w-full h-full">
              <Image
                fill
                src="/images/slider1.jpg"
                alt="مرکز تخصصی پوست و زیبایی دکتر مرجان خلیلی - خدمات اندولیفت بدن"
                className="w-full h-full object-cover"
                loading="eager"
                priority
              />

              <motion.div
                className="absolute top-1/2 right-[5%] sm:right-[8%] lg:right-[10%] 2xl:right-[20%] -translate-y-1/2 text-white flex flex-col gap-3 md:gap-4 lg:gap-6 max-w-lg 2xl:max-w-2xl"
                initial="hidden"
                animate={isActive ? "visible" : "hidden"} // ← کلید اصلی اینجاست
                variants={textVariants}
              >
                <motion.h2
                  variants={textVariants}
                  className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-right leading-tight drop-shadow-lg"
                >
                  مرکز تخصصی پوست و <br /> زیبایی دکتر مرجان <br />
                  خلیلی
                </motion.h2>

                <motion.p
                  variants={textVariants}
                  className="text-sm sm:text-base lg:text-lg font-bold text-right drop-shadow-md"
                >
                  پیشرو در خدمات اندولیفت بدن
                </motion.p>

                <motion.div variants={textVariants}>
                  <a
                    href="/booking"
                    className="inline-block px-6 py-3 text-sm sm:text-base lg:text-lg font-medium border-2 border-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
                  >
                    رزرو نوبت
                  </a>
                </motion.div>
              </motion.div>
            </div>
          )}
        </SwiperSlide>

        {/* اسلاید ۲ */}
        <SwiperSlide>
          {({ isActive }) => (
            <div className="relative w-full h-full">
              <Image
                fill
                src="/images/slider2.jpg"
                alt="خدمات زیبایی پیشرفته - مرکز دکتر مرجان خلیلی"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />

              {/* اگر متن داری، مثل اسلاید بالا motion.div بذار و isActive رو استفاده کن */}
              {/* مثلاً: */}
              {/* <motion.div animate={isActive ? "visible" : "hidden"} ... > ... </motion.div> */}
            </div>
          )}
        </SwiperSlide>

        {/* اسلایدهای بعدی هم به همین شکل */}
      </Swiper>

      <style jsx global>{`
        .swiper-pagination-bullet-active .bullet-fill {
          height: 100% !important;
        }
        .swiper-pagination-bullet {
          background: transparent !important;
        }
      `}</style>
    </>
  );
};

export default SwiperSlider;
