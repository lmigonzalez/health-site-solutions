import React from "react";
import { FaLightbulb } from "react-icons/fa";
import { IoLogoWechat, IoDiamond } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";

export default function WhyUs() {
  return (
    <section className="bg-my_black text-white">
      <div className="flex items-start justify-between gap-16 px-4 py-20 page-w">
        <div className="md:w-1/2 text-start space-y-3">
          <div className="bg-green-100 text-green-500 rounded-full py-1 px-6 text-sm font-bold w-fit">
            <p>Why Choose Us</p>
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
        <div className="grid md:grid-cols-2 gap-10 md:w-1/2">
          <div className="">
            <div className="bg-yellow-500 w-fit p-2 rounded border border-white text-white">
              <FaLightbulb size={25} />
            </div>
            <h4 className="font-bold text-lg">Proven Experience</h4>
            <p className="font-light">
              Over 10 years of combined experience in healthcare web
              development.
            </p>
          </div>

          <div className="">
            <div className="bg-sky-500 w-fit p-2 rounded border border-white text-white">
              <IoLogoWechat size={25} />
            </div>
            <h4 className="font-bold text-lg">Exceptional Communication</h4>
            <p className="font-light">
              Clear and consistent communication to ensure your vision is
              realized.
            </p>
          </div>

          <div className="">
            <div className="bg-emerald-500 w-fit p-2 rounded border border-white text-white">
              <BiSupport size={25} />
            </div>
            <h4 className="font-bold text-lg">Ongoing Support</h4>
            <p className="font-light">
              Continuous support and maintenance to keep your website performing
              at its best.
            </p>
          </div>

          <div className="">
            <div className="bg-purple-500 w-fit p-2 rounded border border-white text-white">
              <IoDiamond size={25} />
            </div>
            <h4 className="font-bold text-lg">Quality Guarantee</h4>
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
