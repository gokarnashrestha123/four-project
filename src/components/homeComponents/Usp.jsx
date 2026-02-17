import React from "react";
import SectionContainer from "../SectionContainer";
import image1 from "../../assets/usp/image1.png";
import image2 from "../../assets/usp/image2.png";
import { MdOutlinePlayCircleFilled } from "react-icons/md";
import { SlGraduation } from "react-icons/sl";
import { MdWorkHistory } from "react-icons/md";
import { BiSolidSelectMultiple } from "react-icons/bi";

const Usp = () => {
  const data = [
    {
      logo: <SlGraduation />,
      title: "Quality Graduates",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      logo: <MdWorkHistory />,
      title: "Get a job bank",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      logo: <SlGraduation />,
      title: "Quality Graduates",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      logo: <BiSolidSelectMultiple />,
      title: "Multiple Course at the same time",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  return (
    <SectionContainer className="flex flex-col lg:flex-row py-10 md:py-20 h-auto lg:h-screen">
      {/* LEFT SIDE */}
      <div className="relative lg:w-1/2 w-full flex flex-col justify-center mb-10 lg:mb-0 px-4 lg:px-0">
        <div className="max-w-full lg:max-w-lg text-[#322B5E] flex flex-col gap-4">
          <h2 className="font-normal text-3xl sm:text-4xl md:text-5xl lg:text-5xl leading-snug md:leading-normal lg:leading-tight">
            We are the right reasons for your future
          </h2>
          <p className="font-normal text-sm sm:text-base md:text-lg leading-5 md:leading-6">
            You can determine various up to date skills based on the needs of
            the era with professional mentors that we have curated strictly
          </p>
        </div>

        <div className="relative mt-10 flex">
          {/* Shape background */}
          <div className="absolute inset-0 max-w-120 shape"></div>

          {/* Images */}
          <img
            src={image1}
            className="relative w-2/3 sm:w-1/2 md:w-2/3 lg:w-2/3 object-cover z-10 "
          />

          <img
            src={image2}
            className="absolute left-[18%] w-2/3 sm:w-1/2 md:w-2/3 object-cover z-20"
          />
        </div>

        <div className="mt-6 flex justify-center lg:justify-start gap-3 font-semibold text-base sm:text-lg md:text-lg text-white px-4 py-2 rounded-full bg-[#9F95E1] items-center w-max">
          <button>Watch Video Guide</button>
          <MdOutlinePlayCircleFilled className="text-xl sm:text-2xl" />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="lg:w-1/2 w-full px-4 lg:px-0 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:pt-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col gap-4 hover:shadow-xl transition"
          >
            <div className="text-3xl sm:text-4xl text-[#9F95E1]">
              {item.logo}
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#322B5E]">
              {item.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Usp;
