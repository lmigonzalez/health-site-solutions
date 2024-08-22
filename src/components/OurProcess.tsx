import React from "react";
import Image from "next/image";

const process = [
  "Consultation",
  "Agreement",
  "Design",
  "Content",
  "Development",
  "Testing",
  "Approval",
  "Launch",
];
export default function OurProcess() {
  return (
    <div className="page-w custom-space px-6 md:px-6">
      <h2 className="text-center text-3xl font-bold">Our Process</h2>
      <p className="m-auto max-w-[800px] text-center md:text-lg">
        At Health Web Experts, we follow a clear and organized approach to build
        your website. Here’s how we turn your ideas into reality:
      </p>

      <div className="mb-12 mt-36 hidden px-10 md:block">
        <div className="relative flex min-h-12 justify-between">
          <div className="absolute left-1/2 top-1/2 h-1 w-full -translate-x-1/2 -translate-y-1/2 transform shadow-xl px-1">
            <div className="h-full w-full bg-sky-700"></div>{" "}
          </div>
          {process.map((i, index) => {
            return (
              <div key={index} className="relative">
                <div className="relative z-10 flex size-10 items-center justify-center rounded-full border border-sky-700 bg-sky-100">
                  <p className="font-bold text-sky-700">{index + 1}</p>
                </div>
                <div
                  className={`absolute left-1/2 flex -translate-x-1/2 flex-col items-center justify-center ${index % 2 === 0 ? "bottom-16" : "top-16"}`}
                >
                  <b className={`${index % 2 === 0 ? "order-2" : "order-1"}`}>
                    {i}
                  </b>
                  <div
                    className={`${index % 2 === 0 ? "order-1" : "order-2"} my-5`}
                  >
                    <Image
                      src={`/process/${i}.png`}
                      alt={`Blue ${i} Icon representing the step of the process`}
                      width={50}
                      height={50}
                      className=""
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="custom-space mt-12 block px-10 md:hidden">
        <div className="relative m-auto flex h-[800px] w-fit flex-col justify-between">
          <div className="absolute left-1/2 top-1/2 h-[800px] w-1 -translate-x-1/2 -translate-y-1/2 transform bg-sky-700 shadow-xl"></div>
          {process.map((i, index) => {
            return (
              <div
                key={index}
                className="relative flex items-center justify-center"
              >
                <div className="relative z-10 flex size-10 items-center justify-center rounded-full border border-sky-700 bg-sky-100">
                  <p className="font-bold text-sky-700">{index + 1}</p>
                </div>
                <div
                  className={`absolute flex flex-col items-center justify-center ${index % 2 === 0 ? "left-16" : "right-16"}`}
                >
                  <b className={`${index % 2 === 0 ? "order-2" : "order-1"}`}>
                    {i}
                  </b>
                  <div className={``}>
                    <Image
                      src={`/process/${i}.png`}
                      alt={`Blue ${i} Icon representing the step of the process`}
                      width={50}
                      height={50}
                      className=""
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
