import Image from "next/image";
import Link from "next/link";
import React from "react";

function FaceMain() {
  const cards = [
    {
      id: 1,
      title: "بوتاکس",
      shortDescription:
        "بوتاکس زیبایی یک روش درمانی ایمن و مؤثر است که با کاهش ظاهر چین‌وچروک و خطوط، پوست شما را صاف‌تر و جوان‌تر می‌کند.",
      imageSrc:
        "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/face/1-Botox.webp",
    },
    {
      id: 2,
      title: "فیلر پوستی",
      shortDescription:
        "بدون شک فیلر پوستی یکی از محبوب‌ترین روش‌های درمانی در میان افراد است. فیلر پوستی یک روش ایمن و مؤثر برای افزایش حجم، فرم‌دهی و جوان‌سازی پوست می‌باشد.",
      imageSrc:
        "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/face/02.-Dermal-Fillers.webp",
    },
    {
      id: 3,
      title: "فیلر لب",
      shortDescription:
        "فیلر لب بهترین روش برای افزایش حجم، پر بودن و فرم‌دهی لب‌ها است و به‌طور خاص برای بهبود ظاهر و جذابیت لب‌ها طراحی شده است.",
      imageSrc:
        "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/face/03.-Lip-Fillers.webp",
    },
    {
      id: 4,
      title: "رینوپلاستی غیرجراحی",
      shortDescription:
        "رینوپلاستی غیرجراحی که به آن رینوپلاستی مایع نیز گفته می‌شود، یک روش پیشرفته و غیرتهاجمی است که می‌تواند فرم بینی را بدون نیاز به جراحی بهبود دهد.",
      imageSrc:
        "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/face/04.-Non-Surgical-Rhinoplasty.webp",
    },
    {
      id: 5,
      title: "لیفت صورت غیرجراحی",
      shortDescription:
        "انجام لیفت صورت غیرجراحی می‌تواند تجربه‌ای شگفت‌انگیز باشد؛ دیدن تفاوتی که این روش‌ها در ظاهر پوست ایجاد می‌کنند بسیار چشمگیر و رضایت‌بخش است.",
      imageSrc:
        "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/face/05.-Non-Surgical-Facelift.webp",
    },
    {
      id: 6,
      title: "بوسترهای پوستی",
      shortDescription:
        "بوسترهای پوستی باعث بهبود قابل‌توجه نرمی، بافت و خاصیت ارتجاعی پوست می‌شوند. این مواد به شکل ژل نرم بوده و به آبرسانی و جوان‌سازی پوست کمک می‌کنند.",
      imageSrc:
        "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/face/06.-Skin-Boosters.webp",
    },
    {
      id: 6,
      title: "لیپولیز",
      shortDescription:
        "لیپولیز یک روش ساده و مؤثر برای کاهش غبغب و بهبود خط فک است. این روش به کاهش چربی‌های موضعی کمک می‌کند و ظاهر صورت را خوش‌فرم‌تر می‌سازد.",
      imageSrc:
        "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/face/07.-Lipolysis.webp",
    },
    {
      id: 7,
      title: "میکروبلیدینگ ابرو",
      shortDescription:
        "میکروبلیدینگ ابرو یک تکنیک نیمه‌دائمی محبوب است که باعث ایجاد ابروهایی پرپشت، خوش‌فرم و طبیعی می‌شود.",
      imageSrc:
        "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/face/09.-Eye-Brow-Microblading.webp",
    },
  ];

  return (
    <div className="w-full h-fit py-20 px-[5%] 2xl:container 2xl:mx-auto">
      <h1 className="text-center text-[#71815e] text-[40px]">صورت</h1>
      <div className="flex w-full h-fit flex-col gap-y-5 md:gap-y-12  md:flex-row flex-wrap mt-10 justify-between lg:justify-start">
        {/* cards */}
        {cards.map((item, i) => {
          const specialBg = i === 1 || i === 4 || i === 7;

          return (
            <div
              key={item.id + item.title}
              className={`w-full md:w-[45%] lg:w-[33%] h-fit p-4 ${specialBg ? "bg-[#f6f2ec]" : null}`}
            >
              <div className="px-4 text-[#71815e] ">
                {/* image */}
                <div className="relative w-full h-[280px] sm:h-[340px] md:h-[167px] lg:h-[320px]">
                  <Image
                    fill
                    src={item.imageSrc}
                    alt={item.title}
                    objectFit="cover"
                  />
                </div>
                {/* title */}
                <div className="mt-8 mb-5 flex justify-between items-center w-full ">
                  <Link
                    href="#"
                    className="flex justify-center w-full h-full text-xl "
                  >
                    {item.title}
                  </Link>
                </div>
                {/* description */}
                <p className="md:h-[100px] lg:h-[90px]">
                  {item.shortDescription} ...
                </p>
                {/* read more */}
                <Link
                  href="#"
                  className="mt-8 flex justify-center px-[30px] py-3 bg-[#71815e] text-white text-xl font-bold w-fit rounded-md mx-auto mb-4"
                >
                  ادامه مطلب
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FaceMain;
