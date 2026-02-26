import Image from "next/image";
import Link from "next/link";
import React from "react";
import MenubarBtn from "./MenubarBtn";

const Menu = ({
  aboutUs = "/aboutUs",
  home = "/",
  face = "/face",
  skin = "/skin",
  body = "/body",
  hair = "/hair",
  gallery = "/gallery",
  weblog = "/weblog",
}) => {
  const tiltleLefNav = [
    { id: 1, title: "گالری", pageRoute: gallery },
    { id: 2, title: "وبلاگ", pageRoute: weblog },
  ];
  return (
    <div>
      {/* mobile menu */}
      <div className="flex items-center justify-between px-[8%] md:px-[10%] mt-5 lg:hidden">
        <MenubarBtn
          home={home}
          aboutUs={aboutUs}
          face={face}
          skin={skin}
          body={body}
          hair={hair}
        />
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
              <div className="duration-500">خدمات ما</div>
              {/* submenu */}
              <div className="w-[90%] h-[414px] z-50 absolute left-1/2 justify-around -translate-x-1/2 hidden group-hover:flex top-18 text-white px-10 pt-[34px] pb-2.5 bg-[#AAB39F] duration-500 rounded-sm">
                {/* colum 1 */}
                <ul className="w-full">
                  <li className="pr-5 pb-5 text-2xl font-bold">
                    <Link href={face}>بوتاکس</Link>
                  </li>
                  <li className="py-1 w-[80%] border border-[#fff0] hover:border-white">
                    <Link href="/">فیلر پوستی</Link>
                  </li>
                  <li className="py-1 w-[80%] border border-[#fff0] hover:border-white">
                    <Link href="/">فیلر لب</Link>
                  </li>
                  <li className="py-1 w-[80%] border border-[#fff0] hover:border-white">
                    <Link href="/">رینوپلاستی غیرجراحی</Link>
                  </li>
                  <li className="py-1 w-[80%] border border-[#fff0] hover:border-white">
                    <Link href="/">لیفت صورت غیرجراحی</Link>
                  </li>
                  <li className="py-1 w-[80%] border border-[#fff0] hover:border-white">
                    <Link href="/">بوسترهای پوستی</Link>
                  </li>
                  <li className="py-1 w-[80%] border border-[#fff0] hover:border-white">
                    <Link href="/">لیپولیز</Link>
                  </li>
                  <li className="py-1 w-[80%] border border-[#fff0] hover:border-white">
                    <Link href="/">میکروبلیدینگ ابرو</Link>
                  </li>
                </ul>

                {/* colum 2 */}
                <ul className="w-full">
                  <li className="pr-5 pb-5 text-2xl font-bold">
                    <Link href={skin}>پوست</Link>
                  </li>
                  <li className="py-1 w-[80%] border border-[#fff0] hover:border-white">
                    <Link href="/">فیشیال صورت</Link>
                  </li>
                  <li className="py-1 w-[80%] border border-[#fff0] hover:border-white">
                    <Link href="/">لایه‌برداری شیمیایی</Link>
                  </li>
                  <li className="py-1 w-[80%] border border-[#fff0] hover:border-white">
                    <Link href="/">میکرونیدلینگ</Link>
                  </li>{" "}
                  <li className="py-1 w-[80%] border border-[#fff0] hover:border-white">
                    <Link href="/">درمان با سلول‌های بنیادی</Link>
                  </li>{" "}
                  <li className="py-1 w-[80%] border border-[#fff0] hover:border-white">
                    <Link href="/">درماپن</Link>
                  </li>{" "}
                  <li className="py-1 w-[80%] border border-[#fff0] hover:border-white">
                    <Link href="/">پی‌آر‌پی</Link>
                  </li>
                </ul>

                {/* colum 3 */}
                <ul className="w-full">
                  <li className="pr-5 pb-5 text-2xl font-bold">
                    <Link href={body}>بدن</Link>
                  </li>
                  <li className="py-1 w-[80%] border border-[#fff0] hover:border-white">
                    <Link href="/">لیزر موهای زائد</Link>
                  </li>
                  <li className="py-1 w-[80%] border border-[#fff0] hover:border-white">
                    <Link href="/">الکترولیز موهای زائد</Link>
                  </li>
                  <li className="py-1 w-[80%] border border-[#fff0] hover:border-white">
                    <Link href="/">لیپولیز تزریقی</Link>
                  </li>{" "}
                  <li className="py-1 w-[80%] border border-[#fff0] hover:border-white">
                    <Link href="/">اسکلروتراپی</Link>
                  </li>{" "}
                </ul>

                {/* colum 4 */}
                <ul className="w-full">
                  <li className="pr-5 pb-5 text-2xl font-bold">
                    <Link href={hair}>مو</Link>
                  </li>
                  <li className="py-1 w-[80%] border border-[#fff0] hover:border-white">
                    <Link href="#">پی‌آر‌پی مو</Link>
                  </li>
                  <li className="py-1 w-[80%] border border-[#fff0] hover:border-white">
                    <Link href="#">میکروپیگمنتیشن پوست سر</Link>
                  </li>
                  <li className="py-1 w-[80%] border border-[#fff0] hover:border-white">
                    <Link href="#">درمان با سلول‌های بنیادی مو</Link>
                  </li>
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
                    href={item.pageRoute}
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
