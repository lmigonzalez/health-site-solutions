import React from "react";
import Link from "next/link";
export default function CallToAction() {
  return (
    <section className="px-4 py-20 bg-gray-100 mt-20">
      <div className="page-w">
        {" "}
        <div className="w-[700px] max-w-full m-auto text-center space-y-3">
          <div className="bg-green-100 text-green-500 rounded-full py-1 px-6 text-sm font-bold w-fit m-auto">
            <p>TESTIMONIALS</p>
          </div>
          <h2 className="text-3xl font-bold">
            Ready to Transform Your Online Presence?
          </h2>
          <h3 className="text-xl font-semibold">
            Schedule a Call with Our Team to Discuss Your Project and Discover
            How We Can Help
          </h3>
          <div className="pt-2 ">
            <Link href={""} className="main-btn flex items-center gap-2 w-fit m-auto">
              Schedule a Call Today
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
