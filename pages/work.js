import React, { useEffect, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const NoSsr = dynamic(() => import("../components/Work"), {
  ssr: false,
});
const work = () => {
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

export default work;
