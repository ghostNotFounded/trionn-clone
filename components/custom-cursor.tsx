"use client";

import { useMotionValue, motion, useSpring } from "framer-motion";
import { useEffect } from "react";

const Cursor = () => {
  const cursorSize = 20;
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

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  return (
    <motion.div
      className="fixed opacity-0 md:opacity-100 rounded-full w-5 h-5 bg-gray dark:bg-lightblue bg-blend-exclusion -z-10"
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y,
      }}
    ></motion.div>
  );
};

export default Cursor;
