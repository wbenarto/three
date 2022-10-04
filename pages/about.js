import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import dynamic from "next/dynamic";

const NoSsr = dynamic(() => import("../components/About"), {
  ssr: false,
});

const About = () => {
  return (
    <React.Fragment>
      <NoSsr />
    </React.Fragment>
  );
};

export default About;
