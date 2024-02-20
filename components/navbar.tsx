import Image from "next/image";

import { IoSunny, IoMoonSharp } from "react-icons/io5";
import { CgLoadbarSound } from "react-icons/cg";

import Control from "@/components/ui/control";
import Hamburger from "@/components/hamburger";
import { HTMLAttributes, forwardRef } from "react";

const Navbar = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function navbar(props, ref) {
    return (
      <header className="py-10 px-24 flex justify-between absolute top-0 left-0 right-0 z-10 dark:mix-blend-difference">
        {/* Trionn logo as image */}
        <Image
          src={"/logo.svg"}
          width={100}
          height={100}
          alt="trionn"
          aria-label="trionn"
          className="object-contain filter invert dark:invert-0"
        />

        {/* Dark mode and audio control */}
        <div className="flex space-x-2">
          <Control
            onclick="themeSwitch"
            activeIcon={<IoSunny size={20} />}
            inactiveIcon={<IoMoonSharp size={20} />}
          />

          <Control
            onclick="volumeSwitch"
            activeIcon={<CgLoadbarSound size={20} />}
            inactiveIcon={<IoMoonSharp size={20} />}
          />
        </div>

        {/* Popup menu */}
        <div className="flex space-x-5 items-center cursor-pointer" ref={ref}>
          <span className="font-semibold text-xl">MENU</span>
          <Hamburger />
        </div>
      </header>
    );
  }
);

export default Navbar;
