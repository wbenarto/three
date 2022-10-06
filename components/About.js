import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const about = () => {
  useEffect(() => {
    let t1 = gsap.timeline();
    t1.fromTo(
      ".landing",
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "ease-in" }
    );
    gsap.from(
      "#img",
      {
        duration: 1,
        opacity: 0,
        y: 60,
        ease: "power3",
        scrollTrigger: {
          id: "img",
          trigger: "#img",
          start: "top 40%",
          end: "bottom 80%",
          toggleActions: "play none none reverse",
        },
      },
      "Start"
    );
    gsap.from(
      "#about",
      {
        duration: 1,
        opacity: 0,
        y: 60,
        ease: "power3",
        scrollTrigger: {
          id: "about",
          trigger: "#about",
          start: "top 40%",
          end: "bottom 80%",
          toggleActions: "play none none reverse",
        },
      },
      "Start"
    );
    gsap.from(
      ".skills",
      {
        duration: 1,
        opacity: 0,
        y: 60,
        ease: "power3",
        scrollTrigger: {
          id: "skills",
          trigger: "#about",
          start: "top 30%",
          end: "bottom 80%",
          toggleActions: "play none none reverse",
          stagger: 0.3,
        },
      },
      "Start"
    );
  }, []);

  return (
    <div className="h-full w-screen text-white bg-black font-roboto max-w-[1200px] mx-auto  ">
      <div className="absolute top-0 right-0 mr-10 mt-10 sm:mr-20 md:mr-24 text-2xl hover:cursor-pointer">
        <a
          href="/"
          className="text-[#13a8bf] hover:after:content-['Home.'] before:content-['WB.'] font-bold"
        ></a>
      </div>
      <div className="h-screen text-center grid items-center ">
        <h1 className="text-2xl md:text-4xl font-bold p-4 sm:p-14 landing">
          I design and build Front-End web applications using modern JavaScript
          frameworks
        </h1>
      </div>
      <div className="">
        <img
          id="img"
          className=" object-cover mx-auto"
          src={"/IMG_6061.jpg"}
          alt="profile"
        />
      </div>
      <div
        id="about"
        className=" text-xl px-10 md:px-20 pb-40 sm:max-w-[800px] text-left mx-auto "
      >
        <h1 className="my-10 text-2xl md:text-4xl font-bold ">About </h1>
        <p className="text-xl text-gray-400 ">
          I am a programmer / full-stack developer / front-end engineer . I
          enjoy building things that live on the internet and aspire to help and
          create positive impact for other people and for the world through my
          code.
        </p>
        <div className="hover:animate-bounce my-10">
          {" "}
          <a
            target="_blank" 
            href="https://drive.google.com/file/d/1DlQAqGGmM8NrIoRMT0EYEmORMW72LidC/view?usp=sharing"
            className="text-[#13a8bf] hover:cursor-pointer text-xl "
          >
            Resume
          </a>
        </div>

        <h2 className="text-2xl md:text-4xl my-10 font-bold">Skills</h2>
        <div className="text-base">
          <div className="w-full grid grid-cols-6 py-2  gap-4 skills">
            <div className="col-span-2 text-gray-400">
              <p>Programming Language:</p>
            </div>
            <div className="col-span-4">
              <p>HTML, CSS, JavaScript(ES6), TypeScript, Python</p>
            </div>
          </div>
          <div className=" w-full grid grid-cols-6 py-2  gap-4  skills">
            <div className="col-span-2 text-gray-400 ">
              <p>Frameworks:</p>
            </div>
            <div className="col-span-4">
              <p>Next.js, React.js</p>
            </div>
          </div>
          <div className="w-full grid grid-cols-6 py-2  gap-4  skills">
            <div className="col-span-2 text-gray-400 ">
              <p>Libraries:</p>
            </div>
            <div className="col-span-4">
              <p>
                {" "}
                Node.js, Express, Redux, Recoil, REST API, GraphQL API,
                ApolloClient
              </p>
            </div>
          </div>
          <div className=" w-full grid grid-cols-6 py-2  gap-4  skills">
            <div className="col-span-2 text-gray-400 ">
              <p>Databases:</p>
            </div>
            <div className="col-span-4">
              <p>MongoDB, MySQL, Google Cloud Firebase, Sanity.io</p>
            </div>
          </div>
          <div className=" w-full grid grid-cols-6 py-2  gap-4  skills">
            <div className="col-span-2 text-gray-400 ">
              <p>Other Tools:</p>
            </div>
            <div className="col-span-4">
              <p>
                Visual Studio Code, Styled-Components, Tailwind CSS, SASS,
                Bootstrap, Cypress, Mocha
              </p>
            </div>
          </div>
        </div>
        <h2 className="text-2xl md:text-4xl my-10 font-bold skills">
          Hobbies and Interests
        </h2>
        <p className=" text-gray-400 skills ">
          In my free time I like to work out, play basketball and cook up
          delicious dishes from all around the world. My experience working in
          Food and Beverage industry gave me the skills to explore different
          recipes from different cultures. One of my biggest joy in life is to
          share my sushi creations to friends and family.
        </p>
        <br />
        <p className=" text-gray-400 skills ">
          I also share my passion in programming with my 12 year old niece. I
          started tutoring her simple programming during the pandemic and got
          her into writing games and animation through Scratch. She has improved
          quite a bit as a junior programmer and have moved on to writing HTML,
          CSS and some JavaScript.
        </p>
      </div>
    </div>
  );
};

export default about;
