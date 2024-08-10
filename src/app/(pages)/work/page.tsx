import React from "react";
import CustomHeader from "@/components/CustomHeader";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Portfolio | Health Web Experts",
  description:
    "Browse our portfolio to see the successful healthcare web development and design projects completed by Health Web Experts. Discover how we help hospitals, clinics, and other healthcare providers enhance their online presence with custom websites, SEO, and more.",
};
export default function Page() {
  return (
    <main className="pt-16 md:px-6">
      <CustomHeader
        title="Previous Work"
        description="Explore our portfolio of successful projects at Health Web Experts, showcasing our expertise in healthcare web development. From custom websites to secure medical portals, our previous work demonstrates our commitment to quality and innovation. See how we've helped healthcare providers enhance their online presence and achieve their goals."
      />

      <div className="page-w custom-space">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="flex items-center justify-center">
            <Image
              src={"/work/faith-is-health.webp"}
              alt="faith-is-health"
              width={2000}
              height={1400}
            />
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-semibold">
              Faith is Health - Health Center Website
            </h3>
            <p>
              Faith is Health is a modern health center based in Miami,
              dedicated to providing comprehensive care and support to the local
              community. The website was designed to reflect the center&apos;s
              commitment to health and wellness while offering a seamless user
              experience.
            </p>
            <ul className="list-disc space-y-1">
              <li>
                {" "}
                <b>Responsive Design:</b> The website is fully responsive,
                ensuring a smooth and engaging experience on all devices, from
                desktops to smartphones.
              </li>
              <li>
                {" "}
                <b>Modern Aesthetic:</b> The design features a clean,
                contemporary look with a focus on usability and visual appeal,
                aligning with the health center&apos;s brand identity.
              </li>
              <li>
                {" "}
                <b>Animations:</b> Subtle animations enhance the user
                experience, providing dynamic visual feedback and making
                interactions more engaging.
              </li>
              <li>
                {" "}
                <b>Built with Next.js:</b> Utilizing Next.js, the website
                benefits from optimized performance, fast load times, and a
                scalable architecture.
              </li>
            </ul>

            <div className="">
              <Link
                className="flex items-center gap-0.5 text-sky-500 transition-all hover:gap-1"
                target="_blank"
                href={"https://www.faithishealth.com/"}
              >
                See Website{" "}
                <MdKeyboardDoubleArrowRight size={20} className="mt-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
