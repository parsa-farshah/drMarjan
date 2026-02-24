import React from "react";
import Image from "next/image";

function MainAboutUs() {
  const textTechnology = [
    {
      id: 1,
      text: "تزریقات زیبایی تخصصی: لب روسی، رفع افتادگی، اصلاح بدون جراحی، MD Codes",
    },
    {
      id: 2,
      text: "اندولیفت Ufoton ایتالیایی: لیفت عمیق و ایمن با دقت هوش مصنوعی",
    },
    {
      id: 3,
      text: "Body Endolift: فناوری نوین برای لیفت و فرم‌دهی بدن، کاهش چربی موضعی، و سفت‌سازی پوست بدون جراحی",
    },
    {
      id: 4,
      text: "هایفو HIFU پیشرفته: سفت‌سازی و ضدچروک مؤثر",
    },
    {
      id: 5,
      text: " لیزر موهای زائد: Bios (Real Alex) و Titanium سه‌طیفه",
    },
    {
      id: 6,
      text: "مزوتراپی پیشرفته: ویتامین، آبرسانی و تحریک کلاژن",
    },
    {
      id: 7,
      text: "فیلر، ژل و بوتاکس طبیعی",
    },
    {
      id: 8,
      text: "درمان‌های تکمیلی پوست: میکرونیدلینگ، پاکسازی عمیق، رفع لک، برنامه‌های Rejuvenation شخصی‌سازی‌شده",
    },
  ];
  return (
    <div className="py-10 px-[30px] lg:mx-[33px] lg:px-[56px] flex justify-between items-center 2xl:container 2xl:mx-auto">
      {/* text */}
      <div className="w-full md:w-[45%]">
        <h3 className="w-fit mx-auto md:mx-[30px] text-[40px] relative text-[#728061] text-center before:context-[] before:w-[140%] before:absolute before:top-[30%] before:left-1/2 before:-translate-1/2 before:h-[2px] before:bg-[#728061] mb-2.5">
          درباره ما
        </h3>
        <strong className="flex pb-2.5 mb-4 text-[#71815d]">
          " به آیندهٔ زیبایی خوش‌آمدید."
        </strong>
        <p className="flex text-[#71815d] font-normal pb-2.5 mb-4 md:pl-4">
          دکتر مرجان خلیلی (پزشک MD) با سال‌ها تجربه و گواهی بین‌المللی از
          اروپا، امارات و ایران، پیشرو در جوان‌سازی طبیعی و زیبایی ماندگار است.
          او با ترکیب هنر تناسب چهره و دانش روز، تجربه‌ای متفاوت از زیبایی عمیق
          و اعتمادبه‌نفس واقعی می‌آفریند.
        </p>
        <p className="flex text-[#71815d] font-normal pb-2.5 mb-4 md:pl-4">
          مرکز ما در منطقه یک تهران، نزدیک الهیه، نیاوران، زعفرانیه و اندرزگو،
          محیطی لوکس، آرام و علمی فراهم کرده است.
        </p>

        {/* technology */}
        <strong className="flex pb-2.5 mb-4 text-[#71815d]">
          " خدمات و فناوری‌های پیشرفته"
        </strong>
        <ul className="flex flex-col gap-3 text-[#71815d] list-disc px-4">
          {textTechnology.map((val) => {
            return <li key={val.id}>{val.text}</li>;
          })}
        </ul>
      </div>
      {/* image */}
      <div className="hidden md:block flex w-[45%] h-full px-4">
        <div className="relative w-full h-[441px] lg:h-[540px]  xl:h-[640px] hover:scale-110 duration-500 cursor-pointer">
          <Image
            fill
            src="/images/aboutImage.webp"
            alt="about"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}

export default MainAboutUs;
