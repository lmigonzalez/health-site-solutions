import React from "react";
import CustomHeader from "@/components/CustomHeader";
export default function Page() {
  return (
    <main className="py-24">
      {" "}
      <CustomHeader
        title="About Us"
        description="Welcome to HealthSiteSolutions.com, where we specialize in crafting tailored web solutions for the healthcare industry. Our team of experts is dedicated to helping healthcare providers improve their online presence through innovative design, advanced technology, and personalized service. Learn more about our mission, values, and the talented professionals who make it all happen."
      />
    </main>
  );
}
