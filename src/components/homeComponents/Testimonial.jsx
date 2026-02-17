import React from "react";
import SectionContainer from "../SectionContainer";
import image from "../../assets/highlight/testimonial.png";
import member from "../../assets/highlight/person.png";

const Testimonial = () => {
  const data = [
    {
      image: member,
      name: "Gokarna Shrestha",
      post: "Web Developer",
      description:
        "These are the best lesson videos I've come across so far on Figma, thank you for sharing and teaching.",
    },
    {
      image: member,
      name: "Gokarna Shrestha",
      post: "Web Developer",
      description:
        "These are the best lesson videos I've come across so far on Figma, thank you for sharing and teaching.",
    },
    {
      image: member,
      name: "Gokarna Shrestha",
      post: "Web Developer",
      description:
        "These are the best lesson videos I've come across so far on Figma, thank you for sharing and teaching.",
    },
    {
      image: member,
      name: "Gokarna Shrestha",
      post: "Web Developer",
      description:
        "These are the best lesson videos I've come across so far on Figma, thank you for sharing and teaching.",
    },
    {
      image: member,
      name: "Gokarna Shrestha",
      post: "Web Developer",
      description:
        "These are the best lesson videos I've come across so far on Figma, thank you for sharing and teaching.",
    },
    {
      image: member,
      name: "Gokarna Shrestha",
      post: "Web Developer",
      description:
        "These are the best lesson videos I've come across so far on Figma, thank you for sharing and teaching.",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Right Vertical Background SVG */}
      <svg
        viewBox="0 0 245 578"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="
          absolute
          right-0
          top-[-4%]
          lg:top-[-20%]
          -z-30
          w-32
          sm:w-40
          md:w-48
          lg:w-60
        "
      >
        <path
          d="M264.247 455.107C264.25 467.276 254.386 477.142 242.217 477.142C230.05 477.142 220.187 467.279 220.187 455.112L220.187 419.66C220.187 407.504 210.333 397.65 198.178 397.65C186.022 397.65 176.168 387.796 176.168 375.641L176.168 340.236C176.168 328.068 166.304 318.204 154.136 318.204C141.968 318.204 132.103 308.34 132.103 296.171L132.103 260.767C132.103 248.612 122.249 238.757 110.094 238.757C97.9381 238.757 88.0841 228.903 88.0841 216.748L88.0841 181.298C88.0841 169.13 78.2198 159.266 66.0517 159.266C53.8835 159.266 44.0192 149.401 44.0192 137.233L44.0192 101.829C44.0192 89.6733 34.1652 79.8192 22.0096 79.8192C9.85406 79.8192 1.27193e-05 69.9652 1.2188e-05 57.8096L1.0723e-05 24.2946C1.01442e-05 11.0526 10.7252 0.312683 23.9673 0.294646L240.108 -1.04955e-05C253.373 -0.018108 264.138 10.7287 264.141 23.9941L264.247 455.107Z"
          fill="#C5BFED"
        />
      </svg>

      <SectionContainer className="py-16 relative min-h-screen text-[#322B5E]">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* LEFT SIDE IMAGE SHAPE */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start relative">
            <svg
              viewBox="0 0 690 759"
              className="w-70 sm:w-80 md:w-96 lg:w-120"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <mask id="maskShape">
                  <path
                    d="M47.0837 100.739C83.8733 38.3157 150.93 0 223.388 0H293.528C456.945 0 595.337 120.503 617.814 282.367L637.226 422.161C642.353 459.082 639.766 496.665 629.63 532.536C598.962 641.06 503.976 719.021 391.556 727.939L356.78 730.698C166.587 745.785 5.61209 591.984 12.0194 401.301L18.8584 197.772C20.0074 163.577 29.7117 130.216 47.0837 100.739Z"
                    fill="white"
                  />
                </mask>
              </defs>

              {/* Blue Background Shape */}
              <path
                d="M47.0837 100.739C83.8733 38.3157 150.93 0 223.388 0H293.528C456.945 0 595.337 120.503 617.814 282.367L637.226 422.161C642.353 459.082 639.766 496.665 629.63 532.536C598.962 641.06 503.976 719.021 391.556 727.939L356.78 730.698C166.587 745.785 5.61209 591.984 12.0194 401.301L18.8584 197.772C20.0074 163.577 29.7117 130.216 47.0837 100.739Z"
                fill="#ADB9E5"
              />

              {/* Decorative stroke INSIDE mask */}
              <path
                d="M-59.7769 116.993C-59.7769 116.993 7.67835 47.4894 66.0572 33.3277C143.616 14.5133 199.336 123.216 194.331 177.026C189.325 230.837 136.766 235.842 102.979 230.837C69.1908 225.831 43.5372 184.349 55.4255 137.607C67.3137 90.8661 146.883 3.00699 257.847 11.9071C368.812 20.8073 422.38 81.2907 379.122 143.437C363.28 166.196 342.647 177.753 321.096 184.349C299.546 190.944 254.953 179.044 258.584 133.769C262.216 88.4934 355.106 12.6259 434.52 26.0776C505.646 38.1253 572.417 92.3372 567.947 148.063C563.478 203.79 510.824 199.566 499.51 198.659C488.196 197.751 457.649 190.917 454.839 149.51C452.029 108.102 483.897 -21.664 654.072 13.4558"
                stroke="#E7FFB9"
                strokeWidth="15"
                strokeLinecap="round"
                fill="none"
                mask="url(#maskShape)" 
              />

              {/* Image inside mask */}
              <image
                href={image}
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid slice"
                mask="url(#maskShape)"
              />
            </svg>
          </div>
          {/* RIGHT SIDE CONTENT */}
          <div className="w-full lg:w-1/2 px-4">
            <h2 className="font-normal text-3xl sm:text-4xl leading-tight mb-8 text-center lg:text-left">
              What the different we have?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="bg-white shadow-xl rounded-2xl p-6 flex flex-col gap-4"
                >
                  {/* Profile */}
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-sm">{item.name}</h4>
                      <p className="text-xs text-gray-500">{item.post}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs leading-relaxed text-gray-600">
                    "{item.description}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Testimonial;
