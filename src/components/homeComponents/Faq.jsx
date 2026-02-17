import React, { useState } from "react";
import SectionContainer from "../SectionContainer";
import {
  IoIosArrowRoundDown,
  IoIosArrowRoundUp,
  IoIosCall,
} from "react-icons/io";
import image1 from "../../assets/faq/firstImage.png";
import image2 from "../../assets/faq/secondImage.png";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const data = [
    {
      question: "What kind of courses do you offer?",
      answer:
        "To enroll in a course, simply visit the course page on our website and click the enroll button.",
    },
    {
      question: "How do I enroll?",
      answer:
        "Click enroll button, create account, complete payment and start learning immediately.",
    },
    {
      question: "Do you provide certificates?",
      answer:
        "Yes, we provide certificates after successful course completion.",
    },
    {
      question: "Is there lifetime access?",
      answer: "Yes, once enrolled you will get lifetime access to the course.",
    },
    {
      question: "Can I get refund?",
      answer: "We provide 7 days refund policy if you're not satisfied.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#C5BFED] overflow-hidden relative ">
      {/* Small Vertical Decorative SVG */}
      <div className="absolute top-0 right-[0%]  z-0">
        <svg
          viewBox="0 0 245 478"
          xmlns="http://www.w3.org/2000/svg"
          className="w-50"
        >
          <path
            d="M264.247 455.107C264.25 467.276 254.386 477.142 242.217 477.142C230.05 477.142 220.187 467.279 220.187 455.112L220.187 419.66C220.187 407.504 210.333 397.65 198.178 397.65C186.022 397.65 176.168 387.796 176.168 375.641L176.168 340.236C176.168 328.068 166.304 318.204 154.136 318.204C141.968 318.204 132.103 308.34 132.103 296.171L132.103 260.767C132.103 248.612 122.249 238.757 110.094 238.757C97.9381 238.757 88.0841 228.903 88.0841 216.748L88.0841 181.298C88.0841 169.13 78.2198 159.266 66.0517 159.266C53.8835 159.266 44.0192 149.401 44.0192 137.233L44.0192 101.829C44.0192 89.6733 34.1652 79.8192 22.0096 79.8192C9.85406 79.8192 0 69.9652 0 57.8096L0 24.2946C0 11.0526 10.7252 0.312683 23.9673 0.294646L240.108 0C253.373 -0.018108 264.138 10.7287 264.141 23.9941L264.247 455.107Z"
            fill="#B2AAE7"
          />
        </svg>
      </div>
      <SectionContainer className="relative py-16">
        <div className="flex flex-col lg:flex-row justify-between gap-7 lg:gap-16">
          {/* LEFT SIDE */}
          <div className="max-w-2xl z-10">
            <h1 className="text-5xl font-semibold leading-tight text-[#322B5E] mb-12">
              Frequently Asked Questions
            </h1>

            <div className="space-y-6">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#F5F4FC] rounded-2xl shadow-md p-6 transition-all duration-300"
                >
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="text-lg font-medium text-[#080A0D]">
                      {item.question}
                    </h3>
                    {openIndex === index ? (
                      <IoIosArrowRoundUp size={28} />
                    ) : (
                      <IoIosArrowRoundDown size={28} />
                    )}
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-40 mt-4" : "max-h-0"}`}
                  >
                    <p className="text-[#484F60] font-normal text-lg leading-6">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}

              {/* Contact Button */}
              <div className="font-semibold text-lg leading-6 py-4 px-6 w-full text-white rounded-full bg-[#9F95E1] flex items-center justify-center gap-3 cursor-pointer">
                <button>Do you need help? Contact Support</button>
                <IoIosCall />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE BLOBS */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative overflow-hidden">
            <svg
              viewBox="0 0 597 711"
              className="w-[320px] sm:w-90 md:w-90 lg:w-120.5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <mask id="faqBlobMask">
                  <path
                    d="M16.3471 53.2426C73.1022 -29.0275 201.887 7.50076 301.752 11.5716C395.487 15.3926 504.047 4.11442 564.799 75.5996C623.922 145.168 581.329 247.363 579.717 338.647C578.156 427.015 608.54 521.741 555.669 592.565C497.59 670.365 398.839 710.598 301.752 710.996C204.309 711.396 96.2422 677.993 45.7418 594.657C-0.556481 518.255 80.9573 427.851 76.1142 338.647C70.6363 237.751 -41.0308 136.415 16.3471 53.2426Z"
                    fill="white"
                  />
                </mask>
              </defs>

              {/* Background Color */}
              <path
                d="M16.3471 53.2426C73.1022 -29.0275 201.887 7.50076 301.752 11.5716C395.487 15.3926 504.047 4.11442 564.799 75.5996C623.922 145.168 581.329 247.363 579.717 338.647C578.156 427.015 608.54 521.741 555.669 592.565C497.59 670.365 398.839 710.598 301.752 710.996C204.309 711.396 96.2422 677.993 45.7418 594.657C-0.556481 518.255 80.9573 427.851 76.1142 338.647C70.6363 237.751 -41.0308 136.415 16.3471 53.2426Z"
                fill="#EACAEE"
              />

              {/* Optional Decorative Stroke (inside mask) */}
              <path
                d="M-59.7769 116.993C-59.7769 116.993 7.67835 47.4894 66.0572 33.3277C143.616 14.5133 199.336 123.216 194.331 177.026C189.325 230.837 136.766 235.842 102.979 230.837C69.1908 225.831 43.5372 184.349 55.4255 137.607C67.3137 90.8661 146.883 3.00699 257.847 11.9071C368.812 20.8073 422.38 81.2907 379.122 143.437C363.28 166.196 342.647 177.753 321.096 184.349C299.546 190.944 254.953 179.044 258.584 133.769C262.216 88.4934 355.106 12.6259 434.52 26.0776C505.646 38.1253 572.417 92.3372 567.947 148.063C563.478 203.79 510.824 199.566 499.51 198.659C488.196 197.751 457.649 190.917 454.839 149.51C452.029 108.102 483.897 -21.664 654.072 13.4558"
                stroke="#E7FFB9"
                strokeWidth="12"
                strokeLinecap="round"
                fill="none"
                mask="url(#faqBlobMask)" // ensures stroke stays inside
              />

              {/* Back Image - masked */}
              <image
                href={image2}
                width="70%"
                height="70%"
                x="0%"
                y="30%"
                preserveAspectRatio="xMidYMid slice"
                mask="url(#faqBlobMask)"
                className="blur-[1px] grayscale"
              />

              {/* Front Image - masked */}
              <image
                href={image1}
                width="100%"
                height="100%"
                x="36%"
                y="1%"
                preserveAspectRatio="xMidYMid slice"
                mask="url(#faqBlobMask)"
                className="relative z-10 grayscale"
              />
            </svg>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Faq;
