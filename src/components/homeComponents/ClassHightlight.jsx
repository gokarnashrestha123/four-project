import React from "react";
import SectionContainer from "../SectionContainer"; 
import member from "../../assets/highlight/person.png"
import { BiLogoPhp } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";
import { SiMysql } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import { Si365Datascience } from "react-icons/si";
import { PiCodeSimpleBold } from "react-icons/pi";
import { CgIfDesign } from "react-icons/cg"; 
import image1 from "../../assets/highlight/firstImage.jpg"
import image2 from "../../assets/highlight/secondImage.jpg";
import image3 from "../../assets/highlight/seventhImage.jpg";
import image4 from "../../assets/highlight/fourImage.jpg";
import image5 from "../../assets/highlight/fifthImage.jpg";
import image6 from "../../assets/highlight/sixthImage.jpg";
import image7 from "../../assets/highlight/seventhImage.jpg";
import image8 from "../../assets/highlight/eighthImage.jpg";


const ClassHightlight = () => {

  const data = [
    {
      id: 1,
      image: image1,
      icon: <BiLogoPhp />,
      subIcon: [<VscVscode />, <SiMysql />, <SiPostman />],
      title: "PHP Programming Language",
      rating:"9.5(45)",
      pepple: 55,
      view: 567,
      photo: member,
      name: "Gokarna Shrestha",
      post: "Wed Developer",
    },
    {
      id: 2,
      image: image2,
      icon: <TbBrandGolang />,
      subIcon: [<VscVscode />, <SiMysql />, <SiPostman />],
      title: "Golang Programming Language",
      rating:"9.5(45)",
      pepple: 55,
      view: 567,
      photo: member,
      name: "Gokarna Shrestha",
      post: "Wed Developer",
    },
    {
      id: 3,
      image: image3,
      icon: <Si365Datascience />,
      subIcon: [<VscVscode />, <SiMysql />, <SiPostman />],
      title: "DataScience Programming Language",
      rating:"9.5(45)",
      pepple: 55,
      view: 567,
      photo: member,
      name: "Gokarna Shrestha",
      post: "Wed Developer",
    },
    {
      id: 4,
      image: image4,
      icon: <PiCodeSimpleBold />,
      subIcon: [<VscVscode />, <SiMysql />, <SiPostman />],
      title: "Developer Programming Language",
      rating:"9.5(45)",
      pepple: 55,
      view: 567,
      photo: member,
      name: "Gokarna Shrestha",
      post: "Wed Developer",
    },
    {
      id: 5,
      image: image5,
      icon: <CgIfDesign />,
      subIcon: [<VscVscode />, <SiMysql />, <SiPostman />],
      title: "Design Programming Language",
      rating:"9.5(45)",
      pepple: 55,
      view: 567,
      photo: member,
      name: "Gokarna Shrestha",
      post: "Wed Developer",
    },
    {
      id: 6,
      image: image6,
      icon: <TbBrandGolang />,
      subIcon: [<VscVscode />, <SiMysql />, <SiPostman />],
      title: "Golang Programming Language",
      rating:"9.5(45)",
      pepple: 55,
      view: 567,
      photo: member,
      name: "Gokarna Shrestha",
      post: "Wed Developer",
    },
    {
      id: 7,
      image: image7,
      icon: <TbBrandGolang />,
      subIcon: [<VscVscode />, <SiMysql />, <SiPostman />],
      title: "Golang Programming Language",
      rating:"9.5(45)",
      pepple: 55,
      view: 567,
      photo: member,
      name: "Gokarna Shrestha",
      post: "Wed Developer",
    },
    {
      id: 8,
      image: image8,
      icon: <TbBrandGolang />,
      subIcon: [<VscVscode />, <SiMysql />, <SiPostman />],
      title: "Golang Programming Language",
      rating:"9.5(45)",
      pepple: 55,
      view: 567,
      photo: member,
      name: "Gokarna Shrestha",
      post: "Wed Developer",
    },
  ];
  return (
    <div className="bg-[#C5BFED] py-12">
      <SectionContainer className="text-[#322B5E]">
        {/* TOP SIDE */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <h1 className="font-normal text-3xl sm:text-4xl md:text-5xl leading-snug max-w-full md:max-w-150">
            Best Composition for your Skills 🫵
          </h1>
          <button className="w-max py-3 px-6 bg-[#9F95E1] rounded-full text-white font-semibold">
            See More
          </button>
        </div>

        {/* BOTTOM SIDE */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data.map((item, index) => (
            <div
              key={item.id}
              className={`bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col ${index >= 4 ? "hidden sm:flex" : "flex"}}`}
            >
              {/* IMAGE */}
              <div className="relative h-48 w-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-2xl p-1"
                />

                {/* OVERLAY */}
                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
                  {/* Main Icon */}
                  <div className="bg-white px-2 py-1 rounded-full shadow flex items-center gap-1">
                    {item.icon} {item.title?.split(" ")[0]}
                  </div>

                  {/* Sub Icons */}
                  <div className="flex gap-2 text-lg bg-white px-2 py-1 rounded-full shadow">
                    {item.subIcon.map((icon, idx) => (
                      <span key={idx}>{icon}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-4 flex flex-col gap-3">
                <h3 className="font-semibold text-lg">{item.title}</h3>

                {/* STATS */}
                <div className="flex justify-between text-sm text-gray-500  ">
                  <span className="pr-5 border-r">⭐ {item.rating}</span>
                  <span className="pr-5 border-r">👥 {item.pepple}</span>
                  <span className="pr-5 border-r">👁 {item.view}</span>
                </div>

                {/* INSTRUCTOR */}
                <div className="flex items-center gap-3 mt-2">
                  <img
                    src={item.photo}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.post}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
};

export default ClassHightlight;
