import React, { useEffect, useState } from "react";

import dynamic from "next/dynamic";

const NoSsr = dynamic(() => import("../components/Work"), {
  ssr: false,
});
const work = () => {
  return (
    <React.Fragment>
      <NoSsr />
    </React.Fragment>
  );
};

export default work;
