import React, { useRef, forwardRef, useImperativeHandle } from "react";
import gsap from "gsap";

const Circle = forwardRef(({ size, delay }, ref) => {
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
      className={`fixed translate w-10 h-10 rounded-full top-0 left-0 translate-x-[-50%] translate-y-[-50%] pointer-events-none backdrop-invert z-0`}
      ref={el}
    ></div>
  );
});

export default Circle;
