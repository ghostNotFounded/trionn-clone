import { FiArrowDownCircle } from "react-icons/fi";

import Magnetic from "@/components/Magnetic";

const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-center h-screen space-y-8">
      <h1 className="font-semibold text-9xl leading-[6rem] text-center">
        ROAR IN THE <br /> DIGITAL WILDERNESS.
      </h1>

      <p className="text-center text-sm max-w-[350px]">
        WE ROAR WITH SUCCESS, DELIVERING THE TRIONN&reg; THROUGH VERSATILE
        DESIGN,BRANDING AND THE LATEST TECH DEVELOPMENT TO COMPANIES.
      </p>

      <Magnetic>
        <FiArrowDownCircle size={24} className="opacity-50 cursor-pointer" />
      </Magnetic>

      <div className="flex justify-between items-center w-full px-24 bottom-10 absolute">
        <button className="border-[2px] border-lightblue text-lightblue font-semibold text-xl px-10 py-5 rounded-full">
          Explore work
        </button>

        <button className="px-16 py-10 rounded-full">Explore work</button>

        <button className="border-[2px] border-lightblue text-lightblue font-semibold text-xl px-10 py-5 rounded-full">
          Get in touch
        </button>
      </div>
    </section>
  );
};

export default Hero;
