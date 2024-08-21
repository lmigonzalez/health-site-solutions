import React from "react";
import CustomHeader from "@/components/CustomHeader";
import Image from "next/image";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Healthcare Industries We Serve | Custom Web Design Company",
  description:
    "Health Web Experts provides tailored web solutions for hospitals, clinics, telehealth & more. Enhance your healthcare services with our professional web design.",
};
export default function Page() {
  function correctUrl(name: string) {
    const newStr = name.replace(" ", "-");
    return newStr.toLocaleLowerCase();
  }
  const healthcareSectors = [
    "Hospitals",
    "Clinics",
    "Practices",
    "Dentists",
    "Laboratories",
    "Pharmacies",
    "Startups",
    "Telehealth",
    "Urgent Care",
    "Rehab Centers",
    "Home Health",
    "Mental Health",
    "Nursing Homes",
    "Medical Supplies",
  ];

  const industriesInfo = [
    {
      title: "Hospitals",
      description:
        "We create comprehensive, mobile-friendly websites for hospitals that enhance patient experience and streamline operations. Our tailored websites include features such as appointment scheduling, patient portals, and expert SEO services to improve your online visibility.",
      list: [
        {
          bold: "Mobile-Friendly Design: ",
          text: "Ensures accessibility on all devices for patients and staff.",
        },
        {
          bold: "Appointment Scheduling:",
          text: "Streamlines the booking process with integrated online systems.",
        },
        {
          bold: "Patient Portals: ",
          text: " Provides secure access to health information and communication tools.",
        },
        {
          bold: "Expert SEO Services:",
          text: "Improves your hospital’s visibility in search engine results.",
        },
        {
          bold: "Enhanced User Experience:",
          text: "Focuses on easy navigation and quick access to essential information.",
        },
      ],
    },
    {
      title: "Clinics",
      description:
        "Our customized web solutions for clinics ensure that your services are easily accessible to patients. From responsive design to social media management, we cover all aspects to help you grow your practice.",
    },
    {
      title: "Medical Practices",
      description:
        "We develop professional websites for individual and group medical practices, focusing on user-friendly design and speed optimization. Our services include medical copywriting and logo design to strengthen your brand identity.",
    },
    {
      title: "Dentists",
      description:
        "Our web design services for dentists include creating engaging, informative websites that attract new patients. With our expert SEO services and social media management, we help your practice stand out in a competitive market.",
    },
    {
      title: "Laboratories",
      description:
        "We build robust websites for laboratories that facilitate easy access to services and information. Our solutions include tailored content creation and analytics and reporting to help you monitor your site's performance.",
    },
    {
      title: "Pharmacies",
      description:
        "Our e-commerce solutions for pharmacies enable you to offer products online securely and efficiently. We ensure your website is optimized for speed and provides a seamless shopping experience for your customers.",
    },
    {
      title: "Startups",
      description:
        "Healthcare startups can benefit from our comprehensive web development services, including responsive design, SEO, and hosting and maintenance. We help you establish a strong online presence to attract investors and customers.",
    },
    {
      title: "Telehealth",
      description:
        "We specialize in telehealth integration, developing secure, user-friendly platforms that enable virtual consultations. Our services ensure your telehealth solutions are reliable and easy to use for both providers and patients.",
    },
    {
      title: "Urgent Care",
      description:
        "Our websites for urgent care centers are designed to provide quick access to essential information and services. We focus on speed optimization and responsive design to ensure your site performs well under high traffic conditions.",
    },
    {
      title: "Rehab Centers",
      description:
        "We create informative and engaging websites for rehab centers, focusing on providing detailed information about your services. Our medical copywriting and SEO services ensure your site reaches those in need of your support.",
    },
    {
      title: "Home Health",
      description:
        "Our tailored websites for home health providers are designed to highlight your services and facilitate easy contact. We offer ongoing support and maintenance to ensure your site remains up-to-date and effective.",
    },
    {
      title: "Mental Health",
      description:
        "We build compassionate and informative websites for mental health professionals and organizations. Our content creation and social media management services help you connect with your audience and provide valuable resources.",
    },
    {
      title: "Nursing Homes",
      description:
        "Our web solutions for nursing homes include creating user-friendly websites that provide comprehensive information about your services. We focus on responsive design and expert SEO to improve your online presence.",
    },
    {
      title: "Medical Supplies",
      description:
        "We develop e-commerce websites for medical supply companies, ensuring a secure and efficient online shopping experience. Our speed optimization and analytics and reporting services help you maximize your sales and performance.",
    },
  ];

  const benefits = [
    {
      bold: "Unique Design Tailored to Your Brand",
      text: "A custom website is designed specifically for your brand, ensuring that it stands out from competitors. Your site will reflect your unique identity, making a strong impression on visitors.",
    },
    {
      bold: "Enhanced User Experience",
      text: "With a custom website, you have complete control over the user experience. From navigation to functionality, every element can be optimized to meet the needs of your target audience, leading to higher engagement and satisfaction.",
    },
    {
      bold: "Scalability and Flexibility",
      text: "Custom websites are built to grow with your business. Whether you need to add new features, expand your product offerings, or integrate with new technologies, a custom site provides the flexibility to scale as needed.",
    },
    {
      bold: " Improved SEO Performance",
      text: "Custom websites can be optimized for search engines right from the start. By implementing SEO best practices during the development process, your site will have a stronger foundation for achieving higher rankings and increased visibility.",
    },
    {
      bold: "Better Security",
      text: "Security is a top priority in custom web development. Custom websites are built with the latest security measures, reducing the risk of vulnerabilities and ensuring your data and customer information are protected.",
    },
    {
      bold: "Integration with Business Tools",
      text: "A custom website can be seamlessly integrated with the tools and software your business uses, such as CRM systems, e-commerce platforms, and marketing automation tools. This integration streamlines your operations and improves efficiency.",
    },
    {
      bold: "Long-Term Cost Efficiency",
      text: "While the initial investment may be higher, a custom website can save you money in the long run. It’s built to last, with fewer limitations and lower maintenance costs compared to pre-built templates that may require frequent updates or replacements.",
    },
    {
      bold: "Competitive Advantage",
      text: "A custom website gives you a competitive edge by offering unique features and functionality that set your business apart from others in your industry. It allows you to provide a superior online experience that can attract and retain customers.",
    },
  ];
  return (
    <main className="pt-16 md:px-6">
      <CustomHeader
        title="Industries We Serve"
        description="At Health Web Experts, we specialize in delivering customized web solutions across a wide range of healthcare industries. From hospitals and clinics to telehealth providers and pharmaceutical companies, our expertise ensures your online presence is professional, secure, and effective. Explore the specific industries we serve and learn how we can support your unique needs."
      />

      <div className="page-w custom-space grid grid-cols-2 gap-5 px-6 md:grid-cols-5 md:px-0">
        {healthcareSectors.map((item, index) => {
          return (
            <div
              key={index}
              className={`${index === 0 ? "md:row-span-2" : ""} `}
            >
              <div className="flex h-full flex-col items-center justify-center gap-1 rounded border-x border-sky-500 bg-white px-1 py-2 text-center transition-all hover:shadow">
                <Image
                  src={`/industries/${index + 1}.png`}
                  alt="logo"
                  width={index === 0 ? 50 : 30}
                  height={index === 0 ? 50 : 30}
                  className="h-auto w-10"
                />
                <b
                  className={`${index === 0 ? "md:text-2xl" : ""} font-semibold`}
                >
                  {item}
                </b>
              </div>
            </div>
          );
        })}
      </div>

      <div className="md:page-w relative grid gap-5 bg-[url('/bg-image-2.webp')] bg-left-bottom bg-no-repeat p-6 md:grid-cols-3">
        <div className="absolute left-0 top-0 h-full w-full bg-black opacity-80"></div>
        {industriesInfo.map((item, index) => {
          return (
            <div
              key={index}
              className={`${index === 0 ? "md:row-span-2" : ""} relative z-10 flex flex-col justify-start gap-2 rounded bg-white p-4 shadow-md`}
            >
              <div className="flex items-center gap-1">
                <h4 className="text-xl font-semibold">{item.title}</h4>
              </div>
              <p className="text-sm">{item.description}</p>
              <ul className="mt-auto hidden list-inside list-disc text-sm md:block">
                {item.list?.map((item, index) => {
                  return (
                    <li key={index}>
                      {" "}
                      <strong>{item.bold} </strong> {item.text}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="custom-space page-w px-6 md:px-0">
        <div className="custom-space grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            {" "}
            <h2 className="text-xl font-semibold">
              Advantages of a Custom-Built Website
            </h2>
            <p className="">
              Investing in a custom-built website offers numerous benefits that
              can significantly enhance your business&apos;s online presence and
              overall success. Here&apos;s why a custom website is a valuable asset
            </p>
            <ul className="ml-5 mt-5 list-disc space-y-2">
              {benefits.map((item, index) => {
                return (
                  <li key={index}>
                    <b>{item.bold}</b>
                    <p className="text-sm">{item.text}</p>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="hidden justify-center md:col-span-1 md:flex">
            <Image
              src={"/industries/Healthcare Business Growth Chart.webp"}
              alt="A vertical graphic showing a rising chart symbolizing growth in the healthcare business, featuring healthcare-related icons like a stethoscope, medical cross, and heart symbol, with an upward trend representing success in the industry."
              width={1000}
              height={1000}
              className="max-h-[800px] w-auto rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
