import React, { useEffect } from "react";
import dynamic from "next/dynamic";

const NoSsr = dynamic(() => import("../components/Contact"), {
  ssr: false,
});

const contact = () => {
  return (
    <React.Fragment>
      <NoSsr />
    </React.Fragment>
  );
};

export default contact;
