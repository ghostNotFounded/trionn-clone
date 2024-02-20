import Magnetic from "@/components/Magnetic";

const Hamburger = () => {
  return (
    <Magnetic>
      <div className="flex cursor-pointer flex-col items-end space-y-1 bg-neutral-800 rounded-full p-2 w-12 h-12 justify-center">
        <div className="w-7 h-[2px] bg-white" />
        <div className="w-5 h-[2px] bg-white" />
      </div>
    </Magnetic>
  );
};

export default Hamburger;
