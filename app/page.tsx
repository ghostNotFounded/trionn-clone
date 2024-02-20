"use client";

import { useRef } from "react";

import Hero from "@/components/hero/hero";
import Cursor from "@/components/custom-cursor";
import Navbar from "@/components/navbar";

const Page = () => {
  const stickyHeading = useRef<HTMLHeadingElement>(null);
  const stickyDiv = useRef<HTMLDivElement>(null);

  return (
    <>
      <Cursor stickyHeading={stickyHeading} stickyDiv={stickyDiv} />

      <Navbar ref={stickyDiv} />

      <main>
        <Hero ref={stickyHeading} />
      </main>
    </>
  );
};

export default Page;
