import React from "react";
import CustomHeader from "@/components/CustomHeader";
import Image from "next/image";
import Link from "next/link";
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
  return (
    <main className="px-6 py-24">
      <CustomHeader
        title="Industries We Serve"
        description="At Health Site Solutions, we specialize in delivering customized web solutions across a wide range of healthcare industries. From hospitals and clinics to telehealth providers and pharmaceutical companies, our expertise ensures your online presence is professional, secure, and effective. Explore the specific industries we serve and learn how we can support your unique needs."
      />

      <div className="mt-10 grid grid-cols-5 gap-5">
        {healthcareSectors.map((item, index) => {
          return (
            <Link href={`industries/${correctUrl(item)}`}>
              {" "}
              <div className="flex flex-col items-center gap-1 rounded border-x border-sky-500 bg-white px-1 py-2 text-center transition-all hover:shadow">
                <Image
                  src={`/industries/${index + 1}.png`}
                  alt="logo"
                  width={30}
                  height={30}
                />
                <h5 className="font-semibold">{item}</h5>
              </div>
            </Link>
          );
        })}
        <Link
          href={"/industries/#"}
          className="flex items-center justify-center gap-1 rounded bg-sky-100 px-1 py-2 text-center text-sky-500 transition-all hover:bg-sky-900 hover:text-white"
        >
          <p className="font-semibold">Learn more...</p>
        </Link>
      </div>

      <div className="">
        <Image
          src={"/industries.webp"}
          alt=""
          width={800}
          height={1000}
          className="m-auto my-10"
        />
      </div>

      <div className="mt-10 space-y-5">
        {industriesInfo.map((item, index) => {
          return (
            <div key={index} className="flex items-center gap-5">
              <div className="h-full">
                <div className="flex size-24 items-center justify-center rounded bg-green-100 p-1 text-4xl font-bold text-green-500">
                  {index + 1}
                </div>
              </div>

              <div className="">
                <Link
                  className="text-sky-500 transition-all hover:text-sky-900"
                  href={`industries/${correctUrl(item.title)}`}
                >
                  <h4 className="text-xl font-semibold">{item.title}</h4>
                </Link>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
