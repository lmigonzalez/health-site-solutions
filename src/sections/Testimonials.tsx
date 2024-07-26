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
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section className="px-4 py-20  page-w text-white rounded relative  bg-my_black">
      <Image
        src={"/svg/asset.svg"}
        alt="svg shape"
        width={500}
        height={500}
        className="absolute right-0 bottom-0 h-full w-auto opacity-5 z-0"
      />
      <div className="w-[700px] max-w-full m-auto text-center space-y-3 mb-5">
        <div className="bg-green-100 bg-opacity-50 text-green-500 rounded-full py-1 px-6 text-sm font-bold w-fit m-auto">
          <p>TESTIMONIALS</p>
        </div>
        <h2 className="text-3xl font-bold">What Our Clients Say</h2>
        <h3 className="text-lg font-semibold">
          Hear from Professionals Who Have Transformed Their Online Presence
          with Our Web Solutions
        </h3>
      </div>
      <div className="px-8 md:px-12">
        <Carousel
          plugins={[plugin.current]}
          className="w-full m-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="">
            {Reviews.map((item, index) => {
              return (
                <CarouselItem key={index} className="basis lg:basis-1/3 h-full">
                  <div className="bg-white border bg-opacity-60 backdrop-blur-sm p-2 flex flex-col text-start rounded gap-2 min-h-32">
                    <div className="flex">
                      {Array.from({ length: item.stars }).map((num, index) => {
                        return (
                          <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#fde047"
                            viewBox="0 0 24 24"
                            strokeWidth={1}
                            stroke="currentColor"
                            className="w-5 h-5 text-yellow-300"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                            />
                          </svg>
                        );
                      })}
                    </div>
                    <p className="text-sm line-clamp-4">{item.message}</p>
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
  );
}
