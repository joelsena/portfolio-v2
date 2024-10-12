import { CustomButton } from "@/components/CustomButton";
import { PostCard } from "@/components/PostCard";

export default function Home() {
  return (
    <main className="pt-28">
      <div
        className="rounded-lg flex items-center mb-10"
        style={{
          height: "168px",
          overflow: "hidden",
        }}
      >
        <img src="/hero3.png" alt="hero" />
      </div>

      <div className="rounded-tl-lg rounded-bl-lg mb-4">
        <h6 className="font-bold text-xl">Olá,</h6>
        <h1 className="text-2xl font-bold">Me chamo Joel.</h1>
      </div>

      <div className="flex flex-col gap-2">
        <p>Sou um engenheiro de software especializado em reactjs e javascript.</p>

        <p>Atualmente resido no Brasil e trabalho na Prosas como desenvolvedor frontend.</p>
      </div>

      <section className="flex w-full mt-10">
        <div className="flex items-center px-4 py-2 bg-lightYellow rounded-tl-lg rounded-bl-lg gap-4 w-full">
          <CustomButton href="/blog">Leia o meu Blog</CustomButton>
          <CustomButton target="_blank" rel="noopener noreferrer" href="https://github.com/joelsena">
            Github
          </CustomButton>
          <CustomButton target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/joel-sena/">
            Linkedin
          </CustomButton>
        </div>

        <span className="bg-lightYellow w-[0.875rem] mx-1 flex-none" />
        <span className="bg-lightYellow w-[1.625rem] flex-none" />
      </section>

      {/* TODO: posts */}
      <section className="mt-14">
        <h5 className="text-xl font-bold mb-5">Últimos posts</h5>
        <div className="flex flex-col gap-4">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </section>
    </main>
  );
}
