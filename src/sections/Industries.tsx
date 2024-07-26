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
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );
  const OPTIONS: EmblaOptionsType = {
    loop: true,
    watchDrag: false,
  };
  return (
    <section className="px-4 py-20">
      <div className="w-[700px] max-w-full m-auto text-center space-y-3 mb-5">
        <div className="bg-green-100 text-green-500 rounded-full py-1 px-6 text-sm font-bold w-fit m-auto shadow shadow-green-100">
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
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-my_transparent from-1% via-transparent to-my_transparent to-99% z-10"></div>
        <Carousel
          plugins={[plugin.current, autoScrollPlugin]}
          className="w-full m-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={OPTIONS}
        >
          <CarouselContent>
            {healthcareSectors.map((item, index) => {
              return (
                <CarouselItem
                  key={index}
                  className="basis-1/2 md:basis-1/5 lg:basis-[15%] gap-5"
                >
                  <div className="bg-white border-x border-green-500 py-2 px-1 text-center flex flex-col items-center rounded gap-1">
                    <Image
                      src={`/industries/${index + 1}.png`}
                      alt="logo"
                      width={30}
                      height={30}
                    />
                    <h5 className="font-semibold">{item}</h5>
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
