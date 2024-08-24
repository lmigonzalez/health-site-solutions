import React from "react";
import CustomHeader from "@/components/CustomHeader";
import OurProcess from "@/components/OurProcess";
import ServiceGrid from "@/components/ServiceGrid";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare Website Design Services | Custom Web Development",
  description:
    "Health Web Experts offers custom web development, SEO, and secure medical portals for healthcare providers. Boost your online presence and website engagement.",
};
export default function Page() {
  return (
    <main className="mt-16 md:px-6">
      <div className="page-w">
        <CustomHeader
          title="Our Services"
          description="At Health Web Experts, we provide comprehensive web solutions designed specifically for healthcare providers. Our services include custom web development, SEO optimization, secure medical portals, and more. Discover how our expertise can elevate your online presence and improve patient engagement."
        />
        <ServiceGrid />
        <OurProcess />

        <div className="custom-space grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-2 rounded-xl border-l-4 p-4">
            <h2 className="text-3xl font-bold">
              Website Design for Medical Practices
            </h2>
            <p>
              Your practice’s website is often the first impression potential
              patients have of your services. We
              specialize in creating custom, responsive websites that cater to
              the unique needs of medical professionals.
            </p>
            <p>
              Whether you need a website design for doctors or a family practice
              website, our solutions are designed to improve patient engagement
              and streamline practice management.
            </p>
          </div>
          <div className="">
            <Image
              src={"/services/medical-practice-website-design.webp"}
              alt="Modern and clean medical practice website layout displayed on a computer screen, featuring a hero section with a medical professional, navigation menu, patient resources, and a contact section with a calming blue and white color palette."
              width={700}
              height={500}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
