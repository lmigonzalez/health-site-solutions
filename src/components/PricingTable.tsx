import React from "react";

export default function PricingTable() {
  const data = [
    {
      feature: "Price",
      basic: "$750",
      professional: "$1,500",
      premium: "$3,000",
    },
    {
      feature: "Responsive Website",
      basic: "+",
      professional: "+",
      premium: "+",
    },
    {
      feature: "Speed Optimization",
      basic: "+",
      professional: "+",
      premium: "+",
    },

    {
      feature: "On-Page SEO",
      basic: "+",
      professional: "+",
      premium: "+",
    },
    {
      feature: "Pages Included",
      basic: "Up to 5",
      professional: "Up to 10",
      premium: "Up to 30",
    },
    {
      feature: "Hosting",
      basic: "+",
      professional: "+",
      premium: "+",
    },
    {
      feature: "Logo Design",
      basic: "+",
      professional: "+",
      premium: "+",
    },
    {
      feature: "Infographics",
      basic: "+",
      professional: "+",
      premium: "+",
    },
    {
      feature: "Page Animation",
      basic: "-",
      professional: "+",
      premium: "+",
    },
    {
      feature: "Maintenance",
      basic: "-",
      professional: "-",
      premium: "+",
    },
    {
      feature: "Off-Site SEO",
      basic: "-",
      professional: "-",
      premium: "+",
    },
    {
      feature: "Business SEO",
      basic: "-",
      professional: "-",
      premium: "+",
    },
    {
      feature: "Customer Portal",
      basic: "-",
      professional: "-",
      premium: "+",
    },
    {
      feature: "Backend Integration",
      basic: "-",
      professional: "-",
      premium: "+",
    },
  ];
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-my_black text-white">
        <tr className="">
          <th className="rounded-tl px-6 py-2 text-left text-xs font-medium uppercase tracking-wider">
            Feature
          </th>
          <th className="px-6 py-2 text-center text-xs font-medium uppercase tracking-wider">
            Basic
          </th>
          <th className="px-6 py-2 text-center text-xs font-medium uppercase tracking-wider">
            Professional
          </th>
          <th className="px-6 py-2 text-center text-xs font-medium uppercase tracking-wider">
            Premium
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 bg-white">
        {data.map((item, index) => {
          return (
            <tr key={index}>
              <td className="whitespace-nowrap px-6 py-4 font-semibold">
                {item.feature}
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <div className="flex justify-center">
                  {" "}
                  {item.basic === "+" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  ) : (
                    item.basic
                  )}
                </div>
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <div className="flex justify-center">
                  {" "}
                  {item.professional === "+" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  ) : (
                    item.professional
                  )}
                </div>
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <div className="flex justify-center">
                  {" "}
                  {item.premium === "+" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  ) : (
                    item.premium
                  )}
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
