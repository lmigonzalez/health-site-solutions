import React from "react";
import CustomHeader from "@/components/CustomHeader";
import OurProcess from "@/components/OurProcess";
import ServiceGrid from "@/components/ServiceGrid";
import CallToAction from "@/sections/CallToAction";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare Web Development and Design Services | Health Web Experts",
  description:
    "Explore our comprehensive web development and design services for healthcare providers. Health Web Experts offers responsive websites, expert SEO, content creation, hosting, maintenance, and more to boost your online presence. Contact us to enhance your digital footprint.",
};
export default function Page() {
  return (
    <main className="mt-16">
      <div className="page-w px-6">
        <CustomHeader
          title="Our Services"
          description="At Health Web Experts, we provide comprehensive web solutions tailored specifically for healthcare providers. Our range of services includes custom web development, SEO optimization, and secure medical portals. Discover how our expertise can help elevate your online presence and improve patient engagement."
        />
        <ServiceGrid />
        <OurProcess />
      </div>
    </main>
  );
}
