import React from "react";
import Image from "next/image";
import { FaLightbulb } from "react-icons/fa";
import { IoLogoWechat, IoDiamond } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";

export default function WhyUs() {
  return (
    <section className="relative bg-[url('/bg-image-2.webp')] bg-fixed bg-left-bottom bg-no-repeat text-white">
      <div className="absolute left-0 top-0 h-full w-full bg-black opacity-80"></div>
      <div className="page-w flex items-start justify-between gap-16 px-4 py-20">
        <div className="relative z-10 space-y-3 text-start md:w-1/2">
          <div className="w-fit rounded-full bg-green-100 px-6 py-1 text-sm font-bold text-green-500">
            <p>Why Us</p>
          </div>
          <h2 className="text-3xl font-bold">Why Choose Us</h2>
          <h3 className="text-lg font-semibold">
            Exceptional Service and Expertise in Healthcare Web Development
          </h3>
          <p className="text-justify">
            With years of experience in the healthcare industry, we understand
            the unique challenges and requirements of medical professionals. Our
            team is dedicated to providing custom web solutions that not only
            meet but exceed your expectations.
          </p>
          <p className="text-justify">
            From SEO optimization to responsive design, we ensure your website
            stands out in a competitive market. Trust us to deliver a secure,
            scalable, and user-friendly website that enhances your online
            presence and helps you connect with more patients.
          </p>
        </div>
        <div className="relative z-10 grid gap-10 md:w-1/2 md:grid-cols-2">
          <div className="">
            <div className="w-fit rounded border border-white bg-yellow-500 p-2 text-white">
              <FaLightbulb size={25} />
            </div>
            <h4 className="text-lg font-bold">Proven Experience</h4>
            <p className="font-light">
              Over 10 years of combined experience in healthcare web
              development.
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
