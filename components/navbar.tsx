import Image from "next/image";

import { IoSunny, IoMoonSharp } from "react-icons/io5";
import { CgLoadbarSound } from "react-icons/cg";

import Control from "@/components/ui/control";

const Navbar = () => {
  return (
    <header className="py-10 px-24 flex justify-between">
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
        <Control onclick="themeSwitch">
          <IoSunny size={20} />
        </Control>

        <Control onclick="volumeSwitch">
          <CgLoadbarSound size={20} />
        </Control>
      </div>

      {/* Popup menu */}
      <div className="flex space-x-2">
        <span className="font-semibold text-xl">MENU</span>
      </div>
    </header>
  );
};

export default Navbar;
