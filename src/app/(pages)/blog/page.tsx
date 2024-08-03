import React from "react";
import CustomHeader from "@/components/CustomHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve | Health Web Experts",
  description:
    "Discover the range of healthcare industries we serve at Health Web Experts. From hospitals and clinics to dental practices and telehealth providers, we offer specialized web development and design services to enhance your online presence. Explore our industry-specific solutions today.",
};
export default function Page() {
  return (
    <main className="py-24">
      {" "}
      <CustomHeader
        title="Our Blog"
        description="Stay informed with the latest insights and trends in healthcare web development through our blog at Health Web Experts. Our articles cover a wide range of topics, from SEO tips and best practices to the latest in medical portal technology. Discover valuable information to help you enhance your online presence and engage more effectively with your patients."
      />
    </main>
  );
}
