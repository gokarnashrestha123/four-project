import React from "react";
import SectionContainer from "../SectionContainer";
import image1 from "../../assets/news/new1.jpg";
import image2 from "../../assets/news/new2.jpg";
import image3 from "../../assets/news/new3.jpg";
import image4 from "../../assets/news/new4.jpg";
import image5 from "../../assets/news/new5.jpg";

const NewsSection = () => {
  const data = [
    {
      image: image1,
      title: "5 Ways to Boost Your Learning Potential",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      image: image2,
      title: "5 Ways to Boost Your Learning Potential",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      image: image3,
      title: "5 Ways to Boost Your Learning Potential",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      image: image4,
      title: "5 Ways to Boost Your Learning Potential",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      image: image5,
      title: "5 Ways to Boost Your Learning Potential",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      image: image2,
      title: "5 Ways to Boost Your Learning Potential",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  return (
    <SectionContainer>
      <div className="py-16">
        {/* TOP SECTION */}
        <div className="max-w-175 mx-auto text-center text-[#322B5E] mb-12">
          <h1 className="text-4xl sm:text-5xl font-normal leading-tight mb-4">
            Interesting Insight from us
          </h1>

          <p className="text-lg font-normal leading-6">
            You can determine various up to date skills based on the needs of
            the era with professional mentors that we have curated strictly
          </p>
        </div>

        {/* CARDS CONTAINER */}
        <div className="overflow-hidden">
          {/* Show 4 cards on desktop */}
          <div className="flex gap-6 news-marquee">
            {[...data, ...data].map((item, index) => (
              <div
                key={index}
                className="
                  w-[85%]
                  sm:w-[45%]
                  lg:w-[23%]
                  bg-white
                  shadow-lg
                  rounded-xl
                  overflow-hidden
                  shrink-0
                "
              >
                {/* Image Top */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>

                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default NewsSection;
