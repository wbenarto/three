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
  // gsap.registerPlugin(ScrollTrigger);
  // const ref = useRef(null);

  // gsap.defaults({ ease: "easeIn", duration: 2 });
  // useEffect(() => {
  //   gsap.fromTo(
  //     "#landing",
  //     {
  //       opacity: 0,
  //       y: -100,
  //     },
  //     {
  //       ease: "power2.easeIn",
  //       y: 0,
  //       opacity: 1,
  //       duration: 3,
  //     }
  //   );
  // }, []);

  return (
    <div className="">
      <Head>
        <title></title>
        <meta name="description" content="Welcome" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div id="main" className="h-screen w-full flex text-white bg-black">
          {/* <div className='absolute bottom-0 right-0 mt-[-100px] mr-[-390px] w-full h-full z-0 bg-center bg-cover bg-[url("/webe.png")]'></div> */}

          <Landing id="landing" />

          <Circle size={12} ref={addCircleRef} delay={0} />
          <Circle size={8} ref={addCircleRef} delay={0.1} />
          <Circle size={4} ref={addCircleRef} delay={0.2} />
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
