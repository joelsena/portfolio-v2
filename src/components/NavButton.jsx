"use client";

import { useState } from "react";

export function NavButton({ icon: Icon, children, onClick, isActive }) {
  // TODO: easter egg contador
  // const [count, setCount] = useState(1);

  return (
    <button
      onMouseEnter={() => {
        const phoneSelect = new Audio("/sfx/flipphone_select.ogg");
        phoneSelect.volume = 0.2;
        phoneSelect.play();
      }}
      className={`flex items-center gap-2 text-2xl font-xolonium font-semibold hover:bg-[#394D9F] py-2 pl-6 rounded-tl-full rounded-bl-full ${
        isActive ? "bg-[#394D9F]" : ""
      }`}
      style={{
        width: "90%",
      }}
      onClick={() => {
        // if (count === 10) {
        //   const amostradinho = new Audio("/sfx/eu-gosto-e-assim-amostradinho.mp3");
        //   amostradinho.volume = 0.5;
        //   amostradinho.play();
        //   setCount(0);
        // }

        const phoneConfirm = new Audio("/sfx/flipphone_confirm.ogg");
        phoneConfirm.volume = 0.15;
        phoneConfirm.play();

        // setCount((prev) => prev++);
        if (onClick) onClick();
      }}
    >
      <Icon />
      <span>{children}</span>
    </button>
  );
}
