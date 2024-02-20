"use client";

import { useMotionValue, motion, useSpring } from "framer-motion";
import { RefObject, useEffect, useState } from "react";

const Cursor = ({
  stickyHeading,
  stickyDiv,
}: {
  stickyHeading: RefObject<HTMLHeadingElement>;
  stickyDiv: RefObject<HTMLDivElement>;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const cursorSize = isHovered ? 250 : 20;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;

    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    stickyHeading.current?.addEventListener("mouseover", handleMouseOver);
    stickyHeading.current?.addEventListener("mouseleave", handleMouseLeave);

    stickyDiv.current?.addEventListener("mouseover", handleMouseOver);
    stickyDiv.current?.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      stickyHeading.current?.removeEventListener("mousemove", handleMouseMove);
      stickyHeading.current?.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

      stickyDiv.current?.removeEventListener("mousemove", handleMouseMove);
      stickyDiv.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  });

  return (
    <motion.div
      className="fixed rounded-full w-5 h-5 bg-gray dark:bg-lightblue"
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y,
      }}
      animate={{
        width: cursorSize,
        height: cursorSize,
        filter: `blur(${isHovered ? 30 : 0}px)`,
      }}
    ></motion.div>
  );
};

export default Cursor;
