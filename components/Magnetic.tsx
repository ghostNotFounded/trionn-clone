"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

const Magnetic = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const mouseMove = (e: any) => {
    if (ref.current) {
      const { clientX, clientY } = e;
      // @ts-ignore
      const { width, height, left, top } = ref.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      setPosition({ x, y });
    }
  };

  const mouseLeave = (e: any) => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      ref={ref}
      animate={{ x, y }}
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;
