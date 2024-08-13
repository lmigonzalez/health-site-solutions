import React from "react";

interface Props {
  title: string;
}

export default function HeadingDecorator({ title }: Props) {
  return (
    <div className="flex items-center">
      <div className="h-[2px] w-full bg-sky-100"></div>
      <div className="text-nowrap rounded bg-sky-100 px-4 py-2 text-3xl font-semibold text-sky-500 shadow-lg">
        <h1>{title}</h1>
      </div>
      <div className="h-[2px] w-full bg-sky-100"></div>
    </div>
  );
}
