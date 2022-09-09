import React, { useRef, forwardRef, useImperativeHandle } from "react";
import gsap from "gsap";

const Circle = forwardRef(({ delay }, ref) => {
  const el = useRef();
  useImperativeHandle(
    ref,
    () => {
      // return our API
      return {
        moveTo(x, y) {
          gsap.to(el.current, { x, y, delay });
        },
      };
    },
    [delay]
  );
  return (
    <div
      className={`w-[14rem] h-[14rem] fixed translate sm:w-10 sm:h-10 rounded-full top-0 left-0 translate-x-[-50%] translate-y-[-50%] pointer-events-none backdrop-invert z-0`}
      ref={el}
    ></div>
  );
});

export default Circle;
