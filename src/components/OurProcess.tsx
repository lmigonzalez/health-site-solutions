import React from "react";
import Image from "next/image";
export default function OurProcess() {
  const process = [
    {
      step: 1,
      title: "Discovery and Consultation",
      description:
        "We begin by understanding your needs, goals, and challenges through an initial consultation. We gather information about your practice, target audience, and specific requirements, allowing us to tailor our services to meet your unique needs.",
    },
    {
      step: 2,
      title: "Planning and Strategy",
      description:
        "Based on the insights from our consultation, we develop a comprehensive plan and strategy. This includes defining the project scope, setting timelines, and identifying key milestones. We ensure all aspects of the project, including mobile-friendly, responsive design and expert SEO services, are aligned with your objectives.",
    },
    {
      step: 3,
      title: "Design and Development",
      description:
        "Our creative team designs your website, logo, and other digital assets, focusing on a visually appealing and user-friendly design that reflects your brand. Once the design is approved, our developers bring it to life using the latest technologies, ensuring a mobile-friendly, responsive design.",
    },
    {
      step: 4,
      title: "Content Creation and Review",
      description:
        "Our professional medical copywriting team crafts compelling and informative content that engages your audience and builds trust. We present the developed site to you for review, incorporating your feedback and making necessary revisions to ensure the final product meets your expectations.",
    },
    {
      step: 0,
      title: "",
      description: "",
    },

    {
      step: 5,
      title: "Testing, Launch, and Ongoing Support",
      description:
        "Before launching, we conduct thorough testing to ensure your website is fully functional, secure, and optimized. Once everything is approved, we launch your website and handle all aspects of deployment. Post-launch, we provide ongoing support and maintenance to keep your site running smoothly, with continuous improvements based on data and user feedback.",
    },
  ];
  return (
    <div className="page-w mt-24">
      <h2 className="text-center text-3xl font-bold">Our Process</h2>
      <p className="m-auto max-w-[600px] text-center">
        At HealthSiteSolutions.com, we believe in a structured and transparent
        approach to web development and design. Here’s a step-by-step overview
        of how we bring your vision to life:
      </p>
      {/* <Image
        src={"/svg/process-map.png"}
        alt=""
        width={800}
        height={1000}
        className="m-auto my-10"
      /> */}
      <div className="mt-10 overflow-hidden">
        {" "}
        <div className="grid grid-cols-3 gap-5 rounded-xl bg-[url('/svg/3.svg')] bg-cover bg-center bg-no-repeat p-6">
          {process.map((item, index) => {
            return item.step !== 0 ? (
              <div
                key={index}
                className="relative flex flex-col justify-start rounded bg-white p-4"
              >
                <div className="absolute right-2 top-2">
                  <p className="flex size-8 items-center justify-center rounded-full bg-green-100 text-xl font-semibold text-green-500">
                    {item.step}
                  </p>
                </div>
                <h4 className="text-xl font-semibold">{item.title}</h4>
                <p className="text-sm">{item.description}</p>
              </div>
            ) : (
              <></>
            );
          })}
        </div>
      </div>
    </div>
  );
}
