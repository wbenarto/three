import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Landing = () => {
  return (
    <div className="w-screen  relative h-full p-10 font-roboto font-bold text-6xl sm:my-auto grid sm:text-7xl sm:p-4 md:text-7xl md:px-20 ">
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
      <div className="my-auto mx-auto relative   leading-none  w-full lg:w-[1200px] ">
        <h1 className="hover:pl-20  transition-all  ">Hello.</h1>
        <h1 className=" hover:pl-20  transition-all  ">I am</h1>
        <h1 className=" hover:pl-20 text-[#13a8bf]  transition-all ">
          William
        </h1>
        <div className="absolute h-20 w-auto text-2xl right-0 grid  sm:h-32 md:h-40 top-[45%] sm:top-[40%] items-center mr-4 sm:text-3xl   md:text-4xl  ">
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
