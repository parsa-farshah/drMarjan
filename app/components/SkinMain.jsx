import React from "react";
import Image from "next/image";
import Link from "next/link";

const SkinMain = () => {
  const cards = [
    {
      id: 1,
      title: "فیشیال صورت",
      shortDescription:
        "اعتمادبه‌نفس ما به‌طور طبیعی با پوستی شفاف‌تر، زیباتر، جوان‌تر و سالم‌تر مرتبط است. درمان‌های فیشیال صورت برای کاهش خطوط حالت چهره و فرم‌دهی کانتور صورت طراحی شده‌اند و با جوان‌سازی و شاداب‌سازی پوست طبیعی، اعتمادبه‌نفس شما را افزایش می‌دهند.",
      imageSrc:
        "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/skin/skin1.webp",
    },
    {
      id: 2,
      title: "لایه‌برداری شیمیایی",
      shortDescription:
        "لایه‌برداری شیمیایی صورت یک روش ساده، سریع و بسیار مؤثر برای داشتن پوستی درخشان است. این روش غیرجراحی به جوان‌سازی پوست صورت کمک می‌کند و باعث نمایان شدن پوستی نرم‌تر و صاف‌تر می‌شود. از این روش برای بهبود بافت پوست، یکدست کردن رنگدانه‌ها و تحریک بازسازی پوست استفاده می‌شود.",
      imageSrc:
        "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/skin/skin2.webp",
    },
    {
      id: 3,
      title: "میکرونیدلینگ",
      shortDescription:
        "میکرونیدلینگ باعث تحریک بازسازی طبیعی و ترمیم پوست می‌شود و به‌طور کلی یک روش ایمن و مؤثر محسوب می‌شود. این درمان برای درمان جای جوش، خطوط ریز، ترک‌های پوستی، سفت کردن پوست، تیرگی زیر چشم و منافذ باز بسیار مؤثر است.",
      imageSrc:
        "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/skin/skin3.webp",
    },
    {
      id: 4,
      title: "درمان با سلول‌های بنیادی",
      shortDescription:
        "اگر می‌خواهید بدون جراحی پوست خود را جوان‌سازی کنید و علائم خفیف یا اولیه پیری صورت دارید، درمان با سلول‌های بنیادی گزینه‌ای عالی برای شماست. با کمترین دوره نقاهت، فیشیال سلول‌های بنیادی می‌تواند به پوست کدر، پیر یا مستعد آکنه جان تازه‌ای بدهد و باعث شود احساس شادابی و جوانی کنید.",
      imageSrc:
        "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/skin/skin4.webp",
    },
    {
      id: 5,
      title: "درماپن",
      shortDescription:
        "میکرونیدلینگ با درماپن یک روش محبوب غیرجراحی برای جوان‌سازی پوست است که تولید کلاژن و الاستین را تحریک کرده و پوست را فوراً حجیم‌تر و شاداب‌تر می‌کند. این درمان نواقص پوستی را هدف قرار داده و بافت و رنگ پوست را بهبود می‌بخشد. این روش ساده اما مؤثر برای درمان منافذ باز، جای جوش، لک‌های پوستی و علائم اولیه پیری کاربرد دارد.",
      imageSrc:
        "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/skin/skin5.webp",
    },
    {
      id: 6,
      title: "پی‌آر‌پی",
      shortDescription:
        "درمان‌های PRP صورت روشی ایمن و مؤثر برای بازگرداندن ظاهر جوان پوست هستند. درمان PRP که با نام فیشیال خون‌آشام نیز شناخته می‌شود، یکی از پیشرفته‌ترین روش‌های جوان‌سازی پوست به شمار می‌رود.",
      imageSrc:
        "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/skin/skin6.webp",
    },
  ];

  return (
    <div className="w-full h-fit py-20 px-[5%] 2xl:container 2xl:mx-auto">
      <h1 className="text-center text-[#71815e] text-[40px]">پوست</h1>
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
                <p className="md:h-[200px] lg:h-[170px]">
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
};

export default SkinMain;
