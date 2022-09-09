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
      {/* <div className="fixed text-sm flex  items-center justify-center z-999 my-auto mb-[50px] bottom-0 left-0 w-full h-10 ">
        <Link to="about" smooth={true} duration={800} spy={true} exact="true">
          <div
            className="w-20 h-10 bg-blue-400"
            onClick={() => console.log("about")}
          >
            About
          </div>
        </Link>
        <Link to="work" smooth={true} duration={800} spy={true} exact="true">
          <div className="w-20 h-10 bg-blue-400">Work</div>
        </Link>
        <Link to="contact" smooth={true} duration={800} spy={true} exact="true">
          <div className="w-20 h-10 bg-blue-400">Contact</div>
        </Link>
      </div> */}
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

        <div className="absolute h-20 w-auto text-xl right-0 grid  sm:h-32 md:h-40  top-[45%] sm:top-[40%] items-center mr-4 sm:text-2xl   ">
          <a href="https://github.com/wbenarto">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/william-benarto/">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
