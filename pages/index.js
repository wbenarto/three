import Head from "next/head";
import { useEffect, useRef, useCallback } from "react";
import Circle from "../components/Circle";
import Landing from "../components/Landing";
import About from "../components/About";
import Work from "../components/Work";
import Contact from "../components/Contact";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Home() {
  // Horizontal Scrolling
  useEffect(() => {
    const element = document.querySelector("#main");
    element.addEventListener("wheel", (e) => {
      e.preventDefault();
      element.scrollLeft += e.deltaY;
    });
  }, []);

  // Mouse tracking element
  const circleRefs = useRef([]);
  circleRefs.current = [];

  useEffect(() => {
    circleRefs.current.forEach((ref) =>
      ref.moveTo(window.innerWidth / 2, window.innerHeight / 2)
    );

    const onMove = ({ clientX, clientY }) => {
      circleRefs.current.forEach((ref) => ref.moveTo(clientX, clientY));
    };
    window.addEventListener("pointermove", onMove);

    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  const addCircleRef = (ref) => {
    if (ref) {
      circleRefs.current.push(ref);
    }
  };

  // Gsap Animation
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  gsap.defaults({ ease: "easeIn", duration: 2 });
  useEffect(() => {
    const element = ref.current;
    gsap.to("#landing", {
      scrollTrigger: {
        trigger: "#landing",
        toggleActions: "restart none none none",
        start: "left center",
        markers: true,
        horizontal: true,
      },
      duration: 3,
      rotation: 360,
    });
  }, []);

  return (
    <div className="">
      <Head>
        <title></title>
        <meta name="description" content="Welcome" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div
          id="main"
          className="snap-x flex overflow-x-scroll h-screen scroll-smooth text-white bg-black"
        >
          <div className="w-screen snap-center max-h-screen relative ">
            {/* <div className='absolute bottom-0 right-0 mt-[-100px] mr-[-390px] w-full h-full z-0 bg-center bg-cover bg-[url("/webe.png")]'></div> */}

            <Landing id="landing" />

            <Circle size={12} ref={addCircleRef} delay={0} />
            <Circle size={8} ref={addCircleRef} delay={0.1} />
            <Circle size={4} ref={addCircleRef} delay={0.2} />
          </div>
          <div className="w-screen snap-center max-h-screen relative  ">
            <About />
          </div>
          <div className="w-screen snap-center max-h-screen relative  ">
            <Work />
          </div>
          <div className="w-screen snap-center max-h-screen relative  ">
            <Contact />
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
