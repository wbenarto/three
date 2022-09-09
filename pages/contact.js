import React from "react";

const contact = () => {
  return (
    <div
      onClick={() => setMenu(!menu)}
      id="landing"
      className="w-screen relative h-screen text-white bg-black font-roboto font-bold p-4 md:p-10 text-5xl sm:my-auto grid sm:text-7xl  md:text-7xl  "
    >
      Contact
    </div>
  );
};

export default contact;
