"use client";
import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
} from "react-compare-slider";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function BeforeAfterImage({
  beforeImage = "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/gallery/botox/botoxAfter1.webp",
  afterImage = "https://raw.githubusercontent.com/parsa-farshah/drMarjanAssets/refs/heads/main/images/gallery/botox/botoxBefore1.webp",
}) {
  return (
    <div className="w-full max-w-sm mx-2 overflow-hidden rounded-xl border border-gray-300">
      <ReactCompareSlider
        itemOne={
          <img
            src={beforeImage}
            alt="Before"
            className="w-full h-auto object-cover rounded-xl"
          />
        }
        itemTwo={
          <img
            src={afterImage}
            alt="After"
            className="w-full h-auto object-cover rounded-xl"
          />
        }
        handle={
          <ReactCompareSliderHandle
            position={45} // نقطه شروع handle روی 45%
            button={
              <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-between px-2">
                <FiChevronRight className="text-black text-xl" />
                <FiChevronLeft className="text-black text-xl" />
              </div>
            }
          />
        }
      />
    </div>
  );
}
