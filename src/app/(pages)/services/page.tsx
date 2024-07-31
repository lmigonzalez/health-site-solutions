import React from "react";
import CustomHeader from "@/components/CustomHeader";
import OurProcess from "@/components/OurProcess";
import ServiceGrid from "@/components/ServiceGrid";
export default function Page() {
  return (
    <main className="px-6 py-24">
      <CustomHeader
        title="Our Services"
        description="At Health Site Solutions, we provide comprehensive web solutions tailored specifically for healthcare providers. Our range of services includes custom web development, SEO optimization, and secure medical portals. Discover how our expertise can help elevate your online presence and improve patient engagement."
      />
      <section className="page-content">
        <ServiceGrid />
      </section>
      <OurProcess />
    </main>
  );
}
