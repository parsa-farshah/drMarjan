import React from "react";
import Image from "next/image";
import Link from "next/link";

const MainBody = () => {
  const cards = [
    {
      id: 1,
      title: "لیزر موهای زائد",
      shortDescription:
        "اگر از صرف وقت و هزینه برای روش‌های دردناک و ناخوشایند رفع موهای زائد مانند اصلاح با تیغ، وکس، اپیلاتور و روش‌های دیگر خسته شده‌اید، لیزر موهای زائد بهترین و ایده‌آل‌ترین راه‌حل برای شما خواهد بود.",
      imageSrc:
        "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/body/body1.webp",
    },
    {
      id: 2,
      title: "الکترولیز موهای زائد",
      shortDescription:
        "الکترولیز موهای زائد یک روش دائمی برای حذف موهای تکی از صورت یا بدن است. در این روش از دستگاه پزشکی تخصصی الکترولیز برای از بین بردن ریشه فعال مو در فولیکول مو استفاده می‌شود. برخلاف کاهش مو، الکترولیز تنها روش مورد تأیید FDA برای حذف دائمی موهای زائد است.",
      imageSrc:
        "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/body/body2.webp",
    },
    {
      id: 3,
      title: "لیپولیز تزریقی",
      shortDescription:
        "لیپولیز تزریقی یک روش غیرجراحی برای از بین بردن چربی‌های ناخواسته و مقاوم در صورت، غبغب یا بدن است. این روش به‌طور خاص برای هدف قرار دادن تجمع‌های کوچک چربی در نواحی مشخص بدن طراحی شده است. اگر در نواحی ران، شکم، باسن یا پهلو چربی موضعی دارید، ممکن است گزینه مناسبی برای این درمان باشید.",
      imageSrc:
        "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/body/body3.webp",
    },
    {
      id: 4,
      title: "اسکلروتراپی",
      shortDescription:
        "اسکلروتراپی یک روش بسیار ایمن و اثبات‌شده برای از بین بردن رگ‌های عنکبوتی و مویرگ‌های سطحی ناخوشایند است. این یک روش ساده و غیرجراحی است که معمولاً ۳۰ تا ۴۰ دقیقه طول می‌کشد و تحت بی‌حسی موضعی انجام می‌شود.",
      imageSrc:
        "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/body/body4.webp",
    },
  ];

  return (
    <div className="w-full h-fit py-20 px-[5%] 2xl:container 2xl:mx-auto">
      <h1 className="text-center text-[#71815e] text-[40px]">بدن</h1>
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
                <p className="md:h-[180px] lg:h-[200px] xl:h-[150px]">
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

export default MainBody;
