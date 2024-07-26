import React from "react";
import Link from "next/link";
export default function HeroSocials() {
  return (
    <div className="absolute bg-red-100 h-full left-5 flex justify-between">
      <div className="rotate-90">
        <div className=""></div>
        <div className="flex items-center  bg-green-300 rotate-180">
          <Link href={""} className="py-10">
            Facebook
          </Link>
          <div className=""></div>
          <Link href={""}>Instagram</Link>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}
