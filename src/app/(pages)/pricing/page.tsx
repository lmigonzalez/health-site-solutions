import React from "react";
import CustomHeader from "@/components/CustomHeader";
import PricingTable from "@/components/PricingTable";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Health Web Experts",
  description:
    "Explore our competitive pricing plans for healthcare web development and design services. Health Web Experts offers Basic, Professional, and Premium plans, as well as custom solutions to fit your needs. Find the perfect plan to enhance your online presence today.",
};
export default function Page() {
  return (
    <main className="pt-24 md:px-6">
      <CustomHeader
        title="Pricing"
        description="At Health Web Experts, we offer transparent and competitive pricing for our healthcare web development services. Our packages are designed to meet the diverse needs and budgets of healthcare providers, from custom website design to ongoing maintenance and support. Explore our pricing options and find the perfect solution to enhance your online presence and achieve your goals."
      />

      <div className="page-w custom-space">
        <div className="relative bg-[url('/bg-image-2.webp')] bg-center bg-no-repeat p-6 text-white">
          <div className="absolute left-0 top-0 h-full w-full bg-black opacity-50"></div>
          <div className="relative z-10">
            <h2 className="text-center text-3xl font-bold">Pricing Packages</h2>
            <p className="text-center text-lg font-semibold">
              Affordable Plans Tailored for Healthcare Providers
            </p>
            <ul className="my-10 grid gap-5 text-white md:grid-cols-3">
              <li className="flex flex-col gap-2 rounded border bg-black p-4">
                <div className="mb-3 space-y-1">
                  <p className="text-2xl font-semibold">Basic</p>
                  <p className="text-2xl font-semibold">$750</p>
                </div>

                <b>Ideal for small practices or startups.</b>
                <ul className="list-disc pl-5">
                  <li>Fully Responsive Website</li>
                  <li>Speed Optimization</li>
                  <li>On-Page SEO</li>
                  <li>Up to 5 Pages</li>
                  <li>Hosting Setup</li>
                </ul>
                <div className="mt-auto flex justify-center pt-5">
                  {" "}
                  <Link
                    className="rounded bg-white px-4 py-2 font-semibold text-my_black"
                    href={"/contact?package=basic"}
                  >
                    Get Started
                  </Link>
                </div>
              </li>
              <li className="flex flex-col gap-2 rounded border bg-black p-4">
                <div className="mb-3 space-y-1">
                  <p className="text-2xl font-semibold">Professional</p>
                  <p className="text-2xl font-semibold">$1,500</p>
                </div>
                <b>Perfect for growing practices or clinics.</b>
                <ul className="list-disc pl-5">
                  <li className="font-semibold">
                    All Features from Basic Plan
                  </li>
                  <li>Up to 10 Pages</li>
                  <li>Logo Design</li>
                  <li>Infographics</li>
                  <li>Page Animation</li>
                </ul>
                <div className="mt-auto flex justify-center pt-5">
                  {" "}
                  <Link
                    className="rounded bg-white px-4 py-2 font-semibold text-my_black"
                    href={"/contact?package=professional"}
                  >
                    Get Started
                  </Link>
                </div>
              </li>
              <li className="flex flex-col gap-2 rounded border bg-black p-4">
                <div className="mb-3 space-y-1">
                  <p className="text-2xl font-semibold">Premium</p>
                  <p className="text-2xl font-semibold"> $4,000</p>
                </div>
                <b>
                  Best for large practices, hospitals, or healthcare businesses.
                </b>
                <ul className="list-disc pl-5">
                  <li className="font-semibold">
                    All Features from Professional Plan
                  </li>
                  <li>Up to 30 Pages</li>
                  <li>Business SEO</li>
                  <li>Customer Portal</li>
                  <li>Backend Integration</li>
                </ul>
                <div className="mt-auto flex justify-center pt-5">
                  {" "}
                  <Link
                    className="rounded bg-white px-4 py-2 font-semibold text-my_black"
                    href={"/contact?package=premium"}
                  >
                    Get Started
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="custom-space">
          <h2
            id="pricing-table"
            className="scroll-m-12 text-center text-3xl font-bold"
          >
            Compare Our Plans
          </h2>
          <p className="text-center text-lg font-semibold">
            Find the Right Solution for Your Practice
          </p>
          <div className="page-w mt-10 overflow-x-auto px-6">
            <PricingTable />
          </div>
        </div>

        <div className="custom-space grid gap-10 md:grid-cols-2">
          <div className="flex flex-col justify-between gap-2 rounded-xl border-l-4 p-2 pl-4">
            <h2 className="text-3xl font-bold">Maintenance and Hosting Plan</h2>
            <p className="">
              Our Basic Maintenance and Fast Hosting plan ensures your website
              remains secure, up-to-date, and performs optimally. With regular
              updates, performance monitoring, and technical support, you can
              focus on providing excellent care while we take care of your
              online presence.
            </p>
            <p className="">
              Enjoy peace of mind knowing your website is in expert hands.
              Additionally, our service includes adding new content and updating
              existing ones to keep your site fresh and relevant. Trust us to
              handle the technical details so you can concentrate on what you do
              best—caring for your patients.
            </p>
          </div>

          <div className="relative overflow-hidden bg-[url('/bg-image-2.webp')] bg-center bg-no-repeat p-6 text-white md:rounded-xl">
            <div className="absolute left-0 top-0 h-full w-full bg-black opacity-80"></div>
            <div className="relative z-10 space-y-3">
              <p className="text-xl font-semibold">
                Basic Maintenance and Fast Hosting
              </p>
              <p className="w-fit rounded bg-white px-4 py-1 text-xl font-semibold text-black">
                $75/month
              </p>
              <p className="text-lg font-semibold">Includes:</p>
              <ul className="mt-2 grid list-inside list-disc grid-cols-2 gap-1.5">
                <li>Reliable Fast Hosting</li>
                <li>Monthly Security Updates</li>
                <li>Performance Monitoring</li>
                <li>Basic Technical Support</li>
                <li>Regular Backups</li>
                <li>Adding New Content</li>
                <li>Updating Existing Content</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
