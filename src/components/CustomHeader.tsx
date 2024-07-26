import React from "react";

interface Props {
  title: string;
  description: string;
}

export default function CustomHeader({ title, description }: Props) {
  return (
    <div className="md:px-6">
      <div
        style={{
          backgroundImage: "url(/svg/bg-2.svg)",
        }}
        className="relative m-auto flex min-h-[200px] w-full max-w-full items-center justify-center rounded-xl border-x-4 border-sky-500 bg-white px-6 py-10 shadow-md md:w-[1380px]"
      >
        <div className="custom-angled-border absolute -top-[10px] left-0 right-0 m-auto flex h-[60px] w-fit items-center justify-center rounded bg-sky-500 px-10 text-center text-xl font-semibold text-white md:text-3xl">
          <h1 className="custom-angled-text">{title}</h1>
        </div>

        <p className="max-w-[700px] text-center font-medium">{description}</p>
      </div>
    </div>
  );
}
