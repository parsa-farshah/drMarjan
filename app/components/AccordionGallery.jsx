"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import BeforeAfterImage from "./BeforeAfterImage";

export function AccordionGallery() {
  return (
    <Accordion type="single" className="w-full">
      {/* Item 1 */}
      <AccordionItem value="1" className="border-0">
        <AccordionTrigger className="bg-[#a1a686] h-14 cursor-pointer text-white relative group px-6 [&>svg]:hidden">
          {/* + / - icon left */}
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-bold transition-all duration-200 group-data-[state=open]:opacity-0">
            +
          </span>
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-bold opacity-0 transition-all duration-200 group-data-[state=open]:opacity-100">
            −
          </span>

          {/* centered text */}
          <span className="absolute top-1/2 left-1/2 -translate-1/2 font-medium">
            بوتاکس
          </span>
        </AccordionTrigger>

        <AccordionContent className=" text-[#71815e] flex justify-between items-center p-6 flex-wrap">
          <div className="w-[45%] h-fit">
            <BeforeAfterImage
              afterImage={
                "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/gallery/botox/botoxAfter1.webp"
              }
              beforeImage={
                "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/gallery/botox/botoxBefore1.webp"
              }
            />
          </div>

          <div className="w-[45%] h-fit">
            <BeforeAfterImage
              afterImage={
                "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/gallery/botox/botoxAfter2.webp"
              }
              beforeImage={
                "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/gallery/botox/botoxBefore2.webp"
              }
            />
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Item 2 */}
      <AccordionItem value="2" className="border-0 mt-2">
        <AccordionTrigger className="bg-[#a1a686] h-14 cursor-pointer text-white relative group px-6 [&>svg]:hidden">
          {/* + / - icon left */}
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-bold transition-all duration-200 group-data-[state=open]:opacity-0">
            +
          </span>
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-bold opacity-0 transition-all duration-200 group-data-[state=open]:opacity-100">
            −
          </span>

          {/* centered text */}
          <span className="absolute top-1/2 left-1/2 -translate-1/2 font-medium">
            فیلر چانه
          </span>
        </AccordionTrigger>

        <AccordionContent className=" text-[#71815e] flex justify-between items-center p-6 flex-wrap">
          <div className="w-[45%] h-fit">
            <BeforeAfterImage
              afterImage={
                "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/gallery/chinFiller/chin-filler-after1.webp"
              }
              beforeImage={
                "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/gallery/chinFiller/chin-filer-before1.webp"
              }
            />
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Item 3 */}
      <AccordionItem value="3" className="border-0 mt-2">
        <AccordionTrigger className="bg-[#a1a686] cursor-pointer h-14 text-white relative group px-6 [&>svg]:hidden">
          {/* + / - icon left */}
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-bold transition-all duration-200 group-data-[state=open]:opacity-0">
            +
          </span>
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-bold opacity-0 transition-all duration-200 group-data-[state=open]:opacity-100">
            −
          </span>

          {/* centered text */}
          <span className="absolute top-1/2 left-1/2 -translate-1/2 font-medium">
            فیلر لب
          </span>
        </AccordionTrigger>

        <AccordionContent className=" text-[#71815e] flex justify-between items-center p-6 flex-wrap gap-y-4">
          <div className="w-[45%] h-fit">
            <BeforeAfterImage
              afterImage={
                "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/gallery/lipFiller/lipFillerAfter1.webp"
              }
              beforeImage={
                "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/gallery/lipFiller/lipFillerBefore1.webp"
              }
            />
          </div>

          <div className="w-[45%] h-fit">
            <BeforeAfterImage
              afterImage={
                "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/gallery/lipFiller/lipFillerAfter2.webp"
              }
              beforeImage={
                "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/gallery/lipFiller/lipFillerBefore2.webp"
              }
            />
          </div>

          <div className="w-[45%] h-fit">
            <BeforeAfterImage
              afterImage={
                "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/gallery/lipFiller/lipFillerAfter3.webp"
              }
              beforeImage={
                "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/gallery/lipFiller/lipFillerBefore3.webp"
              }
            />
          </div>

          <div className="w-[45%] h-fit">
            <BeforeAfterImage
              afterImage={
                "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/gallery/lipFiller/lipFillerAfter4.webp"
              }
              beforeImage={
                "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/gallery/lipFiller/lipFillerBefore4.webp"
              }
            />
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Item 4 */}
      <AccordionItem value="4" className="border-0 mt-2">
        <AccordionTrigger className="bg-[#a1a686] cursor-pointer h-14 text-white relative group px-6 [&>svg]:hidden">
          {/* + / - icon left */}
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-bold transition-all duration-200 group-data-[state=open]:opacity-0">
            +
          </span>
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-bold opacity-0 transition-all duration-200 group-data-[state=open]:opacity-100">
            −
          </span>

          {/* centered text */}
          <span className="absolute top-1/2 left-1/2 -translate-1/2 font-medium">
            فیلر پوستی
          </span>
        </AccordionTrigger>

        <AccordionContent className=" text-[#71815e] flex justify-between items-center p-6 flex-wrap gap-y-4">
          <div className="w-[45%] h-fit">
            <BeforeAfterImage
              afterImage={
                "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/gallery/dermalFiller/dermalFillerAfter1.webp"
              }
              beforeImage={
                "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/gallery/dermalFiller/dermalFillerBefore1.webp"
              }
            />
          </div>

          <div className="w-[45%] h-fit">
            <BeforeAfterImage
              afterImage={
                "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/gallery/dermalFiller/dermalFillerAfter2.webp"
              }
              beforeImage={
                "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/gallery/dermalFiller/dermalFillerBefore2.webp"
              }
            />
          </div>

          <div className="w-[45%] h-fit">
            <BeforeAfterImage
              afterImage={
                "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/gallery/dermalFiller/dermalFillerAfter3.webp"
              }
              beforeImage={
                "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/gallery/dermalFiller/dermalFillerBefore3.webp"
              }
            />
          </div>
          <div className="w-[45%] h-fit">
            <BeforeAfterImage
              afterImage={
                "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/gallery/dermalFiller/dermalFillerAfter4.webp"
              }
              beforeImage={
                "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/gallery/dermalFiller/dermalFillerBefore4.webp"
              }
            />
          </div>
          <div className="w-[45%] h-fit">
            <BeforeAfterImage
              afterImage={
                "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/gallery/dermalFiller/dermalFillerAfter5.webp"
              }
              beforeImage={
                "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/gallery/dermalFiller/dermalFillerBefore5.webp"
              }
            />
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Item 5 */}
      <AccordionItem value="5" className="border-0 mt-2">
        <AccordionTrigger className="bg-[#a1a686] cursor-pointer h-14 text-white relative group px-6 [&>svg]:hidden">
          {/* + / - icon left */}
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-bold transition-all duration-200 group-data-[state=open]:opacity-0">
            +
          </span>
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-bold opacity-0 transition-all duration-200 group-data-[state=open]:opacity-100">
            −
          </span>

          {/* centered text */}
          <span className="absolute top-1/2 left-1/2 -translate-1/2 font-medium">
            فیلر زیر چشم
          </span>
        </AccordionTrigger>

        <AccordionContent className=" text-[#71815e] flex justify-between items-center p-6 flex-wrap gap-y-4">
          <div className="w-[45%] h-fit">
            <BeforeAfterImage
              afterImage={
                "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/gallery/eyefiller/eyefillerAfter1.webp"
              }
              beforeImage={
                "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/gallery/eyefiller/eyefillerBefore1.webp"
              }
            />
          </div>
          <div className="w-[45%] h-fit">
            <BeforeAfterImage
              afterImage={
                "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/gallery/eyefiller/eyefillerAfter2.webp"
              }
              beforeImage={
                "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/gallery/eyefiller/eyefillerBefore2.webp"
              }
            />
          </div>

          <div className="w-[45%] h-fit">
            <BeforeAfterImage
              afterImage={
                "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/gallery/eyefiller/eyefillerAfter3.webp"
              }
              beforeImage={
                "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/gallery/eyefiller/eyefillerBefore3.webp"
              }
            />
          </div>
          <div className="w-[45%] h-fit">
            <BeforeAfterImage
              afterImage={
                "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/gallery/eyefiller/eyefillerAfter4.webp"
              }
              beforeImage={
                "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/gallery/eyefiller/eyefillerBefore4.webp"
              }
            />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
