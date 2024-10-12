"use client";

import { useState, useRef } from "react";
import Link from "next/link";

export function CustomButton({
  className,
  children,
  href = "",
  offset = 1,
  textColor = "#FF8600",
  textColorHover = "white",

  ...rest
}) {
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
      className={`p-1 text-xl font-moonhouse relative transition-all flex-none ${className}`}
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
        {...rest}
      >
        {showStroke && (
          <span
            ref={spanRef}
            className="block text-xl absolute p-1"
            style={{
              color: textColor,
              top: offset + "px",
              left: `-${offset}px`,
              textShadow: `-1px -1px 0 ${textColor},
                1px -1px 0 ${textColor},
                -1px 1px 0 ${textColor},
                1px 1px 0 ${textColor}`,
            }}
          >
            {textContent}
          </span>
        )}
        <span
          className={`block relative`}
          style={{
            color: showStroke ? textColorHover : textColor,
            textShadow: showStroke
              ? `-1px -1px 0 ${textColor},
                1px -1px 0 ${textColor},
                -1px 1px 0 ${textColor},
                1px 1px 0 ${textColor}`
              : "",
          }}
        >
          {textContent}
        </span>
      </Link>
    </button>
  );
}
