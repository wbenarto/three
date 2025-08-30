
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const NoSsr = dynamic(() => import("../components/Kata"), {
  ssr: false,
});

const Kata = () => {   
  return (
    <React.Fragment>
      <Head>
        <title>Kata Clone Layout</title>
        <meta name="description" content="Welcome" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NoSsr />
    </React.Fragment>
  );
};

export default Kata;
