import React from "react";

export default function CustomSeparator() {
  return (
    <div className="custom-space relative m-auto flex w-fit items-center justify-center gap-5">
      <div className="absolute left-1/2 top-1/2 h-1 w-full -translate-x-1/2 -translate-y-1/2 transform bg-green-300"></div>
      <div className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full border border-green-500 bg-slate-50">
        <div className="h-4 w-4 rounded-full bg-green-300"></div>
      </div>
      <div className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full border border-green-500 bg-slate-50">
        <div className="h-4 w-4 rounded-full bg-green-300"></div>
      </div>
      <div className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full border border-green-500 bg-slate-50">
        <div className="h-4 w-4 rounded-full bg-green-300"></div>
      </div>
    </div>
  );
}
