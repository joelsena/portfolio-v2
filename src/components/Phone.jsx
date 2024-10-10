"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

import { HiHome } from "react-icons/hi2";
import { TbBook } from "react-icons/tb";
import { FiFileText } from "react-icons/fi";
import { LuPhone } from "react-icons/lu";

import { NavButton } from "./NavButton";

export function Phone() {
  const [show, setShow] = useState(false);
  const [navItems, setNavItems] = useState([
    {
      icon: HiHome,
      title: "home",
      isActive: true,
      href: "/",
    },
    {
      icon: FiFileText,
      title: "cv",
      isActive: false,
      href: "/cv",
    },
    {
      icon: TbBook,
      title: "blog",
      isActive: false,
      href: "/blog",
    },
    {
      icon: LuPhone,
      title: "me contate",
      isActive: false,
      href: "/contact",
    },
  ]);

  const pathname = usePathname();
  const { push } = useRouter();

  useEffect(() => {
    setNavItems((prev) => prev.map((item) => ({ ...item, isActive: item.href === pathname })));
  }, [pathname]);

  // TODO: draggable
  return (
    <div
      className="flex flex-col items-center justify-center fixed bottom-0 left-0 transition-all"
      style={{
        width: "398px",
        height: "618px",
        bottom: show ? "0px" : "-43%",
      }}
    >
      {/* invisible button */}
      <button
        className="absolute z-30"
        onClick={() => {
          setShow((val) => {
            if (val === false) {
              const phoneOpen = new Audio("/sfx/flipphone_open.ogg");
              phoneOpen.volume = 0.1;
              phoneOpen.play();
            } else {
              const phoneClose = new Audio("/sfx/flipphone_close.ogg");
              phoneClose.volume = 0.1;
              phoneClose.play();
            }

            return !val;
          });
        }}
        style={{
          top: "14px",
          width: "110px",
          height: "45px",
        }}
      ></button>

      <div
        className="flex flex-col w-full h-full justify-center items-end py-8 text-white z-30"
        style={{
          width: "280px",
          height: "498px",
        }}
      >
        <span className="block w-full bg-[#394D9F]">navi-menu</span>
        <div className="flex flex-col w-full h-full justify-center items-end gap-px">
          {navItems.map(({ icon, title, href, ...rest }) => (
            <NavButton
              key={title}
              icon={icon}
              onClick={() => {
                setNavItems((prev) => prev.map((item) => ({ ...item, isActive: item.title === title })));
                console.log({ href });
                push(href);
              }}
              {...rest}
            >
              {title}
            </NavButton>
          ))}
        </div>
      </div>

      <img
        className="absolute top-0 bottom-0 left-0 right-0 z-20"
        src="/brc_phone_sliced.png"
        alt="celular bomb rush cyberfunk"
      />

      <header
        className="flex justify-center items-center absolute w-full bg-[#394D9F] border-b-2 border-[#6E80BD] z-10 font-xolonium text-white font-bold text-2xl"
        style={{
          top: "60px",
          height: "32px",
        }}
      >
        {Intl.DateTimeFormat("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
        }).format(new Date())}
      </header>

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
