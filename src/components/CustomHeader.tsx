import React from "react";

interface Props {
  title: string;
  description: string;
}

export default function CustomHeader({ title, description }: Props) {
  return (
    <div className="">
      <div
        style={{
          backgroundImage: "url(/svg/bg-2.svg)",
        }}
        className="relative m-auto flex min-h-[200px] w-full max-w-full items-center justify-center border-sky-700 bg-white px-6 py-10 shadow-md md:w-[1380px] md:rounded-xl md:border-x-4"
      >
        <div className="md:custom-angled-border absolute -top-[25px] left-0 right-0 m-auto flex h-[50px] w-fit items-center justify-center rounded bg-sky-700 px-6 text-center text-lg font-medium text-white md:-top-[6px] md:px-10 md:text-xl">
          <h1 className="md:custom-angled-text">{title}</h1>
        </div>

        <p className="max-w-[700px] text-center font-medium">{description}</p>
      </div>
    </div>
  );
}
