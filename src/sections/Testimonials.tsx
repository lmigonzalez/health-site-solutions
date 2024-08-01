"use client";
import React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import Reviews from "../data/Testimonials.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
export default function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <div className="px-4">
      <section className="page-w relative overflow-hidden bg-[url('/bg-image-2.webp')] bg-left-bottom bg-no-repeat px-4 py-20 text-white">
        <div className="absolute left-0 top-0 h-full w-full bg-black opacity-80"></div>
        <div className="relative z-10 m-auto mb-5 w-[700px] max-w-full space-y-3 text-center">
          <div className="m-auto w-fit rounded-full bg-green-100 px-6 py-1 text-sm font-bold text-green-500">
            <p>TESTIMONIALS</p>
          </div>
          <h2 className="text-3xl font-bold">What Our Clients Say</h2>
          <h3 className="text-lg font-semibold">
            Hear from Professionals Who Have Transformed Their Online Presence
            with Our Web Solutions
          </h3>
        </div>
        <div className="relative z-10 px-8 md:px-12">
          <Carousel
            plugins={[plugin.current]}
            className="m-auto w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="">
              {Reviews.map((item, index) => {
                return (
                  <CarouselItem
                    key={index}
                    className="basis h-full lg:basis-1/3"
                  >
                    <div className="flex min-h-32 flex-col gap-2 rounded border bg-white p-2 text-start text-black">
                      <div className="flex">
                        {Array.from({ length: item.stars }).map(
                          (num, index) => {
                            return (
                              <svg
                                key={index}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#fde047"
                                viewBox="0 0 24 24"
                                strokeWidth={1}
                                stroke="currentColor"
                                className="h-5 w-5 text-yellow-300"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                                />
                              </svg>
                            );
                          },
                        )}
                      </div>
                      <p className="line-clamp-4 text-sm">{item.message}</p>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </div>
  );
}
