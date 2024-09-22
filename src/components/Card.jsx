import { Badge } from "./ui/badge";

export function Card() {
  return (
    <a href="#" className="bg-lightYellow rounded-sm p-4 cursor-pointer">
      <img src="https://placeholder.co/300" alt="" />

      <div className="mt-2">
        <h6 className="mb-2">Test Post #1</h6>
        <div className="flex gap-2">
          <Badge className="bg-darkYellow text-black hover:bg-darkYellow">início</Badge>
          <Badge className="bg-darkYellow text-black hover:bg-darkYellow">about-me</Badge>
          <Badge className="bg-darkYellow text-black hover:bg-darkYellow">tbt</Badge>
        </div>
      </div>
    </a>
  );
}
