"use client";
import React from "react";

const ClinicMap = () => {
  return (
    <div className="w-full max-w-4xl px-[25px] mx-auto p-2 my-10 rounded-lg overflow-hidden ">
      <iframe
        className="w-full h-[360px] sm:h-[400px] md:h-[450px] lg:h-[500px]"
        src="https://www.google.com/maps?q=35.79409,51.434967&z=16&output=embed"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="نقشه موقعیت کلینیک دکتر مرجان خلیلی"
      ></iframe>
    </div>
  );
};

export default ClinicMap;
