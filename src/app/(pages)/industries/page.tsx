import React from "react";
import CustomHeader from "@/components/CustomHeader";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare Industries We Serve | Custom Web Design Company",
  description:
    "Health Web Experts offers healthcare website design and development for hospitals, clinics, telehealth, and more. Enhance your services with our expertise.",
};

const extraFeatures = [
  {
    title: "Payment Integration",
    description:
      "Enable your patients to make payments online through a secure payment gateway. This feature allows for easy handling of co-pays, outstanding balances, and payment plans directly from your website, providing convenience for your patients and streamlining your billing process.",
  },
  {
    title: "Live Chat",
    description:
      "Integrate a live chat feature to offer real-time assistance to your patients. This tool allows patients to quickly get answers to their questions, schedule appointments, or receive guidance on navigating the website, enhancing their overall experience.",
  },
  {
    title: "Scheduling Integration",
    description:
      "Allow patients to book, reschedule, or cancel appointments directly through your website. With scheduling integration, patients can see available slots and choose a time that works best for them, reducing the need for phone calls and improving efficiency.",
  },
  {
    title: "Patient Portal",
    description:
      "A patient portal gives your patients secure access to their health information, including medical records, test results, and visit summaries. It also allows them to communicate with their healthcare providers, request prescription refills, and manage their healthcare more effectively.",
  },
  {
    title: "Telemedicine Integration",
    description:
      "Offer telemedicine services to your patients, allowing them to consult with healthcare providers from the comfort of their homes. This feature is especially valuable for routine check-ups, follow-ups, and initial consultations, reducing the need for in-person visits.",
  },
  {
    title: "Prescription Refill Requests",
    description:
      "Allow patients to request prescription refills through your website, making it convenient for them to manage their medications. This feature streamlines the process for both patients and providers, ensuring timely access to necessary medications.",
  },
  {
    title: "HIPAA-Compliant Forms",
    description:
      "Ensure that all forms on your website are HIPAA-compliant, protecting your patients’ sensitive information. This feature is crucial for maintaining trust and meeting legal requirements while collecting health information, appointment requests, or insurance details.",
  },
  {
    title: "Doctor Profiles and Credentials",
    description:
      "Showcase the expertise of your healthcare professionals with detailed doctor profiles. Include information about their qualifications, specialties, experience, and patient reviews to help build trust and allow patients to make informed decisions about their care.",
  },
  {
    title: "Patient Reviews and Testimonials",
    description:
      "Display patient reviews and testimonials on your website to highlight positive experiences and build trust with potential patients. Authentic feedback from satisfied patients can significantly influence new patient decisions and enhance your reputation.",
  },
  {
    title: "Health Education Resources",
    description:
      "Provide access to a library of health education resources, including articles, videos, and guides on various health topics. This feature helps educate patients, encourages healthy behaviors, and positions your practice as a trusted source of information.",
  },
  {
    title: "Appointment Reminders via SMS/Email",
    description:
      "Send automated appointment reminders to patients via SMS or email. This feature helps reduce no-shows and ensures that patients are well-prepared for their appointments, improving overall scheduling efficiency.",
  },
  {
    title: "Multilingual Support",
    description:
      "Offer multilingual support on your website to cater to patients who speak different languages. This feature can include translated content, language selection options, and even multilingual chat support, making your services accessible to a broader audience.",
  },
  {
    title: "Blog and Health Articles",
    description:
      "Maintain a blog with regularly updated health articles, tips, and news. This feature helps engage patients, improve SEO, and position your practice as an authority in healthcare, while also providing valuable information to your audience.",
  },
  {
    title: "Emergency Contact Information",
    description:
      "Ensure that emergency contact information is prominently displayed on your website. This feature provides patients with easy access to critical phone numbers and addresses in case of an emergency, offering peace of mind and quick assistance when needed.",
  },
  {
    title: "Insurance Verification Tools",
    description:
      "Integrate tools that allow patients to verify their insurance coverage online. This feature streamlines the process for both the patient and your office staff, reducing confusion and ensuring that patients understand their coverage before receiving care.",
  },
  {
    title: "Customizable Patient Intake Forms",
    description:
      "Offer customizable patient intake forms that can be filled out online before appointments. This feature saves time during check-in, reduces paperwork, and ensures that you have all the necessary information before the patient arrives.",
  },
  {
    title: "Accessibility Features",
    description:
      "Ensure your website is accessible to all patients, including those with disabilities. Implement features like screen reader compatibility, keyboard navigation, and adjustable text size, making your website user-friendly and compliant with accessibility standards.",
  },
];

export default function Page() {
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

  return (
    <main className="pt-16 md:px-6">
      <CustomHeader
        title="Healthcare Website Design for Various Industries"
        description="We specialize in healthcare website design and development for various industries. From hospitals and clinics to telehealth and pharmaceuticals, we ensure your online presence is professional, fast, secure, and effective."
      />

      <div className="page-w custom-space grid grid-cols-2 gap-5 px-6 md:grid-cols-5 md:px-0">
        {healthcareSectors.map((item, index) => {
          return (
            <div
              key={index}
              className={`${index === 0 ? "md:row-span-2" : ""} `}
            >
              <div className="flex h-full flex-col items-center justify-center gap-1 rounded border-x border-green-500 bg-white px-1 py-2 text-center">
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

      <div className="page-w px-6 md:px-0">
        <div className="custom-space">
          {" "}
          <Image
            src={"/industries/healthcare-website-design-process.webp"}
            alt="A team of developers and a healthcare professional collaborating on a modern healthcare website design."
            width={800}
            height={500}
            className="mx-auto rounded-xl shadow"
          />
        </div>
        <div className="m-auto max-w-[800px]">
          <h2 className="mb-5 text-2xl font-bold">
            How We Will Help Your Healthcare Business Stand Out
          </h2>
          <p>
            When you partner with us to build your website, you get more than
            just a website. We’ll create a modern, fast website while also
            handling everything your practice needs to be easily found online by
            your customers. After all, a website is a crucial part of your
            business, where the ultimate goal is to attract more clients.
          </p>
        </div>

        <div className="page-w-8">
          <h3 className="mb-5 text-xl font-semibold">
            Our Process: Simple, Effective, and Results-Driven
          </h3>
          <div className="">
            <ul className="space-y-5">
              <li className="">
                <h4 className="list-circle font-bold">Research & Strategy:</h4>
                <ul className="list-disc pl-5">
                  <li>
                    <b>Competitive Analysis:</b> We begin by thoroughly
                    researching your competition to understand what they’re
                    doing and how we can outperform them.
                  </li>
                  <li>
                    <b>Keyword Strategy: </b>Next, we develop a powerful keyword
                    strategy to ensure your business ranks highly on Google and
                    other major search engines.
                  </li>
                  <li>
                    <b>Copywriting:</b> Once we have a clear keyword plan, we
                    start crafting the copy for each page of your website.
                  </li>
                </ul>
              </li>
              <li>
                <h4 className="list-circle font-bold">Design & Development:</h4>
                <ul className="list-disc pl-5">
                  <li>
                    <b>Unique Design:</b> Our skilled web designer will create a
                    custom, visually appealing medical website tailored to your
                    brand. We don’t use templates; your website will be
                    one-of-a-kind.
                  </li>
                  <li>
                    <b>User-Friendly Interface: </b>We ensure your website is
                    clean, easy to navigate, and accessible, especially for
                    older clients.
                  </li>
                  <li>
                    <b>Development: </b> After you approve the design, we move
                    on to development, where we build your site using custom
                    code—not WordPress. We want to create something exceptional
                    that we can be proud of.
                  </li>
                </ul>
              </li>
              <li>
                <h4 className="list-circle font-bold">Technology Choices:</h4>
                <ul className="list-disc pl-5">
                  <li>
                    <b>Astro vs. Next.js: </b>
                    Depending on your needs, we choose between Astro and
                    Next.js:
                    <ul className="list-disc">
                      <li>
                        <b>Astro: </b> Ideal for static websites with minimal
                        user interaction.
                      </li>
                      <li>
                        <b>Next.js:</b> Perfect for more complex websites with
                        databases, portals, and login features.
                      </li>
                    </ul>
                  </li>
                  <li className="list-none">
                    This decision is made during our initial consultation based
                    on your specific requirements.
                  </li>
                </ul>
              </li>
              <li>
                <h4 className="list-circle font-bold">
                  Pixel-Perfect Development:
                </h4>
                <p className="">
                  We code your website exactly as it appears in the Figma{" "}
                  <Link href={"https://www.healthwebexperts.com/services/healthcare-website-redesign"}>
                    design
                  </Link>
                  —what you see in the design is what you get. The result is a
                  unique, modern, and extremely fast website.
                </p>
              </li>
              <li className="">
                <h4 className="list-circle font-bold">
                  Google Business Boost:
                </h4>
                <p className="">
                  But wait, our services don’t stop there! Every package
                  includes Google Business optimization services. We’ve
                  partnered with a team of specialists who excel in this area.
                  They’ll ensure your business is highly visible on the map,
                  with dominant map citations, and your profile will be fully
                  optimized for maximum reach.
                </p>
              </li>
              <li className="">
                <h4 className="list-circle font-bold">Ongoing Support:</h4>
                <p className="">
                  And we&apos;re not done yet. We don&apos;t just want to work
                  with you—we want to build a lasting relationship. We&apos;re
                  here to help you grow and support your online presence.
                  That&apos;s why we offer hosting and maintenance services,
                  providing you with ongoing access to us for any changes or
                  edits you may need.
                </p>
                <p className="text-start">
                  This additional service is available for just $75 per month.{" "}
                  Learn more about our hosting and maintenance services{" "}
                  <Link href={"/pricing"}>here.</Link>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="page-w px-6 md:px-0">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="order-2 md:order-1">
            {" "}
            <h2 className="mb-3 text-2xl font-bold">Why Page Speed Matters</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <b>User Experience: </b>No one likes waiting 5 seconds for a
                page to load. A fast website enhances the user experience.
              </li>
              <li>
                <b>SEO Benefits:</b> Google favors fast websites, so yours will
                rank higher than slower competitors.
              </li>
              <li>
                <b>Higher Conversion Rates:</b> Studies show that every two
                seconds a page takes to load increases the chance of visitors
                leaving by 7%.
              </li>
            </ul>
          </div>

          <Image
            src={"/industries/website-page-speed-importance.webp"}
            alt="A team of developers and a healthcare professional collaborating on a modern healthcare website design."
            width={800}
            height={500}
            className="order-1 mx-auto rounded-xl shadow md:order-2"
          />
        </div>
        <div className="custom-space">
          <p className="rounded-l-md border-l-2 border-green-500 p-4">
            Our own website averages a <b>98.5 out of 100</b> on PageSpeed
            Insights, and yours will be just as fast. Don&apos;t believe us?{" "}
            <Link
              target="_blank"
              href={
                "https://pagespeed.web.dev/analysis/https-www-healthwebexperts-com/00ro931nb6?form_factor=mobile"
              }
            >
              {" "}
              Check it out for yourself!
            </Link>
          </p>
        </div>
      </div>

      <div className="custom-space m-auto max-w-[800px] px-6 md:px-0">
        <div className="m-auto">
          <h2 className="mb-5 text-2xl font-bold">
            Additional Features for Your Website
          </h2>
          <p>
            We understand that every business is unique, which is why we offer a
            range of additional features tailored to your specific needs. Below
            is a list of some of the most common features requested by our
            clients. If you don&apos;t see what you&apos;re looking for, just
            let us know, and we&apos;ll ensure you get exactly what you need.
          </p>
        </div>

        <div className="mt-10">
          <ul className="space-y-5 pl-5 md:pl-0">
            {extraFeatures.map((item, index) => {
              return (
                <li key={index} className="list-circle">
                  <b>{item.title}:</b> {item.description}{" "}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </main>
  );
}
