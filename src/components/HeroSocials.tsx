import React from "react";
import Link from "next/link";

export default function HeroSocials() {
  return (
    <div className="absolute left-0 top-5 hidden h-[200px] w-full items-center justify-center gap-2 bg-[url('/health-site-solutions-hero.webp')] bg-cover md:left-5 md:top-auto md:flex md:h-full md:w-auto md:flex-col md:bg-none">
      <div className="h-0.5 w-full bg-white bg-opacity-50 backdrop-blur-sm md:h-full md:w-0.5"></div>

      <div className="flex gap-24 rounded bg-white bg-opacity-50 p-10 backdrop-blur-sm md:flex-col md:px-0 md:py-24">
        <Link
          target="_blank"
          href={"/www.facebook.com"}
          className="inline-block transform rounded bg-sky-50 px-4 py-2 font-semibold text-sky-500 transition-all hover:bg-sky-900 md:-rotate-90"
          aria-label="Visit Our Facebook Page"
        >
          Facebook
        </Link>
        <Link
          className="inline-block transform rounded bg-sky-50 px-4 py-2 font-semibold text-sky-500 transition-all hover:bg-sky-900 md:-rotate-90"
          href={"https://www.linkedin.com/company/health-web-experts/"}
          target="_blank"
          aria-label="Visit Our linkedin Page"
        >
          Linkedin
        </Link>
      </div>
      <div className="h-0.5 w-full bg-white bg-opacity-50 backdrop-blur-sm md:h-full md:w-0.5"></div>
    </div>
  );
}
