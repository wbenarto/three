import { forwardRef } from "react";

export const DogSpinner = () => (
  <div>
    <p>loading...</p>
  </div>
);

export const DogContainer = forwardRef(({ children }, ref) => (
  <div ref={ref} className="voxel-dog w-full h-full relative">
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
