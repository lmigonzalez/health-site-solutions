import React from "react";
import Link from "next/link";
import Image from "next/image";
import CustomSeparator from "./CustomSeparator";
export default function ServiceGrid() {
  const services = [
    {
      url: "secure-website",
      title: "Secure Website",
      description:
        "Security is a top priority. We implement the latest security measures to protect your site from threats, ensuring your data and your customers’ information are safe.",
    },

    {
      url: "expert-copywriting",
      title: "Expert Copywriting",
      description:
        "The right words can make a big difference. Our copywriting service ensures your website’s content is clear, compelling, and tailored to your audience, helping you communicate your message effectively.",
    },
    {
      url: "logo-design",
      title: "Logo Design Included",
      description:
        "If you don’t have a logo or need a refresh, we’ve got you covered. We create or integrate a logo that perfectly represents your brand and fits seamlessly with your website’s design.",
    },
    {
      url: "scheduling-integration",
      title: "Scheduling Integration",
      description:
        "Make it easy for your customers to book appointments directly through your website. We integrate user-friendly scheduling tools that sync with your calendar, simplifying the booking process.",
    },
    {
      url: "live-chat",
      title: "Live Chat",
      description:
        "Engage with your website visitors instantly with our live chat feature. Answer questions in real time, provide support, and guide potential customers, improving their experience and increasing conversions.",
    },
    {
      url: "hosting-maintenance",
      title: "Hosting and Maintenance",
      description:
        "We handle all the technical aspects, including hosting your website and keeping it updated. This means your website stays live and runs smoothly, with no hassle for you.",
    },
    {
      url: "analytics",
      title: "Analytics and Reporting",
      description:
        "Understand how your website is performing with our detailed yet easy-to-read reports. We track important metrics like visitor numbers, page views, and conversion rates, so you can see what’s working and where to improve.",
    },
  ];
  return (
    <div className="mt-16 px-6 md:px-0">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold">Extremely Fast Websites</h3>
          <div className="mt-5 space-y-2 md:text-lg">
            <p>
              A fast website keeps visitors happy and improves your ranking in
              search engines. We focus on every aspect of speed optimization to
              ensure your site loads extremely fast, achieving an average score
              of over 90 on PageSpeed Insights. This includes compressing and
              converting images to WebP format for faster load times.
            </p>
            <p>
              By enhancing your website’s performance, we boost user engagement,
              reduce bounce rates, and improve overall satisfaction. Our goal is
              to deliver a seamless browsing experience that keeps your visitors
              coming back.
            </p>
          </div>

          <div className="">
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
        <div className="flex justify-end">
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

      <div className="grid gap-10 md:grid-cols-2">
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
              Our designers craft unique and tailored designs for each website
              using Figma, ensuring that your site perfectly reflects your brand
              and stands out in a crowded market. We create designs that are not
              only visually appealing but also fully responsive, meaning they
              adapt seamlessly to any device, from desktops to mobile phones.
            </p>
            <p>
              This approach ensures an optimal user experience, with every
              element thoughtfully placed to enhance usability and engagement.
              By focusing on both aesthetics and functionality, we help you make
              a memorable impression and connect with your audience effectively.
            </p>
          </div>

          <div className="">
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

      <div className="grid gap-10 md:grid-cols-2">
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold">
            Custom Hand-Coded Solutions
          </h3>
          <div className="mt-5 space-y-2 md:text-lg">
            <p>
              Custom hand-coding ensures that your website is crafted with the
              utmost precision and flexibility. We build your site using
              advanced technologies like Astro or Next.js, avoiding the
              limitations of page builders to deliver a solution that is
              uniquely tailored to your needs. This approach allows us to create
              a website with superior performance, robust security, and complete
              control over every aspect of the design and functionality.
            </p>
            <p>
              By focusing on custom code, we ensure that your site is optimized
              for speed and efficiency while perfectly aligning with your brand
              and business goals. Our meticulous hand-coding process results in
              a high-quality, bespoke website that stands out and meets your
              specific requirements.
            </p>
          </div>

          <div className="">
            <Link
              href={"/services"}
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
        <div className="flex justify-end">
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

      <div className="grid gap-10 md:grid-cols-2">
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
              We implement comprehensive on-page SEO strategies to enhance your
              website’s visibility and performance in search engines. Our
              approach includes thorough keyword research and optimization,
              ensuring that your content aligns with what users are searching
              for.
            </p>
            <p>
              We meticulously craft meta tags, optimize headings, and use
              structured data to improve how search engines understand and rank
              your site. By adhering to Google&apos;s best practices, we aim to
              boost your rankings and drive more organic traffic to your
              website, helping you stand out from the competition and reach a
              larger audience.
            </p>
          </div>

          <div className="">
            <Link
              href={"/services"}
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

      <div className="custom-space">
        <h2 className="text-center text-3xl font-semibold">
          Additional Services
        </h2>
        <p className="m-auto max-w-[800px] text-center md:text-lg">
          Along with our core website development, you’ll get extra features
          designed to enhance your site. This includes robust security, expert
          copywriting, custom logo design, scheduling integration, live chat,
          reliable hosting and maintenance, and analytics to track your site’s
          performance.
        </p>
        <div className="mt-10 grid w-full gap-5 px-6 md:grid-cols-2 md:px-0">
          {services.map((item, index) => {
            return (
              <Link href={`/services/${item.url}`} key={index}>
                <div className="group relative min-h-[150px] cursor-pointer rounded border-x-2 border-sky-500 bg-white p-4 transition-all hover:shadow-xl">
                  <div className="flex flex-col items-start justify-start text-start">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-base font-normal">{item.description}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
