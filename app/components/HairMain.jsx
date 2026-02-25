import React from "react";
import Image from "next/image";
import Link from "next/link";

const HairMain = () => {
  const cards = [
    {
      id: 1,
      title: "پی‌آر‌پی مو",
      shortDescription:
        "PRP روشی بسیار عالی برای مقابله با ریزش مو است؛ چه بخواهید آن را به‌عنوان درمان تکمیلی بعد از کاشت مو استفاده کنید و چه نسبت به روش‌های تهاجمی کاشت مو تردید داشته باشید، این روش می‌تواند گزینه‌ای مؤثر و ایمن برای شما باشد.",
      imageSrc:
        "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/hair/hair1.webp",
    },
    {
      id: 2,
      title: "میکروپیگمنتیشن پوست سر",
      shortDescription:
        "میکروپیگمنتیشن پوست سر یکی از مؤثرترین روش‌های درمان ریزش مو برای مردان و زنان است. این تکنیک غیرجراحی و دقیق که ایمن و مؤثر بودن آن ثابت شده است، ظاهر فولیکول‌های طبیعی مو را شبیه‌سازی کرده و به افراد ظاهری شبیه به موی تراشیده‌شده و پرپشت می‌دهد.",
      imageSrc:
        "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/hair/hair2.webp",
    },
    {
      id: 3,
      title: "درمان با سلول‌های بنیادی مو",
      shortDescription:
        "یکی از جدیدترین پیشرفت‌ها در حوزه ترمیم و بازسازی مو، تکنیک کاشت و درمان مو با سلول‌های بنیادی است.",
      imageSrc:
        "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/hair/hair3.webp",
    },
  ];

  return (
    <div className="w-full h-fit py-20 px-[5%] 2xl:container 2xl:mx-auto">
      <h1 className="text-center text-[#71815e] text-[40px]">مو</h1>
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
                <div className="relative w-full h-[280px] sm:h-[340px] md:h-[250px] lg:h-[320px]">
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
                <p className="md:h-[140px] lg:h-[170px]">
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

export default HairMain;
