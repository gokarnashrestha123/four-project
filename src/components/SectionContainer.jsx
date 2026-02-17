import React from "react";

const SectionContainer = ({ children, className = "" }) => {
  return (
    <section
      className={`w-full mx-auto px-10 md:px-15 2xl:px-24  max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-7xl ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionContainer;
