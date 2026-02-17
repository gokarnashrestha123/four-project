import React from "react";
import BackgroundSVGs from "./BackgroundSvg";
import SectionContainer from "../SectionContainer";
import member from "../../assets/category/member.png";
import member1 from "../../assets/category/member1.png";
import member2 from "../../assets/category/member2.png";
import member3 from "../../assets/category/member3.png";

const Category = () => {
  const data = [
    {
      title: "Programming",
      description:
        "Web3, Laravel, Go Lang, Node JS, JavaScript, Ruby, PHP, Python",
      image: member,
    },
    {
      title: "Creative Design",
      description: "Graphic Design, UI/UX, Logo Designers, Brand Designers",
      image: member1,
    },
    {
      title: "Digital Marketing",
      description: "Digital Ads, SEO, Copywriting",
      image: member2,
    },
    {
      title: "Data Scientist",
      description: "Data Visualization, Excel, Dashboarding",
      image: member3,
    },
  ];

  const colors = [
    "bg-blue-200",
    "bg-green-200",
    "bg-yellow-200",
    "bg-purple-200",
  ];
  

  return (
    <div className="relative min-h-screen py-15 md:py-20">
      <BackgroundSVGs />

      <SectionContainer>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-7 lg:gap-8 relative z-10">
          {data.map((item, index) => {
            // Random vertical offset for each card (can be positive or negative)
            const offset = index % 2 === 0 ? -30 : 30; // example in px, adjust as needed
            return (
              <div
                key={index}
                className={`relative shadow-lg rounded-full overflow-hidden py-20 ${colors[index % colors.length]} text-black flex flex-col items-center
          ${index >= 2 ? "hidden sm:flex" : "flex"}
          max-w-67 h-137.5 md:w-87.5 md:h-150 lg:w-112.5 lg:h-137.5
        `}
                style={{
                  height: "550px",
                  width: "auto",
                  transform: `translateY(${offset}px)`, // vertical offset
                }}
              >
                {/* Optional Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-black/40"></div>

                {/* Main Text */}
                <div className="relative z-10 flex flex-col h-full px-4 text-center">
                  <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                  <p className="text-sm">{item.description}</p>
                </div>

                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute bottom-0 left-0 w-full h-96 object-cover z-10 grayscale"
                />

                {/* Big Overlay Text */}
                <h2 className="absolute inset-0 flex items-center justify-center text-[#232325] text-center px-4 text-7xl font-bold opacity-20 leading-snug wrap-break-word">
                  {item.title}
                </h2>
              </div>
            );
          })}
        </div>
      </SectionContainer>
    </div>
  );
};

export default Category;
