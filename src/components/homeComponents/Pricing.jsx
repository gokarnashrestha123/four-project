import React from "react";
import SectionContainer from "../SectionContainer";

const Pricing = () => {
  const data = [
    {
      plan: "Personal Plan",
      title: "Suitable for you who start alone",
      price: 45,
      description: [
        "High Quality Videos Learning",
        "Top Grade Mentor",
        "Interactive Learning Session",
        "Unlimited Course",
        "Only for 1 User",
        "FREE Mentoring",
      ],
    },
    {
      plan: "Team Plan",
      title: "Best for small teams",
      price: 75,
      description: [
        "High Quality Videos Learning",
        "Top Grade Mentor",
        "Interactive Learning Session",
        "Unlimited Course",
        "Up to 5 Users",
        "Priority Mentoring",
      ],
    },
    {
      plan: "Company Plan",
      title: "Perfect for big companies",
      price: 120,
      description: [
        "High Quality Videos Learning",
        "Top Grade Mentor",
        "Interactive Learning Session",
        "Unlimited Course",
        "Unlimited Users",
        "Dedicated Support",
      ],
    },
  ];

  return (
    <SectionContainer className=" lg:h-screen py-10">
      {/* Heading */}
      <div className=" mb-16">
        <h1 className="text-5xl font-semibold text-[#322B5E]">
          A Simple Plan for Everyone
        </h1>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((item, index) => (
          <div
            key={index}
            className="rounded-4xl p-8 shadow-lg transition duration-300 hover:scale-105 bg-white"
          >
            {/* Plan Name */}
            <h3 className="text-3xl font-normal mb-2 ">{item.plan}</h3>
            <p className="text-sm mb-6 text-[#484F60]">{item.title}</p>

            {/* Price */}
            <div className="mb-6">
              <span className="text-4xl font-normal">${item.price}</span>
              <span className="text-sm text-[#484F60]"> per month</span>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {item.description.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  ✅ <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <button
              className={`w-full py-3 rounded-full font-semibold transition duration-300 border
              ${
                index === 1
                  ? "bg-white text-[#9F95E1] hover:bg-gray-200"
                  : "bg-[#9F95E1] text-white hover:bg-[#1f1847]"
              }`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Pricing;
