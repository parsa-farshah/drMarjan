import Link from "next/link";
import React from "react";
import {
  FaEmail,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import ClinicMap from "./ClinicMap";

const LocationAndContact = () => {
  const contacts = [
    {
      id: 1,
      text: "info@drmarjankhalili.com",
      href: "mailto:info@drmarjankhalili.com",
      Icon: FaEnvelope,
    },
    {
      id: 2,
      text: "02126372011",
      href: "https://wa.me/982126372011",
      Icon: FaWhatsapp,
    },
  ];

  return (
    <div className="pt-10 2xl:container 2xl:mx-auto">
      <div className="w-full h-fit bg-[#f5f1ea] flex flex-col md:flex-row flex-nowrap items-center ">
        {/* emergency call */}
        <div className="w-full h-fit text-[#71815e] px-[25px] pt-10 pb-5">
          <h2 className="text-xl md:text-[30px] lg:text-[40px] pb-5">
            تماس فوری
          </h2>
          {contacts.map((contact, i) => {
            const IconComponent = contact.Icon;
            return (
              <Link
                key={contact.id}
                href={contact.href}
                target="_blank"
                className="flex w-[250px] items-center  gap-[30px] py-2.5 mb-2.5 text-[#71815e] text-lg md:text-xl hover:text-[#495c3c] transition-colors"
                style={{
                  borderBottom: "1px dashed #d0c8b2",
                  borderBottomWidth: "1px",
                  borderSpacing: "2px !important", // ⚠️ این روی border-dash تاثیری ندارد
                  borderImage:
                    "repeating-linear-gradient(to right, ##d0c8b2 0, ##d0c8b2 5px, transparent 10px, transparent 15px) 1",
                }}
              >
                <IconComponent className="text-2xl md:text-3xl" />
                <span className="w-full flex">{contact.text}</span>
              </Link>
            );
          })}
          {/* location */}
          <Link
            href="https://goo.gl/maps/your-location"
            target="_blank"
            className="flex  items-center  gap-[30px] py-2.5 mb-2.5 text-[#71815e] text-lg md:text-xl hover:text-[#495c3c] transition-colors"
          >
            <FaMapMarkerAlt className="text-2xl md:text-3xl" />
            <span className="w-full flex text-sm">
              بلوار اندرزگو، بلوار صبا، نبش شریعتی، تهران، منطقه ۱ شنبه تا
              پنجشنبه: ۱۰ تا ۱۹ نزدیک‌ترین نشانه‌ها: اندرزگو × صبا | دسترسی آسان
              از شریعتی پارکینگ: کوچه‌های مجاور و پارکینگ ضلع شمالی
            </span>
          </Link>
        </div>
        {/* map */}
        <ClinicMap />
      </div>
    </div>
  );
};

export default LocationAndContact;
