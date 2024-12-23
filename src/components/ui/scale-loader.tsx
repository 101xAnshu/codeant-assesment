import { ScaleLoader as Spinner } from "react-spinners";

export const ScaleLoader = () => {
  return (
    <div className="top-0 left-0 z-[99] absolute flex justify-center items-center bg-black bg-opacity-50 w-full h-full">
      <Spinner color="#1570EF" />
    </div>
  );
};
