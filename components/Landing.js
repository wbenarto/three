import React, { useState, useEffect, useRef, useContext } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { gsap } from "gsap";
import VoxelDogLoader from "../components/voxel-dog-loader";
import dynamic from "next/dynamic";
import useIsomorphicLayoutEffect from "../src/animation/useIsomorphicLayoutEffects";
import { TransitionContext } from "../src/context/TransitionContext";

const LazyVoxelDog = dynamic(() => import("../components/voxel-dog"), {
  ssr: false,
  loading: () => <VoxelDogLoader />,
});

const Landing = () => {
  const [menu, setMenu] = useState(false);
  const { timeline } = useContext(TransitionContext);

  const boxRef = useRef();

  // wait until DOM has been rendered
  // useEffect(() => {
  //   gsap.to(boxRef.current, { rotation: "+=360" });
  // });
  let t1 = gsap.timeline();

  useIsomorphicLayoutEffect(() => {
    t1.fromTo(
      ".landing",
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "ease-in" }
    ).fromTo(
      ".side",
      { opacity: 0, x: 20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.4,
        stagger: 0.2,
      }
    );
  }, []);
  return (
    <div
      onClick={() => setMenu(!menu)}
      className="w-screen relative h-full  font-roboto font-bold p-4 md:p-10 text-5xl sm:my-auto grid sm:text-7xl  md:text-7xl  "
    >
      <div className="absolute ">
        <LazyVoxelDog className="" />
      </div>
      <div className="my-auto relative mx-auto leading-tight  w-full lg:w-[1000px]  ">
        <div className="landing">
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
        <div className="landing">
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
        <div className="landing">
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
            <FaGithub className="side" />
          </a>
          <a href="https://www.linkedin.com/in/william-benarto/">
            <FaLinkedin className="side" />
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
