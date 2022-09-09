import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import Circle from "../components/Circle";
import Landing from "../components/Landing";

export default function Home() {
  const [wh, setWh] = useState(100);
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

  useEffect(() => {
    setWh(window.innerHeight * 0.01);
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
          className="h-[-webkit-fill-available] sm:h-screen w-full flex text-white bg-black"
          // className={`h-[calc(${wh} * 100)] sm:h-screen w-full flex text-white bg-black`}
        >
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
