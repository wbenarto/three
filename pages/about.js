import React, { useEffect } from "react";
import Head from "next/head";
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
      <Head>
        <title>William Benarto</title>
        <meta name="description" content="Welcome" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NoSsr />
    </React.Fragment>
  );
};

export default About;
