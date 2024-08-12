import React from "react";

interface SizeProps {
  size: "small" | "medium" | "large";
}

const LoadingSpinner: React.FC<SizeProps> = ({ size }) => {
  return (
    <div
      className={`${
        size === "small"
          ? "h-4 w-4"
          : size === "medium"
            ? "h-8 w-8"
            : "h-12 w-12"
      } inline-block animate-spin rounded-full border-2 border-solid border-black border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  );
};

export default LoadingSpinner;
