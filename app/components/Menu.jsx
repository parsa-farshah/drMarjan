import Image from "next/image";
import Link from "next/link";
import React from "react";
import MenubarBtn from "./MenubarBtn";

const Menu = ({ aboutUs = "/aboutUs", home = "/" }) => {
  const tiltleLefNav = [
    { id: 1, title: "گالری" },
    { id: 2, title: "وبلاگ" },
  ];
  return (
    <div>
      {/* mobile menu */}
      <div className="flex items-center justify-between px-[8%] md:px-[10%] mt-5 lg:hidden">
        <MenubarBtn home={home} aboutUs={aboutUs} />
        <div className="relative w-[80px] h-[80px] px-1">
          <Image fill src="/images/logo.png" alt="logo" objectFit="contain" />
        </div>
      </div>
      {/* desktop menu */}
      <div className="justify-between items-center hidden lg:flex px-[7%] mt-8 relative 2xl:container 2xl:mx-auto">
        {/* right side */}
        <nav className="w-[40%] ">
          <ul className="flex items-center justify-between">
            <li className="w-fit h-fit cursor-pointer text-sm xl:text-[16px] px-3 xl:px-10 py-8 group hoverText">
              <Link href={home} className="group-hover:opacity-60 duration-500">
                صفحه اصلی
              </Link>
            </li>
            <li className="w-fit h-fit cursor-pointer text-sm xl:text-[16px] px-3 xl:px-10 py-8 group hoverText">
              <Link
                href={aboutUs}
                className="group-hover:opacity-60 duration-500"
              >
                درباره ما
              </Link>
            </li>
            <li className="w-fit h-fit cursor-pointer text-sm xl:text-[16px] px-3 xl:px-10 py-8 group hoverText">
              <Link href="/" className="duration-500">
                خدمات ما
              </Link>
              {/* submenu */}
              <div className="w-[90%] h-[350px] z-50 absolute left-1/2 justify-around -translate-x-1/2 hidden group-hover:flex top-18 text-white px-5 pt-[20px] pb-2.5 bg-[#AAB39F] duration-1000">
                {/* colum 1 */}
                <ul className="w-full">
                  <li className="pr-5 pb-5">
                    <Link href="/">اند و لیفت</Link>
                  </li>
                  <li className="py-1 w-[80%] border border-[#fff0] hover:border-white">
                    <Link href="/">صورت</Link>
                  </li>
                  <li className="py-1 w-[80%] border border-[#fff0] hover:border-white">
                    <Link href="/">بدن</Link>
                  </li>{" "}
                </ul>

                {/* colum 2 */}
                <ul className="w-full">
                  <li className="pr-5 pb-5">
                    <Link href="/">مزوتراپی</Link>
                  </li>
                  <li className="py-1 w-[80%] border border-[#fff0] hover:border-white">
                    <Link href="/">صورت</Link>
                  </li>
                  <li className="py-1 w-[80%] border border-[#fff0] hover:border-white">
                    <Link href="/">بدن</Link>
                  </li>
                  <li className="py-1 w-[80%] border border-[#fff0] hover:border-white">
                    <Link href="/">مو</Link>
                  </li>
                </ul>

                {/* colum 3 */}
                <ul className="w-full">
                  <li className="pr-5 pb-5">
                    <Link href="/">تزریق فیلرهای جوانساز</Link>
                  </li>
                  <li className="py-1 w-[80%] border border-[#fff0] hover:border-white">
                    <Link href="/">صورت</Link>
                  </li>
                  <li className="py-1 w-[80%] border border-[#fff0] hover:border-white">
                    <Link href="/">بدن</Link>
                  </li>{" "}
                </ul>

                {/* colum 4 */}
                <ul className="w-full">
                  <li className="pr-5 pb-5">
                    <Link href="#">کانتورینگ</Link>
                  </li>
                  <li className="py-1 w-[80%] border border-[#fff0] hover:border-white">
                    <Link href="#">صورت</Link>
                  </li>
                  <li className="py-1 w-[80%] border border-[#fff0] hover:border-white">
                    <Link href="#">بدن</Link>
                  </li>{" "}
                </ul>
              </div>
            </li>
          </ul>
        </nav>
        {/* logo */}
        <div className="relative w-[80px] h-[80px] px-1 w-[40%] ">
          <Image fill src="/images/logo.png" alt="logo" objectFit="contain" />
        </div>
        {/* left side */}
        <nav className="w-[40%]">
          <ul className="flex items-center justify-between">
            {tiltleLefNav.map((item) => {
              return (
                <li
                  key={item.id}
                  className="w-fit h-fit cursor-pointer text-sm xl:text-[16px] px-3 xl:px-10 py-4 group hoverText"
                >
                  <Link
                    href="#"
                    className="group-hover:opacity-60 duration-500"
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
            <div className="text-sm xl:text-[16px] px-3 xl:px-10">
              <li className="cursor-pointer px-6 py-2 border border-[#71815E] rounded-full hover:bg-[#70815E] duration-300 hover:text-white ">
                <Link href="/">تماس فوری</Link>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
