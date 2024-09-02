import React from "react";
import Link from "next/link";
import Image from "next/image";
import CustomSeparator from "./CustomSeparator";
const services = [
  {
    url: "secure-website",
    title: "Secure Website",
    description:
      "Security is paramount. We implement the latest security measures to protect your site, ensuring your data and your patients’ information are safe.",
  },

  {
    url: "expert-copywriting",
    title: "Expert Copywriting",
    description:
      "Content is king. Our expert copywriting service ensures your website’s content is clear, compelling, and tailored to your audience, helping you communicate your message effectively.",
  },
  {
    url: "logo-design",
    title: "Logo Design Included",
    description:
      "A logo is a key part of your brand. If you don’t have one or need a refresh, we can create or integrate a logo that perfectly represents your practice and fits seamlessly with your medical website design.",
  },
  {
    url: "scheduling-integration",
    title: "Scheduling Integration",
    description:
      "Make it easy for patients to book appointments directly through your website. We integrate user-friendly scheduling tools that sync with your calendar, simplifying the booking process.",
  },
  {
    url: "live-chat",
    title: "Live Chat",
    description:
      "Engage with your website visitors instantly with our live chat feature. Answer questions in real-time, provide support, and guide potential patients, improving their experience and increasing conversions.",
  },
  {
    url: "hosting-maintenance",
    title: "Hosting and Maintenance",
    description:
      "We handle all the technical aspects, including hosting your website and keeping it updated. This means your site stays live and runs smoothly, with no hassle for you.",
  },
  {
    url: "analytics",
    title: "Analytics and Reporting",
    description:
      "Get insights into your family practice website performance with our detailed yet easy-to-read reports. We track important metrics like visitor numbers, page views, and conversion rates, so you can see what’s working and where to improve.",
  },
];
export default function ServiceGrid() {
  return (
    <div className="mt-16 px-6 md:px-0">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="order-2 flex flex-col md:order-1">
          <h3 className="text-2xl font-semibold">Extremely Fast Websites</h3>
          <div className="mt-5 space-y-2 md:text-lg">
            <p>
              A fast website is crucial for keeping visitors engaged and
              improving your ranking in search engines. We focus on every aspect
              of speed optimization, ensuring your site loads extremely fast,
              with an average score of over 90 on PageSpeed Insights. By
              enhancing your <b>medical website design</b> performance, we boost
              user engagement, reduce bounce rates, and improve overall
              satisfaction.
            </p>
          </div>

          <div className="mt-5">
            <Link
              href={"/services/speed-optimization"}
              className="flex w-fit items-center gap-2 font-bold text-sky-700 transition-all hover:text-sky-900 md:text-lg"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
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
        <div className="order-1 flex justify-end md:order-2">
          <Image
            src={"/services/page-speed.png"}
            alt="speed image"
            width={400}
            height={400}
            className="aspect-square rounded"
          />
        </div>
      </div>

      <CustomSeparator />

      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="flex justify-start">
          <Image
            src={"/services/design.png"}
            alt="design icon"
            width={400}
            height={400}
            className="aspect-square rounded"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold">
            Unique and Responsive Design
          </h3>
          <div className="mt-5 space-y-2 md:text-lg">
            <p>
              Our designers craft unique and tailored web design for{" "}
              <Link href={"/services/medical-practice-website-design"}>
                medical practices
              </Link>{" "}
              using Figma, ensuring that your site perfectly reflects your brand
              and stands out in a crowded market. Every design is fully
              responsive, meaning it adapts seamlessly to any device, ensuring
              an optimal user experience across desktops, tablets, and mobile
              phones.
            </p>
          </div>

          <div className="mt-5">
            <Link
              href={"/services/unique-and-responsive-design"}
              className="flex w-fit items-center gap-2 font-bold text-sky-700 transition-all hover:text-sky-900 md:text-lg"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
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
      </div>

      <CustomSeparator />

      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="order-2 flex flex-col md:order-1">
          <h3 className="text-2xl font-semibold">
            Custom Hand-Coded Solutions
          </h3>
          <div className="mt-5 space-y-2 md:text-lg">
            <p>
              Custom hand-coding allows us to create highly specialized{" "}
              <b>medical web design</b> solutions using advanced technologies
              like Astro or Next.js. This ensures your site is not just another
              template but a uniquely tailored website that aligns with your
              specific needs. We focus on creating a <b>doctor website</b> that
              offers superior performance, robust security, and complete control
              over every aspect of the design and functionality.
            </p>
          </div>

          <div className="mt-5">
            <Link
              href={"/services/custom-website"}
              className="flex w-fit items-center gap-2 font-bold text-sky-700 transition-all hover:text-sky-900 md:text-lg"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
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
        <div className="order-1 flex justify-end md:order-2">
          <Image
            src={"/services/code.png"}
            alt="code icon"
            width={400}
            height={400}
            className="rounded"
          />
        </div>
      </div>

      <CustomSeparator />

      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="flex justify-start">
          <Image
            src={"/services/seo.png"}
            alt="seo icon"
            width={400}
            height={400}
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold">On-Page SEO Optimization</h3>
          <div className="mt-5 space-y-2 md:text-lg">
            <p>
              Our advanced on-page SEO strategies are meticulously crafted to
              boost your <b>healthcare website&apos;s</b> visibility and
              performance in search engines. We align your website design with
              user search intent by conducting in-depth keyword research and
              precise optimization. This approach not only elevates your search
              engine rankings but also drives targeted organic traffic, ensuring
              that your website stands out in a competitive healthcare
              landscape.
            </p>
          </div>

          <div className="mt-5">
            <Link
              href={"/services/on-page-seo-optimization"}
              className="flex w-fit items-center gap-2 font-bold text-sky-700 transition-all hover:text-sky-900 md:text-lg"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
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
      </div>

      <CustomSeparator />

      <div className="custom-space m-auto max-w-[800px]">
        <h2 className="mb-5 text-2xl font-semibold">Additional Services</h2>
        <p className="">
          In addition to our core web design services, we offer a range of
          additional features that enhance your{" "}
          <Link href={"/services/healthcare-website-redesign"}>
            medical web design
          </Link>{" "}
          experience. These services are designed to add value to your website,
          making it a powerful tool for your practice.
        </p>
        <div className="custom-space m-auto max-w-[800px] md:px-0">
          <ul className="list-image-[url(/icons/check.png)] space-y-5 pl-5 md:pl-0">
            {services.map((item, index) => {
              return (
                <li key={index}>
                  <h3 className="inline-block font-semibold">{item.title}: </h3>{" "}
                  {item.description}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
