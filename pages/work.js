import React, { useEffect } from "react";
import { gsap } from "gsap";

const work = () => {
  useEffect(() => {
    gsap.from(".job", {
      y: -100,
      opacity: 0,
      duration: 0.6,
      ease: "power2",
      stagger: 0.3,
    });
  }, []);
  return (
    <div className="h-full w-screen text-white bg-black font-roboto max-w-[1200px] mx-auto  ">
      <div className="absolute top-0 right-0 mr-10 mt-10 sm:mr-20 md:mr-24 text-2xl hover:cursor-pointer">
        <a
          href="/"
          className="text-[#13a8bf] hover:after:content-['Home.'] before:content-['WB.'] font-bold"
        ></a>
      </div>
      <div className=" text-base sm:text-xl px-10 md:px-20 pb-40 sm:max-w-[800px] text-left mx-auto ">
        <h1 className="my-10 text-2xl md:text-4xl font-bold ">Work </h1>
        <div className=" w-full grid grid-cols-8 py-2  gap-4 job">
          <div className="col-span-3 text-gray-400 ">
            <p>July 2022 - Now</p>
          </div>
          <div className="col-span-5">
            <p>Celeste Cake Shop</p>
            <p className="text-gray-400">eCommerce Engineer</p>
          </div>
        </div>
        <div className=" w-full grid grid-cols-8 py-2  gap-4 job">
          <div className="col-span-3 text-gray-400 ">
            <p>March 2022 - Sept 2022</p>
          </div>
          <div className="col-span-5">
            <p>Finca</p>
            <p className="text-gray-400">Frontend Engineer</p>
          </div>
        </div>
        <div className=" w-full grid grid-cols-8 py-2  gap-4 job">
          <div className="col-span-3 text-gray-400 ">
            <p>2021 </p>
          </div>
          <div className="col-span-5">
            <p>Jin Choi</p>
            <p className="text-gray-400">Web Developer</p>
          </div>
        </div>
        <div className=" w-full grid grid-cols-8 py-2  gap-4 job">
          <div className="col-span-3 text-gray-400 ">
            <p>2021 </p>
          </div>
          <div className="col-span-5">
            <p>Cookma.co</p>
            <p className="text-gray-400">Squarespace Consultant</p>
          </div>
        </div>
        <div className=" w-full grid grid-cols-8 py-2  gap-4 job">
          <div className="col-span-3 text-gray-400 ">
            <p>2021</p>
          </div>
          <div className="col-span-5">
            <p>Spotify Clone</p>
            <p className="text-gray-400">Frontend Project</p>
          </div>
        </div>
        <div className=" w-full grid grid-cols-8 py-2  gap-4 job">
          <div className="col-span-3 text-gray-400 ">
            <p>2020</p>
          </div>
          <div className="col-span-5">
            <p>Travelly App</p>
            <p className="text-gray-400">Frontend Project</p>
          </div>
        </div>
        <div className=" w-full grid grid-cols-8 py-2  gap-4 job">
          <div className="col-span-3 text-gray-400 ">
            <p>2020</p>
          </div>
          <div className="col-span-5">
            <p>Webe Sushi</p>
            <p className="text-gray-400">Homemakase</p>
          </div>
        </div>
        <div className=" w-full grid grid-cols-8 py-2  gap-4 job">
          <div className="col-span-3 text-gray-400 ">
            <p>2017 - 2020</p>
          </div>
          <div className="col-span-5">
            <p>Genji Sushi</p>
            <p className="text-gray-400">Regional Operations Manager</p>
          </div>
        </div>
        <div className=" w-full grid grid-cols-8 py-2  gap-4 job">
          <div className="col-span-3 text-gray-400 ">
            <p>2013 - 2017</p>
          </div>
          <div className="col-span-5">
            <p>Genji Sushi</p>
            <p className="text-gray-400">District Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default work;
