"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll";
import { EmblaOptionsType } from "embla-carousel";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/ui/carousel";

export default function Industries() {
  const healthcareSectors = [
    "Hospitals",
    "Clinics",
    "Practices",
    "Dentists",
    "Laboratories",
    "Pharmacies",
    "Startups",
    "Telehealth",
    "Urgent Care",
    "Rehab Centers",
    "Home Health",
    "Mental Health",
    "Nursing Homes",
    "Medical Supplies",
  ];

  const autoScrollPlugin = AutoScroll({
    speed: 1,
    playOnInit: true,

    // draggable: false,
  });
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false }),
  );
  const OPTIONS: EmblaOptionsType = {
    loop: true,
    watchDrag: false,
  };
  return (
    <section className="custom-space mxl:px-6">
      <div className="m-auto mb-5 w-[700px] max-w-full space-y-3 px-6 text-center">
        <div className="m-auto w-fit rounded-full bg-green-100 px-6 py-1 text-sm font-bold text-green-500 shadow shadow-green-100">
          <p>Industries</p>
        </div>
        <h2 className="text-3xl font-bold">Industries We Serve</h2>
        <h3 className="text-lg font-semibold">
          Delivering Specialized Web Solutions Across Various Healthcare{" "}
          <Link className="text-sky-500" href={"/industries"}>
            Industries
          </Link>
        </h3>
      </div>
      <div className="page-w relative">
        <div className="from-1% to-99% absolute left-0 top-0 z-10 h-full w-full bg-gradient-to-r from-my_transparent via-transparent to-my_transparent"></div>
        <Carousel
          plugins={[plugin.current, autoScrollPlugin]}
          className="m-auto w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={OPTIONS}
        >
          <CarouselContent>
            {healthcareSectors.map((item, index) => {
              return (
                <CarouselItem
                  key={index}
                  className="basis-1/2 gap-5 md:basis-1/5 lg:basis-[15%]"
                >
                  <div className="flex flex-col items-center gap-1 rounded border-x border-green-500 bg-white px-1 py-2 text-center">
                    <Image
                      src={`/industries/${index + 1}.png`}
                      alt="logo"
                      width={30}
                      height={30}
                    />
                    <b className="font-semibold">{item}</b>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
