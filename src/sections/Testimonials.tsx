import React from "react";
import Image from "next/image";
export default function Testimonials() {
  return (
    <section className="px-4 py-20  page-w text-white rounded relative  bg-my_black">
      <Image
        src={"/svg/asset.svg"}
        alt="svg shape"
        width={500}
        height={500}
        className="absolute right-0 bottom-0 h-full w-auto opacity-5 z-0"
      />
      <div className="w-[700px] max-w-full m-auto text-center space-y-3">
        <div className="bg-green-100 bg-opacity-50 text-green-500 rounded-full py-1 px-6 text-sm font-bold w-fit m-auto">
          <p>TESTIMONIALS</p>
        </div>
        <h2 className="text-3xl font-bold">What Our Clients Say</h2>
        <h3 className="text-lg font-semibold">
          Hear from Professionals Who Have Transformed Their Online Presence
          with Our Web Solutions
        </h3>
      </div>
    </section>
  );
}
