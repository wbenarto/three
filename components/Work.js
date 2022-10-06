import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { Transition } from "@headlessui/react";
import { FaCaretDown } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import { projects } from "../data/projects_data";

const Work = () => {
  const [open, setOpen] = useState(false);
  const [project, setProject] = useState({});

  const handleClick = (id) => {
    setOpen(!open);
    const data = projects.filter((e) => e.id == id)[0];
    setProject(data);
  };

  useEffect(() => {
    gsap.from(".job", {
      y: -100,
      opacity: 0,
      duration: 0.6,
      ease: "power2",
      stagger: 0.3,
    });
    gsap.from(".title", {
      y: 100,
      opacity: 0,
      duration: 0.5,
      ease: "power2",
      stagger: 1.8,
    });
  }, []);
  return (
    <div  className="h-full  text-white bg-black font-roboto max-w-[1200px] mx-auto  ">
      <div className="absolute top-0 right-0 mr-10 mt-10 sm:mr-20 md:mr-24 text-2xl hover:cursor-pointer">
        <a
          href="/"
          className="text-[#13a8bf] hover:after:content-['Home.'] before:content-['WB.'] font-bold"
        ></a>
      </div>
      <div className=" text-base sm:text-xl px-10 md:px-20 pb-40 sm:max-w-[800px] text-left mx-auto ">
        <h1 className="my-10 text-2xl md:text-4xl font-bold title">Work </h1>
        <div className=" w-full grid grid-cols-8 py-2  gap-4 job">
          <div className="col-span-3 text-gray-400 ">
            <p>July 2022 - Now</p>
          </div>
          <div className="col-span-5  sm:col-span-4">
            <div
              onClick={() => handleClick("celeste")}
              className="flex justify-between items-center hover:cursor-pointer"
            >
              <p>Celeste Cake Shop</p>
              <FaCaretDown />
            </div>
            <p className="text-gray-400">eCommerce Engineer</p>
          </div>
        </div>
        <div className=" w-full grid grid-cols-8 py-2  gap-4 job">
          <div className="col-span-3 text-gray-400 ">
            <p>March 2022 - Sept 2022</p>
          </div>
          <div className="col-span-5 sm:col-span-4">
            <div
              onClick={() => handleClick("finca")}
              className="flex justify-between items-center hover:cursor-pointer"
            >
              <p>Finca</p>
              <FaCaretDown />
            </div>

            <p className="text-gray-400">Frontend Engineer</p>
          </div>
        </div>
        <div className=" w-full grid grid-cols-8 py-2  gap-4 job">
          <div className="col-span-3 text-gray-400 ">
            <p>2021 </p>
          </div>
          <div className="col-span-5  sm:col-span-4">
            <div
              onClick={() => handleClick("jinchoi")}
              className="flex justify-between items-cente hover:cursor-pointer"
            >
              <p>Jin Choi</p>
              <FaCaretDown />
            </div>
            <p className="text-gray-400">Web Developer</p>
          </div>
        </div>
        <div className=" w-full grid grid-cols-8 py-2  gap-4 job">
          <div className="col-span-3 text-gray-400 ">
            <p>2021</p>
          </div>
          <div className="col-span-5 sm:col-span-4">
            <div
              onClick={() => handleClick("spotifyclone")}
              className="flex justify-between items-center hover:cursor-pointer"
            >
              <p>Spotify Clone</p>
              <FaCaretDown />
            </div>
            <p className="text-gray-400">Frontend Project</p>
          </div>
        </div>
        <div className=" w-full grid grid-cols-8 py-2  gap-4 job">
          <div className="col-span-3 text-gray-400 ">
            <p>2020</p>
          </div>
          <div className="col-span-5 sm:col-span-4">
            <div
              onClick={() => handleClick("travelly")}
              className="flex justify-between items-center hover:cursor-pointer"
            >
              <p>Travelly App</p>
              <FaCaretDown />
            </div>
            <p className="text-gray-400">Frontend Project</p>
          </div>
        </div>
        <div className=" w-full grid grid-cols-8 py-2  gap-4 job">
          <div className="col-span-3 text-gray-400 ">
            <p>2020</p>
          </div>
          <div className="col-span-5 sm:col-span-4">
            <div
              onClick={() => handleClick("webesushi")}
              className="flex justify-between items-center hover:cursor-pointer"
            >
              <p>Webe Sushi</p>
              <FaCaretDown />
            </div>
            <p className="text-gray-400">Homemakase</p>
          </div>
        </div>

        <h1 className="my-10 text-2xl md:text-4xl font-bold title">
          Previous Work{" "}
        </h1>
        <div className=" w-full grid grid-cols-8 py-2  gap-4 job">
          <div className="col-span-3 text-gray-400 ">
            <p>2017 - 2020</p>
          </div>
          <div className="col-span-5 sm:col-span-4">
            <div
              onClick={() => handleClick("genjiregional")}
              className="flex justify-between items-center hover:cursor-pointer"
            >
              <p>Genji Sushi</p>
              <FaCaretDown />
            </div>
            <p className="text-gray-400">Regional Operations Manager</p>
          </div>
        </div>
        <div className=" w-full grid grid-cols-8 py-2  gap-4 job">
          <div className="col-span-3 text-gray-400 ">
            <p>2013 - 2017</p>
          </div>
          <div className="col-span-5 sm:col-span-4">
            <div
              onClick={() => handleClick("genjidistrict")}
              className="flex justify-between items-center hover:cursor-pointer"
            >
              <p>Genji Sushi</p>
              <FaCaretDown />
            </div>
            <p className="text-gray-400">District Manager</p>
          </div>
        </div>
      </div>
      <Transition
        project={project}
        show={open}
        enter="ease-out duration-300"
        enterFrom="translate-y-[100vh]"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="translate-y-[100vh]"
        className="fixed bg-gray-800 bottom-0 overflow-y-scroll scrollbar-hide left-0 right-0 mx-auto p-4 sm:p-10 w-full sm:w-3/4 max-w-[1200px] h-3/4 rounded-t-lg "
      >
        <div className="h-20 w-full  pb-4 flex justify-between items-center border-b-[0.5px] border-gray-600">
          <div>
            {" "}
            <p className="text-xl font-bold">{project?.title}</p>
            <p className="text-gray-400">{project?.headline}</p>
          </div>
          <div onClick={() => setOpen(false)}>
            <RiCloseLine className="font-bold text-2xl hover:cursor-pointer" />
          </div>
        </div>
        <div className="py-4  ">
          {project?.tech ? (
            <>
              {" "}
              <p className="pb-4 text-sm">TECH</p>
              <div className="flex pb-4 flex-wrap gap-2 overflow-wrap">
                {project?.tech?.map((e, i) => (
                  <div
                    key={i}
                    className="p-2 text-sm items-center text-center rounded-lg border-[0.3px] border-gray-600"
                  >
                    <p> {e}</p>
                  </div>
                ))}{" "}
              </div>
            </>
          ) : (
            <></>
          )}

          <div className="flex py-2 sm:py-4 h-[16rem] sm:h-[24rem] w-full gap-10  items-center overflow-x-scroll">
            {project?.images ? (
              project.images.map((e, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-gray-600  p-4 sm:p-10 h-full "
                >
                  <img className="h-full mx-auto object-cover" src={e} />
                </div>
              ))
            ) : (
              <></>
            )}
          </div>

          <p className="py-4 ">{project?.desc}</p>
          <div className="py-2 flex gap-2">
            {project?.deployed_url ? (
              <button className="py-2 px-10 bg-gray-600 rounded-lg">
                <a href={project?.deployed_url}>Visit</a>
              </button>
            ) : (
              <></>
            )}
            {project?.github ? (
              <button className="py-2 px-10 bg-gray-600 rounded-lg">
                <a href={project?.github}>Github</a>
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default Work;
