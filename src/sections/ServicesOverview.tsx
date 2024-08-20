import React from "react";
import Link from "next/link";
export default function ServicesOverview() {
  const webServices = [
    {
      title: "Unique and Modern Design:",
      description:
        "We create designs that are visually appealing and tailored to your brand.",
    },
    {
      title: "Responsive Layout:",
      description:
        "Your website will look great on all devices, from smartphones to desktops.",
    },
    {
      title: "Speed Optimization:",
      description:
        "Fast loading times to keep visitors engaged and improve their experience.",
    },
    {
      title: "Secure Website:",
      description:
        "We ensure your website is safe from hackers and keeps your data secure.",
    },
    {
      title: "SEO:",
      description:
        "We help your website appear higher in search engine results, so more people can find you.",
    },
    {
      title: "Expert Copywriting:",
      description:
        "Professional content that communicates your message clearly and effectively.",
    },
    {
      title: "Logo Design Included:",
      description: "We create or integrate a logo that represents your brand.",
    },
    {
      title: "Scheduling Integration:",
      description:
        "Allow your customers to easily book appointments directly from your website.",
    },
    {
      title: "Live Chat:",
      description:
        "Engage with your visitors in real time through a built-in chat feature.",
    },
    {
      title: "Hosting and Maintenance:",
      description:
        "We take care of your website's hosting and keep it running smoothly.",
    },
    {
      title: "Social Media Management:",
      description:
        "We help manage your social media profiles to keep your audience engaged.",
    },
    {
      title: "Analytics and Reporting:",
      description:
        "We provide easy-to-understand reports on how your website is performing.",
    },
  ];

  return (
    <section className="custom-space px-6">
      <div className="m-auto mb-10 w-[700px] max-w-full space-y-3 text-center">
        <div className="m-auto w-fit rounded-full bg-green-100 px-6 py-1 text-sm font-bold text-green-700">
          <p>Services</p>
        </div>
        <h2 className="text-3xl font-bold">What We Offer</h2>
        <h3 className="text-lg font-semibold">
          Clear, Complete, and Effective Solutions for Your Business
        </h3>
      </div>

      <div className="page-w grid gap-5 sm:grid-cols-3">
        {webServices.map((item, index) => {
          return (
            <div
              key={index}
              className="rounded border-x-2 border-green-500 bg-white p-3 shadow"
            >
              {" "}
              <div className="space-y-1">
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-5 flex justify-center pt-2">
        <Link
          href={"/services"}
          className="flex w-fit items-center gap-2 text-lg font-bold text-sky-500 transition-all hover:text-sky-900"
        >
          Learn More About Our Services
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
    </section>
  );
}
