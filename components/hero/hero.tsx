import { FiArrowDownCircle } from "react-icons/fi";
import Magnetic from "@/components/Magnetic";
import { forwardRef, HTMLAttributes } from "react";

const Hero = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  function hero(props, ref) {
    return (
      <section className="h-[200vh]">
        <div className="flex flex-col justify-center items-center h-screen space-y-8 dark:mix-blend-difference">
          <h1
            ref={ref}
            className="font-semibold text-9xl leading-[6rem] text-center"
          >
            ROAR IN THE <br /> DIGITAL WILDERNESS.
          </h1>
          <p className="text-center text-sm max-w-[350px]">
            WE ROAR WITH SUCCESS, DELIVERING THE TRIONN&reg; THROUGH VERSATILE
            DESIGN,BRANDING AND THE LATEST TECH DEVELOPMENT TO COMPANIES.
          </p>

          <Magnetic>
            <FiArrowDownCircle
              size={24}
              className="opacity-50 cursor-pointer"
            />
          </Magnetic>

          <div className="flex justify-between items-center w-full px-24 bottom-10 absolute">
            <Magnetic>
              <button className="border-[2px] border-slate-700 text-slate-700 dark:border-lightblue dark:text-lightblue font-semibold text-xl px-10 py-5 rounded-full">
                Explore work
              </button>
            </Magnetic>

            <button className="px-16 py-10 rounded-full">Explore work</button>

            <Magnetic>
              <button className="border-[2px] border-slate-700 text-slate-700 dark:border-lightblue dark:text-lightblue font-semibold text-xl px-10 py-5 rounded-full">
                Get in touch
              </button>
            </Magnetic>
          </div>
        </div>
      </section>
    );
  }
);

export default Hero;
