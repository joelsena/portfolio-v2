import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({ subsets: ["latin-ext"], weight: ["400", "500", "600"] });

export const metadata = {
  title: "Joel Sena",
  description: "Website & Blog pessoal de Joel Sena",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lexend.className}>{children}</body>
    </html>
  );
}
