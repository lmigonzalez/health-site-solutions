import React from "react";
import Link from "next/link";
export default function ServicesOverview() {
  const webServices = [
    {
      title: "Tailored Websites:",
      description:
        "Custom-designed websites to meet your specific requirements and goals, ensuring a unique online presence.",
    },
    {
      title: "Mobile-Friendly, Responsive Design:",
      description:
        "Websites that provide an excellent user experience across all devices, from desktops to smartphones.",
    },
    {
      title: "Utilizes the Latest Technology Stack:",
      description:
        "Fast, secure, and scalable websites using cutting-edge technology.",
    },
    {
      title: "Expert SEO Services:",
      description:
        "Improve your online visibility and reach more patients with our comprehensive SEO strategies.",
    },
    {
      title: "Medical Copywriting:",
      description:
        "Create compelling and informative content tailored to the healthcare industry.",
    },
    {
      title: "Logo Design: ",
      description:
        "Establish a strong, professional brand identity with a custom logo.",
    },
    {
      title: "Hosting and Maintenance:",
      description:
        "Reliable hosting and ongoing maintenance to keep your website running smoothly.",
    },
    {
      title: "Social Media Management:",
      description:
        "Enhance your online presence and engagement through effective social media strategies.",
    },
    {
      title: "Speed Optimization:",
      description:
        "Ensure faster loading times and a better user experience with our speed optimization services.",
    },
    {
      title: "Additional Development Services:",
      description:
        "Full support for all your online needs, including custom features and integrations.",
    },
    {
      title: "Analytics and Reporting:",
      description:
        "Gain valuable insights with detailed analytics and reporting to track your website's performance.",
    },
    {
      title: "E-commerce Solutions:",
      description:
        "Robust e-commerce capabilities to facilitate online sales and streamline transactions.",
    },
  ];

  return (
    <section className="custom-space px-6">
      <div className="m-auto mb-10 w-[700px] max-w-full space-y-3 text-center">
        <div className="m-auto w-fit rounded-full bg-green-100 px-6 py-1 text-sm font-bold text-green-500">
          <p>Services</p>
        </div>
        <h2 className="text-3xl font-bold">Our Services</h2>
        <h3 className="text-lg font-semibold">
          Comprehensive Web Solutions Tailored for Healthcare Providers
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
          href={""}
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
