import { Lexend } from "next/font/google";
import localFont from "next/font/local";

import { Phone } from "@/components/Phone";
import "./globals.css";

const lexend = Lexend({ subsets: ["latin-ext"], weight: ["400", "500", "600"], variable: "--font-lexend" });
const moonHouse = localFont({
  src: "../assets/moonhouse.ttf",
  display: "swap",
  variable: "--font-moonhouse",
});
const xolonium = localFont({
  src: [
    {
      path: "../assets/xolonium_regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/xolonium_bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-xolonium",
});

export const metadata = {
  title: "Joel Sena",
  description: "Website & Blog pessoal de Joel Sena",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${moonHouse.variable} ${lexend.variable} ${xolonium.variable}`}>
      <body className={"bg-darkYellow flex min-h-screen flex-col p-6 font-xolonium"}>
        <div
          className="mx-auto"
          style={{
            width: "min(895px, 100%)",
          }}
        >
          {children}

          <Phone />
        </div>
      </body>
    </html>
  );
}
