import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const about = () => {
  const revealRefs = useRef([]);
  revealRefs.current = [];
  
  useEffect(() => {
   
    revealRefs.current.forEach((e, i) => {
      gsap.from(e, {
        duration: 1,
        opacity: 0,
        y: 60,
        ease: "ease-in",
        scrollTrigger: {
          id: `section-${i + 1}`,
          trigger: e,
          start: "top 80%",
          end: "bottom 40% ",
          toggleActions: "play none none reverse",
          // markers: true,
        },
      });

    });
  }, []);

  const addToRefs = (e) => {
    console.log(e);
    if (e !== null && e && !revealRefs.current.includes(e)) {
      console.log("PUSHING" + e);
      revealRefs.current.push(e);
    }
  };
  return (
    <div className="h-full w-screen text-white bg-black font-roboto max-w-[1200px] mx-auto  ">
      <div className="absolute z-10 top-0 right-0 mr-10 mt-10 sm:mr-20 md:mr-24 text-2xl hover:cursor-pointer">
        <a
          href="/"
          className="text-[#13a8bf] hover:after:content-['Home'] before:content-['WB.'] font-bold"
        ></a>
      </div>
      <div ref={addToRefs} className=" h-screen text-center grid items-center ">
        <h1 className="text-2xl md:text-4xl font-bold p-4 sm:p-14 ">
          I design and build Full-Stack web applications using modern JavaScript
          frameworks
        </h1>
      </div>
      <div className="">
        <img
          ref={addToRefs}
          className=" object-cover mx-auto"
          src={"/IMG_6061.jpg"}
          alt="profile"
        />
      </div>
      <div
        
        className=" text-xl px-10 md:px-20 pb-40 sm:max-w-[800px] text-left mx-auto "
      >
        <h1  ref={addToRefs} className="my-10 text-2xl md:text-4xl font-bold ">About </h1>
        <p  ref={addToRefs} className="text-xl text-gray-400 ">
          I am a programmer / full-stack developer / front-end engineer . I
          enjoy building things that live on the internet and aspire to help and
          create positive impact for other people and for the world through my
          code.
        </p>
        <br />
        <p  ref={addToRefs} className="text-xl text-gray-400 ">
          My programming journey started in 2018 where I took my first coding class at UC Berkeley Ext program where I learned how to create Full-Stack web applications using MongoDB, Node.js, React, and Express.
          I completed the 6-month coding bootcamp with the foundation that helps me acquire contract work and freelance jobs. 
        </p>
        <br />
        <p  ref={addToRefs} className="text-xl text-gray-400 ">
          Prior to my current role as Software Engineer, I had worked 9 years of my professional career in Food and Beverage industry. I started off as sushi chef and by the end of my journey with Genji, I was the Regional Operations Manager for California Region. I thoroughly enjoyed my experience with Genji Family and I am so thankful for the experience working with the company. 
        </p>

        <div  ref={addToRefs} className="hover:animate-bounce my-10">
          {" "}
          <a
            target="_blank" 
            href="https://drive.google.com/file/d/1DlQAqGGmM8NrIoRMT0EYEmORMW72LidC/view?usp=sharing"
            className="text-[#13a8bf] hover:cursor-pointer text-xl "
          >
            Resume
          </a>
        </div>

        <h2 ref={addToRefs} className="text-2xl md:text-4xl my-10 font-bold">Skills</h2>
        <div className="text-base">
          <div ref={addToRefs} className="w-full grid grid-cols-6 py-2  gap-4 skills">
            <div className="col-span-2 text-gray-400">
              <p>Programming Language:</p>
            </div>
            <div className="col-span-4">
              <p>HTML, CSS, JavaScript(ES6), TypeScript, Python</p>
            </div>
          </div>
          <div ref={addToRefs} className=" w-full grid grid-cols-6 py-2  gap-4">
            <div className="col-span-2 text-gray-400 ">
              <p>Frameworks:</p>
            </div>
            <div className="col-span-4">
              <p>Next.js, React.js, Redux, Recoil, jQuery, Ajax</p>
            </div>
          </div>
          <div ref={addToRefs} className="w-full grid grid-cols-6 py-2  gap-4 ">
            <div className="col-span-2 text-gray-400 ">
              <p>Backend:</p>
            </div>
            <div className="col-span-4">
              <p>
                {" "}
                Node.js, Express, Sails.js,  REST API, GraphQL API,
                ApolloClient
              </p>
            </div>
          </div>
          <div ref={addToRefs} className=" w-full grid grid-cols-6 py-2  gap-4 ">
            <div className="col-span-2 text-gray-400 ">
              <p>Databases:</p>
            </div>
            <div className="col-span-4">
              <p>MongoDB, MySQL, Google Cloud Firebase, Sanity.io</p>
            </div>
          </div>
          <div ref={addToRefs} className=" w-full grid grid-cols-6 py-2  gap-4 ">
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
        <h2 ref={addToRefs} className="text-2xl md:text-4xl my-10 font-bold">
          Hobbies and Interests
        </h2>
        <p ref={addToRefs} className=" text-gray-400 ">
          In my free time I like to work out, play basketball and cook up
          delicious dishes from all around the world. My experience working in
          Food and Beverage industry gave me the skills to explore different
          recipes from different cultures. One of my biggest joy in life is to
          share my sushi creations to friends and family.
        </p>
        <br />
        <p ref={addToRefs} className=" text-gray-400">
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
