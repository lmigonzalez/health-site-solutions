"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll";
import { EmblaOptionsType } from "embla-carousel";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaShopify,
  FaNodeJs,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/ui/carousel";

export default function TechStack() {
  const skills = [
    { icon: <FaHtml5 size={25} />, name: "HTML" },
    { icon: <FaCss3Alt size={25} />, name: "CSS" },
    { icon: <IoLogoJavascript size={25} />, name: "JAVASCRIPT" },
    { icon: <SiTypescript size={25} />, name: "TYPESCRIPT" },
    { icon: <SiTailwindcss size={25} />, name: "TAILWIND" },
    { icon: <FaReact size={25} />, name: "REACT" },
    { icon: <SiNextdotjs size={25} />, name: "NEXT.JS" },
    { icon: <FaNodeJs size={25} />, name: "NODE" },
    { icon: <SiExpress size={25} />, name: "EXPRESS" },
    { icon: <SiMongodb size={25} />, name: "MONGODB" },
    { icon: <SiMysql size={25} />, name: "SQL" },
    { icon: <FaShopify size={25} />, name: "SHOPIFY" },
    { icon: <FaShopify size={25} />, name: "LIQUID" },
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
          <p>TECH STACK</p>
        </div>
        <h2 className="text-3xl font-bold">Our Technology Stack</h2>
        <h3 className="text-lg font-semibold">
          Leveraging the Latest Tools to Deliver Exceptional Healthcare Websites
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
            {skills.map((item, index) => {
              return (
                <CarouselItem
                  key={index}
                  className="basis-1/2 md:basis-1/5 lg:basis-[13%] gap-5"
                >
                  <div className="bg-my_black text-white py-5 px-1 text-center flex justify-center items-center rounded gap-2 border border-my_black">
                    {item.icon}
                    <b className="font-semibold">{item.name}</b>
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
