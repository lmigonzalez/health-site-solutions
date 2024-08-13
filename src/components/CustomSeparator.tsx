import React from "react";

export default function CustomSeparator() {
  return (
    <div className="custom-space relative m-auto flex w-fit items-center justify-center gap-5">
      <div className="absolute left-1/2 top-1/2 h-0.5 w-full -translate-x-1/2 -translate-y-1/2 transform bg-gray-300"></div>
      <div className="relative z-10 flex h-5 w-5 items-center justify-center rounded-full border border-gray-300 bg-slate-50">
        <div className="h-2 w-2 rounded-full bg-gray-300"></div>
      </div>
      <div className="relative z-10 flex h-5 w-5 items-center justify-center rounded-full border border-gray-300 bg-slate-50">
        <div className="h-2 w-2 rounded-full bg-gray-300"></div>
      </div>
      <div className="relative z-10 flex h-5 w-5 items-center justify-center rounded-full border border-gray-300 bg-slate-50">
        <div className="h-2 w-2 rounded-full bg-gray-300"></div>
      </div>
    </div>
  );
}
