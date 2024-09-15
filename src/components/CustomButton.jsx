"use client";

import { useState, useRef } from "react";
import Link from "next/link";

export function CustomButton({ className, children, text = "", href = "", ...rest }) {
  const [showStroke, setShowStroke] = useState(false);

  const spanRef = useRef(null);

  const textContent = String(children);

  function handleOnClick(e) {
    const jazzSfx = new Audio("/sfx/jazz.mp3");
    const content = e.target;

    content.classList.add("blinking");
    spanRef.current?.classList.add("blinking");

    jazzSfx.play();
    setTimeout(() => {
      content.classList.remove("blinking");
      spanRef.current?.classList.remove("blinking");
    }, 450);
  }

  return (
    <button
      className="p-1 text-xl text-customOrange font-moonhouse relative transition-all"
      variant="none"
      onClick={handleOnClick}
      {...rest}
    >
      <Link
        onMouseEnter={() => {
          const hihatSfx = new Audio("/sfx/hihat.mp3");
          hihatSfx.play();
          setShowStroke(true);
        }}
        onMouseOut={() => {
          setShowStroke(false);
        }}
        href={href}
      >
        {showStroke && (
          <span
            ref={spanRef}
            className="block text-xl absolute p-1 text-border-stroke"
            style={{
              top: "1px",
              left: "-1px",
            }}
          >
            {textContent}
          </span>
        )}
        <span className="block hover:text-white relative text-border-stroke-hover">{textContent}</span>
      </Link>
    </button>
  );
}
