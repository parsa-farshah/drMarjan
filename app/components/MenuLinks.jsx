import React from "react";
import Link from "next/link";

const MenuLinks = () => {
  const menus = [
    { id: 1, text: "صفحه اصلی", href: "/" },
    { id: 2, text: "درباره ما", href: "/about" },
    { id: 3, text: "تماس با ما", href: "/contact" },
  ];

  return (
    <ul className="flex gap-6">
      {menus.map((menu) => (
        <li key={menu.id} className="group">
          <Link
            href={menu.href}
            className="relative text-[#71815e] text-lg transition-colors duration-300 group-hover:text-[#d0c8b2] underline"
          >
            {menu.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuLinks;
