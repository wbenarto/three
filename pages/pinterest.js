
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const NoSsr = dynamic(() => import("../components/Pinterest"), {
  ssr: false,
});

const pinterest = () => {   
  return (
    <React.Fragment>
      <Head>
        <title>Pinterest Clone Layout</title>
        <meta name="description" content="Welcome" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NoSsr />
    </React.Fragment>
  );
};

export default pinterest;
