import React from "react";
import Link from "next/link";
import { FaLightbulb } from "react-icons/fa";
import { IoLogoWechat, IoDiamond } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";

export default function WhyUs() {
  return (
    <section className="custom-space bg-center-center relative bg-black bg-[url('/why-us/blue-bg.webp')] bg-fixed bg-repeat-x px-6 text-white">
      <div className="absolute left-0 top-0 h-full w-full bg-black opacity-50"></div>
      <div className="page-w flex flex-col items-start justify-between gap-16 md:flex-row">
        <div className="relative z-10 space-y-3 text-start md:w-1/2">
          <div className="w-fit rounded-full bg-green-100 px-6 py-1 text-sm font-bold text-green-700">
            <p>Why Us</p>
          </div>
          <h2 className="text-3xl font-bold">
            Why Choose Us for Your Medical Website Needs?
          </h2>
          <h3 className="text-lg font-semibold">
            High-Speed, Custom Websites for Healthcare
          </h3>
          <p className="text-justify">
            With years of web development experience, we create high-speed,
            custom-coded websites that rank well on search engines. Our sites
            are secure, scalable, and optimized for both performance and user
            experience. We specialize in{" "}
            <Link
              className="text-sky-300 hover:text-sky-300"
              href={"/services/seo-services-for-medical-websites"}
            >
              advanced SEO
            </Link>{" "}
            and responsive design for healthcare professionals, ensuring a
            professional online presence that helps you stand out. Trust us to
            deliver a website that exceeds your expectations and supports your
            success in the healthcare industry.
          </p>

          <div className="mt-5 flex justify-start pt-2">
            <Link
              href={"/about"}
              className="flex w-fit items-center gap-2 text-center text-sky-300 hover:text-sky-300 md:text-lg"
            >
              Discover more about us
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
        <div className="relative z-10 grid gap-10 md:w-1/2 md:grid-cols-2">
          <div className="">
            <div className="w-fit rounded border border-white bg-yellow-500 p-2 text-white">
              <FaLightbulb size={25} />
            </div>
            <h4 className="text-lg font-bold">Proven Experience</h4>
            <p className="font-light">
              Bringing Over 10 Years of Combined Experience in Web Development
            </p>
          </div>

          <div className="">
            <div className="w-fit rounded border border-white bg-sky-500 p-2 text-white">
              <IoLogoWechat size={25} />
            </div>
            <h4 className="text-lg font-bold">Exceptional Communication</h4>
            <p className="font-light">
              Clear and consistent communication to ensure your vision is
              realized.
            </p>
          </div>

          <div className="">
            <div className="w-fit rounded border border-white bg-emerald-500 p-2 text-white">
              <BiSupport size={25} />
            </div>
            <h4 className="text-lg font-bold">Ongoing Support</h4>
            <p className="font-light">
              Continuous support and maintenance to keep your website performing
              at its best.
            </p>
          </div>

          <div className="">
            <div className="w-fit rounded border border-white bg-purple-500 p-2 text-white">
              <IoDiamond size={25} />
            </div>
            <h4 className="text-lg font-bold">Quality Guarantee</h4>
            <p className="font-light">
              Commitment to delivering high-quality, reliable, and effective web
              solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
