"use client";
import { useState } from "react";

import { FaBookOpen } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

import { NavButton } from "./NavButton";

export function Phone() {
  const [show, setShow] = useState(false);

  // TODO: draggable
  return (
    <div
      className="flex items-center justify-center fixed bottom-0 left-0 transition-all"
      style={{
        width: "398px",
        height: "618px",
        bottom: show ? "0px" : "-43%",
      }}
    >
      <button
        className="absolute z-20"
        onClick={() => setShow((val) => !val)}
        style={{
          top: "14px",
          width: "110px",
          height: "45px",
        }}
      ></button>
      <div
        className="flex flex-col w-full h-full justify-center items-end py-8 text-white z-20"
        style={{
          width: "280px",
          height: "498px",
        }}
      >
        <NavButton icon={FaFileAlt}>home</NavButton>
        <NavButton icon={FaFileAlt}>cv</NavButton>
        <NavButton icon={FaBookOpen}>blog</NavButton>
        <NavButton icon={FaPhone}>me contate</NavButton>
      </div>

      <img
        className="absolute top-0 bottom-0 left-0 right-0 z-10"
        src="/brc_phone_sliced.png"
        alt="celular bomb rush cyberfunk"
      />

      <AnimatedStripes />
    </div>
  );
}

function AnimatedStripes() {
  const stripeCount = 56;
  const stripeHeight = 3;
  const gapHeight = 8;

  return (
    <div
      className="absolute bg-[#21255A] overflow-hidden"
      style={{
        width: "280px",
        height: "498px",
      }}
    >
      <div className="h-full animate-stripes">
        {[...Array(stripeCount)].map((_, index) => (
          <div
            key={index}
            className="w-full bg-[#161C3C]"
            style={{
              height: `${stripeHeight}px`,
              marginBottom: `${gapHeight}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
