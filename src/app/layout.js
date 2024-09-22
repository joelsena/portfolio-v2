import { Lexend } from "next/font/google";
import localFont from "next/font/local";

import { TextWithBorder } from "@/components/TextWithBorder";
import { CustomButton } from "@/components/CustomButton";
import "./globals.css";

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
          <header className="flex items-center justify-between">
            <TextWithBorder
              text="Joel Sena"
              className="text-white"
              style={{
                fontSize: "2rem",
              }}
            />
            <div className="flex gap-4">
              <CustomButton textColor="#10b6cb">CV</CustomButton>
              <CustomButton textColor="#10b6cb">Post</CustomButton>
              <CustomButton textColor="#10b6cb">Me Contate</CustomButton>
            </div>
          </header>
          {children}

          {/* TODO: NAVEGAÇÃO POR CELULAR */}
        </div>
      </body>
    </html>
  );
}
