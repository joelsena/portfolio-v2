import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="pt-28">
      <img className="mb-10" src="/hero.png" alt="hero" />

      <h6 className="text-customOrange font-medium text-xl">Olá,</h6>
      <h1 className="text-customOrange font-bold text-2xl mb-4">Me chamo Joel.</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit, urna et porta consequat, nibh arcu
        imperdiet arcu, euismod sagittis ipsum metus in mauris. Donec eu commodo enim. Morbi lobortis dolor at nibh
        auctor, vel cursus purus volutpat. Aenean aliquam semper tortor sed mollis. Cras sed ligula eget purus feugiat
        viverra id in velit. Vivamus mattis cursus arcu sit amet vulputate. Aliquam non tellus varius, semper arcu id,
        dignissim elit. Fusce vel sagittis diam.{" "}
      </p>

      <section className="flex w-full mt-16">
        <div className="flex items-center px-6 py-2 bg-lightYellow rounded-tl-lg rounded-bl-lg gap-4 w-full">
          <Button className="text-customOrange text-xl p-0" variant="none" asChild>
            <Link href="#">Leia o meu Blog</Link>
          </Button>
          <Button className="text-customOrange text-xl p-0" variant="none" asChild>
            <Link href="#">Github</Link>
          </Button>
          <Button className="text-customOrange text-xl p-0" variant="none" asChild>
            <Link href="#">Linkedin</Link>
          </Button>
        </div>

        <span className="bg-lightYellow w-[0.875rem] mx-1 flex-none" />
        <span className="bg-lightYellow w-[1.625rem] flex-none" />
      </section>
    </main>
  );
}
