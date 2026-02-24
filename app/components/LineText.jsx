"use client";
import { motion } from "framer-motion";

function LineText({ txt }) {
  return (
    <div className="w-[95%] flex  items-center justify-center gap-6 overflow-hidden mx-auto">
      <motion.span
        initial={{ width: "0%" }}
        whileInView={{ width: "85%" }}
        transition={{ duration: 3 }}
        viewport={{ once: false }}
        className="h-[2px] lg:h-[5px] bg-[#71815E] w-full rounded-l-2xl"
      />

      <h2 className="text-xl md:text-[30px] lg:text-[40px] text-[#71815E] px-5  whitespace-nowrap flex-shrink-0">
        {txt}
      </h2>

      <motion.span
        initial={{ width: "0%" }}
        whileInView={{ width: "85%" }}
        transition={{ duration: 3 }}
        viewport={{ once: false }}
        className="h-[2px] lg:h-[5px] bg-[#71815E] w-full rounded-l-2xl"
      />
    </div>
  );
}

export default LineText;
