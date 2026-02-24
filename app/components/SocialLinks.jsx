import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const SocialLinks = () => {
  const socials = [
    { id: 1, href: "#", Icon: FaFacebookF },
    { id: 2, href: "#", Icon: FaInstagram },
    { id: 3, href: "#", Icon: FaWhatsapp },
  ];

  return (
    <ul className="flex gap-2">
      {socials.map((social) => {
        const IconComponent = social.Icon;
        return (
          <li key={social.id} className="group">
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center  justify-center w-[40px] h-[40px] bg-transparent rounded-full transition-colors duration-300 group-hover:bg-[#71815e] duration-300"
            >
              <IconComponent className="w-[25px] h-[25px] text-[#71815e] group-hover:text-white duration-300" />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLinks;
