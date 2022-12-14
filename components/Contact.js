import React, { useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useEffect(() => {
    gsap.from(".contact1", {
      y: 100,
      opacity: 0,
      duration: 0.6,
      ease: "power2.easeIn",
      stagger: 0.3,
    });
    gsap.from(".contact", {
      y: 100,
      opacity: 0,
      duration: 0.6,
      ease: "power2.easeIn",
      stagger: 0.3,
      scrollTrigger: {
        id: "contact",
        trigger: ".contact",
        start: "top 90%",
        end: "bottom 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);
  const handleEmailMe = () => {
    window.open("mailto:w.benarto@gmail.com");
  };
  return (
    <div className="h-full w-screen text-white bg-black font-roboto max-w-[1200px] mx-auto  ">
      <div className="absolute top-0 right-0 mr-10 mt-10 sm:mr-20 md:mr-24 text-2xl hover:cursor-pointer">
        <a
          href="/"
          className="text-[#13a8bf] hover:after:content-['Home'] before:content-['WB.'] font-bold"
        ></a>
      </div>
      <div className="h-screen text-center grid items-center ">
        <h1 className="text-2xl md:text-4xl font-bold p-4 contact1 ">
          Let's build a better future❤️
        </h1>
      </div>
      <div
        id="contact"
        className=" text-base mt-[-200px] sm:text-xl px-10 md:px-20 pb-40 sm:max-w-[800px] text-left mx-auto "
      >
        <h1 className="text-2xl md:text-2xl font-bold my-10 contact">
          Contact{" "}
        </h1>
        <p className="text-gray-400 contact">
          Currently looking for a full-time opportunity where I can collaborate
          with creative group of people to develop solutions and bring positive
          impact to the world.{" "}
        </p>
        <div className=" my-10 h-14 flex gap-x-10 contact">
          <div className="text-3xl">
            <a href="https://github.com/wbenarto">
              <FaGithub />
            </a>
          </div>
          <div className="text-3xl contact">
            <a href="https://www.linkedin.com/in/william-benarto/">
              <FaLinkedin />
            </a>
          </div>
          <div className="text-3xl contact">
            <a href="https://www.instagram.com/webeclinkz/">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div
          className="hover:cursor-pointer border-b-2 hover:animate-bounce my-10 flex items-center gap-4 contact"
          onClick={handleEmailMe}
        >
          <p className="">Say Hello</p>
          <FaEnvelope />
        </div>
      </div>
    </div>
  );
};

export default Contact;
