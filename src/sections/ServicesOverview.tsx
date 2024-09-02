import React from "react";
import Link from "next/link";
import Image from "next/image";
const data = [
  {
    title: "Blazing-Fast Websites",
    description:
      "Experience lightning-fast website speeds that keep your healthcare practice ahead of the competition.",
    img: "fast",
    url: "/services/speed-optimization",
  },
  {
    title: "Unique & Responsive Design",
    description:
      "Stand out with custom designs that look great on any device, ensuring a seamless experience for your patients.",
    img: "design",
    url: "/services/unique-and-responsive-design",
  },
  {
    title: "Custom Hand-Coded Solutions",
    description:
      "Receive bespoke web solutions crafted from scratch to perfectly fit your healthcare needs.",
    img: "code",
    url: "/services/custom-website",
  },
  {
    title: "Expert On-Page SEO",
    description:
      "Boost your online visibility with expertly optimized pages that attract and engage your target audience.",
    img: "seo",
    url: "/services/on-page-seo-optimization",
  },
];

export default function ServicesOverview() {
  return (
    <section className="custom-space px-6">
      <div className="m-auto mb-10 w-[700px] max-w-full space-y-3 text-center">
        <div className="m-auto w-fit rounded-full bg-green-100 px-6 py-1 text-sm font-bold text-green-700">
          <p>Services</p>
        </div>
        <h2 className="text-3xl font-bold">What We Offer</h2>
        <h3 className="font-semibold md:text-lg">
          Clear, Complete, and Effective Solutions for Your Business
        </h3>
      </div>

      <div className="page-w grid gap-5 md:grid-cols-4">
        {data.map((item, index) => {
          return (
            <div key={index} className="rounded border-x-2 bg-white p-4 shadow">
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="">
                  <Image
                    src={`/services-section/${item.img}.png`}
                    alt={`Blue Icon Representing the ${item.title} Service`}
                    width={50}
                    height={50}
                  />
                </div>
                <Link href={item.url}>
                  <h3 className="text-center text-base font-bold">
                    {item.title}
                  </h3>
                </Link>

                <p className="text-center">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-5 flex justify-center pt-2">
        <Link
          href={"/services"}
          className="flex w-fit items-center gap-2 text-center font-bold text-sky-700 transition-all hover:text-sky-900 md:text-lg"
        >
          Discover Our Additional Services
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="hidden size-6 md:block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
