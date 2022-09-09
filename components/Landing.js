import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Landing = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div
      onClick={() => setMenu(!menu)}
      id="landing"
      className="w-screen relative h-full  font-roboto font-bold p-4 md:p-10 text-5xl sm:my-auto grid sm:text-7xl  md:text-7xl  "
    >
      <div
        id="landing"
        className="my-auto relative mx-auto leading-tight  w-full lg:w-[1000px] "
      >
        <div>
          <a
            href="/about"
            className={
              menu
                ? `hover:pl-20 before:content-['About'] transition-all`
                : `hover:pl-20 hover:after:content-['About'] before:content-['Hello.'] hover:before:content-none transition-all`
            }
            data-hover="About"
          ></a>
        </div>
        <div>
          {" "}
          <a
            href="/work"
            before="I am"
            className={
              menu
                ? `hover:pl-20 before:content-['Work!'] transition-all`
                : `hover:pl-20 hover:after:content-['Work'] before:content-[attr(before)] hover:before:content-none transition-all`
            }
            data-hover="About"
          ></a>
        </div>
        <div>
          <a
            href="/contact"
            className={
              menu
                ? `hover:pl-20 before:content-['Contact'] transition-all`
                : `hover:pl-20 text-[#13a8bf]  hover:after:content-['Contact'] before:content-['William'] hover:before:content-none transition-all`
            }
            data-hover="About"
          ></a>
        </div>

        <div className="absolute h-24 w-auto text-2xl right-0 grid  sm:h-32 md:h-40  top-[45%] sm:top-[40%] items-center mr-4 sm:text-2xl   ">
          <a href="https://github.com/wbenarto">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/william-benarto/">
            <FaLinkedin />
          </a>
        </div>

        <div className="absolute md:hidden text-xs animate-bounce  w-full text-center bottom-[-180px]">
          <p>Tap here</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
