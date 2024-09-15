import Link from "next/link";

import { CustomButton } from "@/components/CustomButton";

export default function Home() {
  return (
    <main className="pt-28">
      <img className="mb-10" src="/hero.png" alt="hero" />

      <div className="rounded-tl-lg rounded-bl-lg font-lexend mb-4">
        <h6 className="font-bold text-xl">Olá,</h6>
        <h1 className="text-2xl font-bold">Me chamo Joel.</h1>
      </div>

      <div className="flex flex-col gap-2">
        <p>Sou um engenheiro de software especializado em reactjs e javascript.</p>

        <p>Atualmente resido no Brasil e trabalho na Prosas como desenvolvedor frontend.</p>
      </div>

      <section className="flex w-full mt-10">
        <div className="flex items-center px-4 py-2 bg-lightYellow rounded-tl-lg rounded-bl-lg gap-4 w-full">
          <CustomButton>Leia o meu Blog</CustomButton>
          <CustomButton>Github</CustomButton>
          <CustomButton>Linkedin</CustomButton>
        </div>

        <span className="bg-lightYellow w-[0.875rem] mx-1 flex-none" />
        <span className="bg-lightYellow w-[1.625rem] flex-none" />
      </section>
    </main>
  );
}
