import React from "react";
import Image from "next/image";
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
          <h2 className="text-3xl font-bold">Why Choose Us</h2>
          <h3 className="text-lg font-semibold">
            High-Speed, Custom Websites for Healthcare
          </h3>
          <p className="text-justify">
            With years of web development experience, we specialize in creating
            high-speed, custom-coded websites designed to excel in search engine
            rankings. Our expertise ensures that each website we build is not
            only secure and scalable but also optimized for performance and user
            experience. We focus on delivering solutions that meet the specific
            needs of healthcare professionals, from advanced SEO optimization to
            responsive design that looks great on any device.
          </p>
          <p className="text-justify">
            Our commitment is to provide a professional online presence that
            helps you stand out in a competitive market. By combining quality
            custom code with strategic design, we enhance your ability to
            connect with more patients and achieve your business goals. Trust us
            to deliver a website that exceeds your expectations and supports
            your success in the healthcare industry.
          </p>
        </div>
        <div className="relative z-10 grid gap-10 md:w-1/2 md:grid-cols-2">
          <div className="">
            <div className="w-fit rounded border border-white bg-yellow-500 p-2 text-white">
              <Image
                src={"/why-us/speed.png"}
                alt="Speed Icon: Icon representing website speed with a fast-moving arrow or gauge."
                width={25}
                height={25}
              />
            </div>
            <h4 className="text-lg font-bold">High-Speed Performance</h4>
            <p className="font-light">
              Our websites are optimized to load extremely fast, achieving an
              average score of over 90 on PageSpeed Insights.
            </p>
          </div>

          <div className="">
            <div className="w-fit rounded border border-white bg-sky-500 p-2 text-white">
              <Image
                src={"/why-us/seo.png"}
                alt="SEO Icon: Icon symbolizing search engine optimization, featuring a magnifying glass over a graph or web elements."
                width={25}
                height={25}
              />
            </div>
            <h4 className="text-lg font-bold">SEO Optimization</h4>
            <p className="font-light">
              We follow Google&apos;s best practices and conduct thorough keyword
              research to ensure your website ranks above the competition.
            </p>
          </div>

          <div className="">
            <div className="w-fit rounded border border-white bg-emerald-500 p-2 text-white">
              <Image
                src={"/why-us/code.png"}
                alt="Code Icon: Icon illustrating hand-coding or programming, such as code brackets or a coding terminal."
                width={25}
                height={25}
              />
            </div>
            <h4 className="text-lg font-bold">Hand-Coded Excellence</h4>
            <p className="font-light">
              Every website is custom hand-coded using technologies like Astro
              or Next.js, avoiding page builders for maximum performance and
              flexibility.
            </p>
          </div>

          <div className="">
            <div className="w-fit rounded border border-white bg-purple-500 p-2 text-white">
              <Image
                src={"/why-us/design.png"}
                alt="Design Icon: Icon denoting unique web design, with a paintbrush or design palette."
                width={25}
                height={25}
              />
            </div>
            <h4 className="text-lg font-bold">Unique Design</h4>
            <p className="font-light">
              Our designers craft a unique and tailored design for each website,
              ensuring it perfectly reflects your brand and stands out from the
              rest.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
