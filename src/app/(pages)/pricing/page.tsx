import React from "react";
import CustomHeader from "@/components/CustomHeader";
import PricingTable from "@/components/PricingTable";
import Link from "next/link";
export default function Page() {
  return (
    <main className="scroll-smooth px-6 py-24">
      <CustomHeader
        title="Pricing"
        description="At Health Site Solutions, we offer transparent and competitive pricing for our healthcare web development services. Our packages are designed to meet the diverse needs and budgets of healthcare providers, from custom website design to ongoing maintenance and support. Explore our pricing options and find the perfect solution to enhance your online presence and achieve your goals."
      />

      <div className="mt-20">
        <div>
          <h2 className="text-center text-3xl font-bold">Pricing Packages</h2>
          <p className="text-center text-lg font-semibold">
            Affordable Plans Tailored for Healthcare Providers
          </p>
          <ul className="my-10 grid gap-5 md:grid-cols-3">
            <li className="flex flex-col gap-2 rounded bg-white p-4 shadow">
              <div className="mb-5 flex items-center justify-between">
                {" "}
                <p className="text-2xl font-semibold">Basic</p>
                <p className="w-fit rounded bg-green-100 px-4 py-1 text-xl font-semibold text-green-500">
                  $750
                </p>
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
                <Link className="main-btn" href={"/pricing/#pricing-table"}>
                  Learn More
                </Link>
              </div>
            </li>
            <li className="flex flex-col gap-2 rounded bg-white p-4 shadow">
              <div className="mb-5 flex items-center justify-between">
                {" "}
                <p className="text-2xl font-semibold">Professional</p>
                <p className="w-fit rounded bg-green-100 px-4 py-1 text-xl font-semibold text-green-500">
                  $1,500
                </p>
              </div>
              <b>Perfect for growing practices or clinics.</b>
              <ul className="list-disc pl-5">
                <li>All Features from Basic Plan</li>
                <li>Up to 10 Pages</li>
                <li>Logo Design</li>
                <li>Infographics</li>
                <li>Page Animation</li>
              </ul>
              <div className="mt-auto flex justify-center pt-5">
                {" "}
                <Link className="main-btn" href={"/pricing/#pricing-table"}>
                  Learn More
                </Link>
              </div>
            </li>
            <li className="flex flex-col gap-2 rounded bg-white p-4 shadow">
              <div className="mb-5 flex items-center justify-between">
                {" "}
                <p className="text-2xl font-semibold">Premium</p>
                <p className="w-fit rounded bg-green-100 px-4 py-1 text-xl font-semibold text-green-500">
                  $4,000
                </p>
              </div>

              <b>
                Best for large practices, hospitals, or healthcare businesses.
              </b>
              <ul className="list-disc pl-5">
                <li>All Features from Professional Plan</li>
                <li>Up to 30 Pages</li>
                <li>Maintenance</li>
                <li>Hosting Management</li>
                <li>Off-Site SEO</li>
                <li>Business SEO</li>
                <li>Customer Portal</li>
                <li>Backend Integration</li>
              </ul>
              <div className="mt-auto flex justify-center pt-5">
                {" "}
                <Link className="main-btn" href={"/pricing/#pricing-table"}>
                  Learn More
                </Link>
              </div>
            </li>
          </ul>
          <div className="rounded border-x-2 border-x-green-500 bg-white p-4 shadow">
            <p className="text-xl font-semibold">
              Custom Package - Contact Us for Pricing
            </p>
            <p className="my-1">
              If the above packages do not cover your specific requirements,
              please contact us to discuss a custom solution. We can create a
              Package that meets your unique needs and budget.
            </p>
            <div className="flex justify-end">
              <Link className="main-btn" href={"/pricing/#"}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="my-20">
          <h2
            id="pricing-table"
            className="scroll-m-12 text-center text-3xl font-bold"
          >
            Compare Our Plans
          </h2>
          <p className="text-center text-lg font-semibold">
            Find the Right Solution for Your Practice
          </p>
          <div className="page-w mt-10 overflow-x-auto">
            <PricingTable />
          </div>
        </div>

        <div className="">
          {" "}
          <h2 className="text-center text-3xl font-bold">
            Maintenance and Hosting Plan
          </h2>
          <p className="text-center text-lg font-semibold">
            Keep Your Website Running Smoothly with Our Monthly Services
          </p>
          <div className="mt-5">
            <div className="flex flex-col items-center justify-center gap-5">
              <b>Basic Maintenance and Fast Hosting</b>
              <p className="w-fit rounded bg-green-100 px-4 py-1 text-xl font-semibold text-green-500">
                $75/month
              </p>
              <ul className="w-fit list-inside list-disc space-y-1 rounded bg-white p-6 shadow">
                <li className="list-none">
                  <b>Includes:</b>
                </li>
                <li>Reliable Fast Hosting</li>
                <li>Performance Monitoring</li>
                <li>Basic Technical Support</li>
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
