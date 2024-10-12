import Link from "next/link";

export function PostCard() {
  return (
    <Link href="#" className="bg-lightYellow p-4 cursor-pointer font-lexend">
      <div className="flex items-start">
        <div className="mr-10">
          <h6 className="mb-2 font-bold text-xl">
            If You Want to Be a Creator, Delete All (But Two) Social Media Platforms
          </h6>
          <p>In October 2022, during the whole Elon Musk debacle, I finally deleted Twitter from my phone.</p>
        </div>

        <img className="flex-none" src="https://placeholder.co/132x100" alt="" />
      </div>

      <div className="flex gap-2 mt-2">
        <span>Sep 43</span>
        <span>1.8k</span>
        <span>3000+</span>
      </div>
    </Link>
  );
}
