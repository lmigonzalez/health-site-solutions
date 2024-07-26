import React from "react";
import Link from "next/link";
import HeroSocials from "@/components/HeroSocials";
export default function Hero() {
  return (
    <section className="bg-my_blue w-full min-h-[600px] px-6 bg-[url('/health-site-solutions-hero.webp')] bg-bottom bg-cover bg-no-repeat flex justify-end relative">
      <div className="flex justify-center flex-col w-1/2 text-end gap-6">
        <h1 className="text-5xl font-bold">
          Innovative Web Solutions for Healthcare
        </h1>
        <h3 className="text-xl font-semibold">
          Empowering Healthcare Professionals with Custom Website Design and
          Development Services
        </h3>
        <div className="pt-2 flex justify-end">
          <Link href={""} className="main-btn flex items-center gap-2 w-fit">
            Get Started Today{" "}
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
