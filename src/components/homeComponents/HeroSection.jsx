import React from "react";
import SectionContainer from "../SectionContainer";
import btn from "../../assets/btn.png";
import member1 from "../../assets/heroImage/member1.png";
import member2 from "../../assets/heroImage/member2.png";
import member3 from "../../assets/heroImage/member3.png";

import { SiAdobe } from "react-icons/si";
import { SiStripe } from "react-icons/si";
import { SiShopify } from "react-icons/si";
import { SiClickup } from "react-icons/si";
import { SiMailchimp } from "react-icons/si";
import { IoMdHappy } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import image1 from "../../assets/heroImage/image1.png";
import image2 from "../../assets/heroImage/image2.png";
import image3 from "../../assets/heroImage/image3.png";
import image4 from "../../assets/heroImage/image4.png";
import image5 from "../../assets/heroImage/image5.png";
import Navbar from "../Navbar";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-[#69609F] overflow-hidden">
      <Navbar />
      <SectionContainer className="flex flex-col-reverse md:flex-row items-center justify-between text-white  py-20">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-6 md:gap-10 w-full md:w-1/2 text-center md:text-left">
          <div className="space-y-4">
            <h1 className="font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug">
              Course Platform with Great Vision for Everyone!
            </h1>

            <p className="text-base sm:text-lg md:text-xl">
              Update your knowledge with various modern skills that are intended
              for all ages
            </p>

            <div className="border border-[#9F95E1] rounded-full py-3 px-6 bg-[#9F95E1] flex items-center gap-3 w-max mx-auto md:mx-0 hover:scale-105 transition">
              <button className="text-sm sm:text-base">
                Personalized your Skill
              </button>
              <img src={btn} alt="" className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
          </div>

          {/* Trusted Section */}
          <div className="space-y-4">
            <h3 className="text-sm uppercase tracking-wider">
              Trusted and used by
            </h3>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <SiAdobe
                size={30}
                className="p-1 bg-red-500 text-white rounded-md icon"
              />
              <SiStripe
                size={28}
                className="p-1 bg-[#6772E5] text-white rounded-md icon"
              />
              <SiShopify
                size={32}
                className="p-1 bg-[#95BF46] text-white rounded-md  icon"
              />
              <SiClickup
                size={32}
                className="p-1 bg-[#1B1B1B] text-white rounded-md icon"
              />
              <SiMailchimp
                size={32}
                className="p-1 bg-[#FFE01B] text-black rounded-md icon"
              />
            </div>

            <div className="inset-angle rounded-2xl px-4 py-2 text-sm bg-white/10 backdrop-blur-md text-center md:text-left">
              USING “FIRSTTIME” CODE WHEN YOU CHECKOUT.
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 flex  justify-center md:justify-end relative">
          <div className="w-[70%] sm:w-[70%] md:w-[99%] max-w-110">
            <svg
              viewBox="0 0 650 700"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
              className=""
            >
              <defs>
                <clipPath id="eggClip">
                  <path d="M6.99483 172.604C28.6343 71.9128 117.644 0 220.634 0H274.848C412.116 0 529.97 97.6463 555.49 232.521L600.575 470.804C610.215 521.753 598.011 574.409 566.94 615.921C532.041 662.549 477.206 690 418.965 690H345.991C175.007 690 32.2332 559.621 16.7488 389.339L3.01483 238.306C1.01647 216.33 2.35836 194.178 6.99483 172.604Z" />
                </clipPath>
              </defs>

              <path
                d="M6.99483 172.604C28.6343 71.9128 117.644 0 220.634 0H274.848C412.116 0 529.97 97.6463 555.49 232.521L600.575 470.804C610.215 521.753 598.011 574.409 566.94 615.921C532.041 662.549 477.206 690 418.965 690H345.991C175.007 690 32.2332 559.621 16.7488 389.339L3.01483 238.306C1.01647 216.33 2.35836 194.178 6.99483 172.604Z"
                fill="#9F95E1"
              />

              <image
                href={member3}
                x="150"
                width="80%"
                height="80%"
                preserveAspectRatio="xMidYMid slice"
                clipPath="url(#eggClip)"
                className="grayscale"
              />
              <image
                href={member2}
                x="-180"
                y="160"
                width="80%"
                height="80%"
                preserveAspectRatio="xMidYMid slice"
                clipPath="url(#eggClip)"
                className="grayscale"
              />
              <image
                href={member1}
                x="200"
                y="200"
                width="80%"
                height="80%"
                preserveAspectRatio="xMidYMid slice"
                clipPath="url(#eggClip)"
                className="grayscale"
              />
            </svg>
          </div>
          {/* first box */}
          <div className="absolute  max-w-89 bg-white text-[#322B5E] flex items-center gap-3 p-1 md:p-2 lg:p-3 rotate-[-4deg] rounded-2xl left-[2%] lg:left-[5%] top-[5%] sm:top-[11%] md:top-[10%] ">
            <IoMdHappy size={20} className="sm:size-6 md:size-6.5" />

            <h2 className="font-bold text-xs sm:text-lg lg:text-xl leading-6 sm:leading-7 md:leading-8">
              Great Class for everyone!
            </h2>
          </div>

          {/* second box */}
          <div
            className="
    absolute top-[50%] sm:top-[55%] md:top-[55%] left-[0%] sm:left-[0%] md:left-[0%] w-[90%] sm:w-auto max-w-75
 bg-white py-1 md:py-3 px-1 md:px-4  flex gap-2 rounded-2xl rotate-[1.5deg] "
          >
            <div className="flex gap-3 sm:gap-4">
              <FaStar
                className="w-7 h-7 sm:w-8 sm:h-8 md:w-12 md:h-12 bg-[#322B5E] rounded-full"
                color="#9F95E1"
              />

              <div className="flex flex-col gap-1">
                <h1 className="font-semibold text-xs sm:text-lg md:text-xl leading-6 sm:leading-7 md:leading-8 text-black">
                  1500+ Student
                </h1>

                <div className="flex relative mt-1">
                  <img
                    src={image1}
                    alt=""
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#E4E771] hidden lg:block"
                  />
                  <img
                    src={image2}
                    alt=""
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#B0BFD3] absolute left-[18%]  hidden lg:block"
                  />
                  <img
                    src={image3}
                    alt=""
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FE4C1B] absolute left-[36%]  hidden lg:block"
                  />
                  <img
                    src={image4}
                    alt=""
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FFE3E8] absolute left-[54%]  hidden lg:block"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* third cart */}
          <div className="absolute top-[75%] sm:top-[70%] md:top-[80%] lg:top-[75%] left-[20%] md:left-[50%] lg:left-[50%] w-[85%] sm:w-auto max-w-75 flex flex-col rotate-[1.5deg]">
            <div className="bg-white rounded-2xl lg:rounded-b-none rounded-t-2xl">
              <div className="flex gap-2 py-1 px-1 md:px-4">
                <img
                  src={image5}
                  alt=""
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-[#C5BFED]"
                />

                <div className="text-[#484F60] flex flex-col gap-1">
                  <h1 className="font-semibold text-xs sm:text-sm">
                    Prof Andrew Way AM RN BSc
                  </h1>
                  <p className="font-normal text-[10px] sm:text-xs">
                    (Hons) MBA FAICD
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#322B5E] rounded-b-2xl hidden lg:block">
              <p className="py-1 px-4 font-semibold text-sm sm:text-lg md:text-xl leading-5 sm:leading-6 md:leading-8">
                Popular Skills for your futures!
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Bottom Wave */}
      <svg
        className="absolute bottom-0 left-0"
        viewBox="0 0 1440 169"
        preserveAspectRatio="none"
      >
        <path
          d="M29.7061 234.288C-1.18227 220.173 -14.7753 183.687 -0.652101 152.802C13.4687 121.922 49.9488 108.336 80.8285 122.457L173.952 165.041C204.804 179.149 241.25 165.575 255.358 134.724C269.466 103.872 305.913 90.2988 336.764 104.407L429.764 146.934C460.648 161.056 497.132 147.469 511.255 116.585C525.377 85.702 561.862 72.1145 592.745 86.237L685.745 128.764C716.596 142.872 753.043 129.299 767.151 98.4471C781.259 67.5956 817.705 54.0222 848.557 68.1301L947.208 113.242C975.593 126.222 1009.18 115.048 1024.14 87.6512C1038.27 61.764 1069.24 50.1438 1096.91 60.346L1198.06 97.6416C1229.35 109.174 1264.23 94.6579 1278.09 64.3387C1292.74 32.3195 1330.56 18.2323 1362.58 32.8742L1436.85 66.8359C1476.99 85.192 1494.68 132.591 1476.38 172.759L1237.08 697.989C1218.75 738.228 1171.25 755.962 1131.03 737.582L29.7061 234.288Z"
          fill="#E2DFF6"
        />
      </svg>
    </section>
  );
};

export default HeroSection;
