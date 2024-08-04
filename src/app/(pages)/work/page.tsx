import React from "react";
import CustomHeader from "@/components/CustomHeader";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Portfolio | Health Web Experts",
  description:
    "Browse our portfolio to see the successful healthcare web development and design projects completed by Health Web Experts. Discover how we help hospitals, clinics, and other healthcare providers enhance their online presence with custom websites, SEO, and more.",
};
export default function Page() {
  return (
    <main className="pt-16 md:px-6">
      <CustomHeader
        title="Previous Work"
        description="Explore our portfolio of successful projects at Health Web Experts, showcasing our expertise in healthcare web development. From custom websites to secure medical portals, our previous work demonstrates our commitment to quality and innovation. See how we've helped healthcare providers enhance their online presence and achieve their goals."
      />
    </main>
  );
}
