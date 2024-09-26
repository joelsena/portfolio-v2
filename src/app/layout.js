import { Lexend } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import { NavButton } from "@/components/NavButton";
import { Phone } from "@/components/Phone";

const lexend = Lexend({ subsets: ["latin-ext"], weight: ["400", "500", "600"], variable: "--font-lexend" });
const moonHouse = localFont({
  src: "../assets/moonhouse.ttf",
  display: "swap",
  variable: "--font-moonhouse",
});

export const metadata = {
  title: "Joel Sena",
  description: "Website & Blog pessoal de Joel Sena",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${moonHouse.variable} ${lexend.variable}`}>
      <body className={"bg-darkYellow flex min-h-screen flex-col p-6 font-lexend"}>
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
