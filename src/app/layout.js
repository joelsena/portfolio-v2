import { Lexend } from "next/font/google";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import "./globals.css";

const lexend = Lexend({ subsets: ["latin-ext"], weight: ["400", "500", "600"] });

export const metadata = {
  title: "Joel Sena",
  description: "Website & Blog pessoal de Joel Sena",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"bg-darkYellow flex min-h-screen flex-col p-6 " + lexend.className}>
        <div
          className="mx-auto"
          style={{
            width: "min(895px, 100%)",
          }}
        >
          <header className="flex items-center justify-between">
            <h1 className="text-2xl text-customOrange font-bold">Joel Sena</h1>{" "}
            <div className="flex">
              {/* TODO: hover variation */}
              <Button className="text-customBlue text-xl font-bold" variant="none" asChild>
                <Link href="#">CV</Link>
              </Button>

              <Button className="text-customBlue text-xl font-bold" variant="none" asChild>
                <Link href="#">Post</Link>
              </Button>

              <Button className="text-customBlue text-xl font-bold" variant="none" asChild>
                <Link href="#">Me Contate</Link>
              </Button>
            </div>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
