import React from "react";
import CustomHeader from "@/components/CustomHeader";
import Link from "next/link";
import Image from "next/image";
export default function Page() {
  return (
    <main className="py-24">
      {" "}
      <CustomHeader
        title="About Us"
        description="Welcome to HealthSiteSolutions.com, where we specialize in crafting tailored web solutions for the healthcare industry. Our team of experts is dedicated to helping healthcare providers improve their online presence through innovative design, advanced technology, and personalized service. Learn more about our mission, values, and the talented professionals who make it all happen."
      />
      <div className="page-w mt-10">
        <div className="">
          <h2 className="text-center text-3xl font-bold">Our Team</h2>
          <p className="m-auto max-w-[700px] text-center text-lg font-semibold">
            Our team at HealthSiteSolutions.com is a group of passionate
            professionals with a diverse range of expertise in web development,
            design, SEO, and digital marketing. We are committed to providing
            exceptional service and delivering high-quality results for our
            clients. Meet some of our key team members:
          </p>
          <ul className="my-10 grid grid-cols-3 gap-10">
            <li className="flex flex-col items-center justify-center gap-2 rounded border-l-2 border-green-500 p-6 text-center shadow">
              <Image src={"/boy.png"} alt="" width={50} height={50} />
              <p className="rounded bg-green-100 px-4 py-1 text-sm font-semibold text-green-500">
                Founder & CEO
              </p>
              <h5 className="font-semibold">John Doe</h5>
              <p className="text-sm">
                With over 15 years of experience in web development and a
                background in healthcare IT, John leads our team with a vision
                to revolutionize the digital presence of healthcare providers.
              </p>
            </li>
            <li className="flex flex-col items-center justify-center gap-2 rounded p-6 text-center shadow">
              <Image src={"/boy.png"} alt="" width={50} height={50} />
              <p className="rounded bg-green-100 px-4 py-1 text-sm font-semibold text-green-500">
                Founder & CEO
              </p>
              <h5 className="font-semibold">John Doe</h5>
              <p className="text-sm">
                With over 15 years of experience in web development and a
                background in healthcare IT, John leads our team with a vision
                to revolutionize the digital presence of healthcare providers.
              </p>
            </li>
            <li className="flex flex-col items-center justify-center gap-2 rounded border-r-2 border-green-500 p-6 text-center shadow">
              <Image src={"/boy.png"} alt="" width={50} height={50} />
              <p className="rounded bg-green-100 px-4 py-1 text-sm font-semibold text-green-500">
                Founder & CEO
              </p>
              <h5 className="font-semibold">John Doe</h5>
              <p className="text-sm">
                With over 15 years of experience in web development and a
                background in healthcare IT, John leads our team with a vision
                to revolutionize the digital presence of healthcare providers.
              </p>
            </li>
          </ul>
        </div>

        <div className="my-10">
          <h2 className="text-center text-3xl font-bold">Our Partners</h2>
          <p className="m-auto max-w-[700px] text-center text-lg font-semibold">
            At HealthSiteSolutions.com, we believe in the power of
            collaboration. We have built strong partnerships with industry
            leaders and technology providers to offer our clients the best
            possible solutions. Our partners include:
          </p>
        </div>

        <div className="my-10">
          <h2 className="text-center text-3xl font-bold">
            Why We Choose the Healthcare Industry
          </h2>
          <p className="m-auto max-w-[700px] text-center text-lg font-semibold">
            The healthcare industry is a vital and dynamic field that requires a
            specialized approach to web development and design. At
            HealthSiteSolutions.com, we chose to focus on healthcare because:
          </p>
        </div>

        <div className="my-10">
          <h2 className="text-center text-3xl font-bold">Our Mission</h2>
          <p className="m-auto max-w-[700px] text-center text-lg font-semibold">
            Our mission at HealthSiteSolutions.com is to empower healthcare
            providers with exceptional digital solutions that enhance their
            online presence, improve patient engagement, and drive business
            growth. We are dedicated to:
          </p>

          <ul className="mt-5 grid grid-cols-4 gap-5">
            <li className="flex flex-col gap-1 rounded bg-green-100 p-4 text-green-500">
              <b>Excellence:</b>{" "}
              <p className="text-sm font-semibold">
                {" "}
                Delivering high-quality web development and design services that
                exceed our clients&apos; expectations.
              </p>{" "}
            </li>
            <li className="flex flex-col gap-1 rounded bg-green-100 p-4 text-green-500">
              <b>Partnership:</b>{" "}
              <p className="text-sm font-semibold">
                Building long-term relationships with our clients based on
                trust, collaboration, and mutual success.
              </p>
            </li>
            <li className="flex flex-col gap-1 rounded bg-green-100 p-4 text-green-500">
              <b>Innovation:</b>{" "}
              <p className="text-sm font-semibold">
                Continuously seeking out new technologies and methods to keep
                our clients at the cutting edge of digital healthcare.
              </p>
            </li>
            <li className="flex flex-col gap-1 rounded bg-green-100 p-4 text-green-500">
              <b>Community:</b>{" "}
              <p className="text-sm font-semibold">
                Supporting the healthcare community by providing resources,
                expertise, and services that contribute to better healthcare
                outcomes.
              </p>
            </li>
          </ul>

          <div className="my-10">
            {" "}
            <p>
              We are proud to serve a wide range of healthcare providers,
              including hospitals, clinics, practices, dentists, laboratories,
              pharmacies, startups, telehealth providers, urgent care centers,
              rehab centers, home health agencies, mental health professionals,
              nursing homes, and medical supply companies.
            </p>
            <p>
              Thank you for considering HealthSiteSolutions.com as your partner
              in digital transformation. We look forward to working with you to
              create a powerful and effective online presence for your
              healthcare practice.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
