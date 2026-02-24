"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";

export default function MenubarBtn() {
  const lines = [1, 2, 3];

  const [isOpen, setIsOpen] = useState(false);

  const menuMobileWrapper = useRef();

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className={`w-full h-full bg-[#ffffff3b] backdrop-blur-sm fixed right-0 top-0 z-50 
        transition-transform duration-700 ease-in-out  ${isOpen ? "translate-x-0" : "translate-x-full"} `}
      >
        <div
          className={`w-[140px] h-screen bg-white  relative
     `}
        >
          {/* bg menu */}
          <div className="w-full h-full absolute top-0 left-0">
            <Image
              objectFit="cover"
              fill
              src="/images/bgMenu.png"
              alt="background menu"
            />
          </div>

          <div className="w-full h-full relative px-5 py-[30px]">
            {/* close image */}
            <div
              onClick={closeMenu}
              className="absolute left-4 top-4 cursor-pointer"
            >
              <div className="relative w-5 h-5 px-1.5 py-[1px]">
                <Image src="/icons/close.png" alt="close icon" fill />
              </div>
            </div>
            {/* end close image */}

            {/* links */}
            <div>
              <nav>
                <ul className="flex flex-col items-start  pb-5 pt-20">
                  <li className="w-fit h-fit cursor-pointer  pb-[15px] group">
                    <a href="#" className="group-hover:opacity-60 duration-500">
                      صفحه اصلی
                    </a>
                  </li>
                  <li className="w-fit h-fit cursor-pointer  pb-[15px] group">
                    <a href="#" className="group-hover:opacity-60 duration-500">
                      درباره ما
                    </a>
                  </li>
                  <li className="w-fit h-fit cursor-pointer  pb-[15px] group">
                    <a href="#" className="duration-500">
                      خدمات ما
                    </a>
                  </li>
                  <li className="w-fit h-fit cursor-pointer  pb-[15px] group">
                    <a href="#" className="duration-500">
                      گالری
                    </a>
                  </li>
                  <li className="w-fit h-fit cursor-pointer  pb-[15px] group">
                    <a href="#" className="duration-500">
                      وبلاگ
                    </a>
                  </li>
                </ul>
                {/* follow us */}
                <div className="w-fit border-t border-t-black mt-2.5 pt-[15px]">
                  <p className="mb-5 pt-2.5">ما را دنبال کنید</p>
                  {/* logos */}
                  <ul className="flex gap-4">
                    {/* facebook */}
                    <li>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 11.675 21.798"
                        >
                          <path
                            id="Icon_awesome-facebook-f"
                            data-name="Icon awesome-facebook-f"
                            d="M12.519,12.261l.605-3.945H9.339V5.756a1.972,1.972,0,0,1,2.224-2.131h1.721V.267A20.985,20.985,0,0,0,10.229,0C7.112,0,5.075,1.889,5.075,5.31V8.316H1.609v3.945H5.075V21.8H9.339V12.261Z"
                            transform="translate(-1.609)"
                            fill="#71815e"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    {/* instagram */}
                    <li>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20.665"
                          height="20.665"
                          viewBox="0 0 20.665 20.665"
                        >
                          <g
                            id="Icon_feather-instagram"
                            data-name="Icon feather-instagram"
                            transform="translate(1.25 1.25)"
                          >
                            <path
                              id="Path_2"
                              data-name="Path 2"
                              d="M7.541,3h9.082a4.541,4.541,0,0,1,4.541,4.541v9.082a4.541,4.541,0,0,1-4.541,4.541H7.541A4.541,4.541,0,0,1,3,16.624V7.541A4.541,4.541,0,0,1,7.541,3Z"
                              transform="translate(-3 -3)"
                              fill="none"
                              stroke="#71815e"
                              strokeLinecap="round" // ← تغییر به camelCase
                              strokeLinejoin="round" // ← تغییر
                              strokeWidth="2.5" // ← تغییر
                            />
                            <path
                              id="Path_3"
                              data-name="Path 3"
                              d="M19.291,15.035a3.633,3.633,0,1,1-3.061-3.061,3.633,3.633,0,0,1,3.061,3.061Z"
                              transform="translate(-6.576 -6.525)"
                              fill="none"
                              stroke="#71815e"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2.5"
                            />
                            <path
                              id="Path_4"
                              data-name="Path 4"
                              d="M26.25,9.75h0"
                              transform="translate(-12.172 -5.663)"
                              fill="none"
                              stroke="#71815e"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2.5"
                            />
                          </g>
                        </svg>
                      </a>
                    </li>{" "}
                    {/* facebook */}
                    <li>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21.695"
                          height="21.798"
                          viewBox="0 0 21.695 21.798"
                        >
                          <g
                            id="Group_463"
                            data-name="Group 463"
                            transform="translate(1793.793 -4136.174)"
                          >
                            <path
                              id="Path_53"
                              data-name="Path 53"
                              d="M-1788.074,4156.471l-5.719,1.5,1.53-5.591a10.665,10.665,0,0,1-1.212-7.585,10.506,10.506,0,0,1,4.107-6.458,10.776,10.776,0,0,1,13.948.847,10.8,10.8,0,0,1,1.425,13.907A10.811,10.811,0,0,1-1788.074,4156.471Zm.266-1.956a9,9,0,0,0,12.072-2.134,8.952,8.952,0,0,0-.78-11.706,8.963,8.963,0,0,0-11.57-1.016,8.732,8.732,0,0,0-3.518,5.128,8.921,8.921,0,0,0,1.309,7.308l-.9,3.307Z"
                              fill="#71815e"
                            ></path>
                            <path
                              id="Path_54"
                              data-name="Path 54"
                              d="M-1634.234,4305.562a.683.683,0,0,0,.073,0c.446-.068.68.154.833.553.257.671.546,1.33.822,1.994a.427.427,0,0,1-.023.427c-.221.31-.442.621-.684.914-.189.229-.219.318-.066.578a7.352,7.352,0,0,0,3.753,3.208.353.353,0,0,0,.462-.106c.286-.341.569-.685.841-1.037.177-.229.281-.288.554-.184.313.121.617.267.921.41.428.2.85.419,1.28.618a.444.444,0,0,1,.281.458,2.1,2.1,0,0,1-1.131,1.949,3.066,3.066,0,0,1-2.3.306,10.1,10.1,0,0,1-2.676-1.072,10.76,10.76,0,0,1-2.536-2.1,12.962,12.962,0,0,1-1.692-2.257,3.852,3.852,0,0,1-.567-2.77,3.09,3.09,0,0,1,.951-1.63A1.067,1.067,0,0,1-1634.234,4305.562Z"
                              transform="translate(-152.23 -163.568)"
                              fill="#71815e"
                            ></path>
                          </g>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* menu bar btn */}
      <button className="flex flex-col w-10 cursor-pointer" onClick={menuOpen}>
        {lines.map((val, index) => (
          <span
            key={index}
            className={`h-1 mb-[7px] rounded-3xl bgBrand ${index < 2 ? "animate-line" : ""}`}
            style={index < 2 ? { animationDelay: `${index * 0.4}s` } : {}}
          />
        ))}
      </button>
    </div>
  );
}
