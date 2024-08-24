import React from "react";
import Link from "next/link";
import HeroSocials from "@/components/HeroSocials";
export default function Hero() {
  return (
    <section className="bg-my_blue relative flex min-h-[600px] w-full items-center justify-center bg-[url('/health-site-solutions-hero.webp')] bg-cover bg-left-bottom bg-no-repeat px-6 md:justify-end md:pt-0">
      <div className="flex h-fit flex-col items-center justify-center gap-6 rounded border bg-white bg-opacity-50 p-4 text-center backdrop-blur-sm md:w-1/2 md:items-end md:border-none md:bg-transparent md:text-end">
        <h1 className="text-2xl font-bold md:text-4xl">
          Expert Healthcare Web Design and Development Services
        </h1>
        <h2 className="md:text-lg">
        Professional Medical Websites: Custom{" "}
          <b>Hand-Coded Sites</b> Starting at $750 — No Page Builders or
          WordPress
        </h2>
        <div className="flex justify-end pt-2">
          <Link
            href={"/contact"}
            className="main-btn flex w-fit items-center gap-2"
          >
            Get Started Today
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </div>
      <HeroSocials />
    </section>
  );
}
