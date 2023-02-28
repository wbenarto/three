import { forwardRef } from "react";

export const DogSpinner = () => (
  <div className='w-20 h-20'>

  </div>
);

export const DogContainer = forwardRef(({ children }, ref) => (
  <div ref={ref} className=" w-screen h-screen ">
    {children}
  </div>
));

const Loader = () => {
  return (
    <DogContainer>
      <DogSpinner />
    </DogContainer>
  );
};

export default Loader;
