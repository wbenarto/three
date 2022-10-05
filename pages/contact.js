import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const NoSsr = dynamic(() => import("../components/Contact"), {
  ssr: false,
});

const contact = () => {
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

export default contact;
