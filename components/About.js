import React, { useEffect } from "react";

const About = () => {
  return (
    <div
      id="About"
      className="w-screen snap-center relative h-full p-4 font-roboto font-bold text-4xl sm:my-auto grid sm:text-7xl sm:p-4 md:text-7xl md:px-20 "
    >
      <div className="my-auto mx-auto relative   leading-tight  w-full lg:w-[1200px] ">
        About
        <p className="text-xl md:text-2xl">
          William Benarto is a front-end engineer with strong focus on
          interfaces and experiences.
        </p>
      </div>
    </div>
  );
};

export default About;
