import React from "react";
import Link from "next/link";

export default function HeroSocials() {
  return (
    <div className="absolute h-full left-5 flex justify-center items-center flex-col gap-2">
      <div className="h-full w-0.5 bg-white bg-opacity-50 backdrop-blur-sm"></div>

      <div className="flex flex-col gap-24 bg-white bg-opacity-50 backdrop-blur-sm rounded py-24 px-0">
        <Link
          href={""}
          className="transform -rotate-90 bg-sky-50 text-sky-500 hover:bg-sky-900 transition-all py-2 px-4 inline-block rounded font-semibold"
        >
          Facebook
        </Link>
        <Link
          className="transform -rotate-90 bg-sky-50 text-sky-500 hover:bg-sky-900 transition-all py-2 px-4 inline-block rounded font-semibold"
          href={""}
        >
          Instagram
        </Link>
      </div>
      <div className="h-full w-0.5 bg-white bg-opacity-50 backdrop-blur-sm"></div>
    </div>
  );
}
