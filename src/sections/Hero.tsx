import React from "react";
import Link from "next/link";
import HeroSocials from "@/components/HeroSocials";
export default function Hero() {
  return (
    <section className="bg-my_blue relative flex w-full justify-end bg-none bg-cover bg-left-bottom bg-no-repeat px-6 pt-56 md:min-h-[600px] md:bg-[url('/health-site-solutions-hero.webp')] md:pt-0">
      <div className="flex flex-col justify-end gap-6 text-end md:w-1/2 md:justify-center">
        <h1 className="text-5xl font-bold">
          Innovative Web Solutions for Healthcare
        </h1>
        <h3 className="text-xl font-semibold">
          Empowering Healthcare Professionals with Custom Website Design and
          Development Services
        </h3>
        <div className="flex justify-end pt-2">
          <Link href={""} className="main-btn flex w-fit items-center gap-2">
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
