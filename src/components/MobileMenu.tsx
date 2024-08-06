"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function MobileMenu() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuItems = [
    "services",
    "industries",
    "work",
    "about",
    "pricing",
    "contact",
  ];
  const pathname = usePathname();

  useEffect(() => {
    setOpenMenu(false);
  }, [pathname]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.currentTarget.classList.toggle("active");
    setOpenMenu(!openMenu);
  };
  return (
    <div className="relative block md:hidden">
      <div className="container relative z-50 p-0" onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 200 200"
        >
          <g strokeWidth="7" strokeLinecap="round">
            <path
              d="M72 82.286h28.75"
              fill="#0ea5e9"
              fillRule="evenodd"
              stroke="#0ea5e9"
            />
            <path
              d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554"
              fill="none"
              stroke="#0ea5e9"
            />
            <path
              d="M72 125.143h28.75"
              fill="#0ea5e9"
              fillRule="evenodd"
              stroke="#0ea5e9"
            />
            <path
              d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554"
              fill="none"
              stroke="#0ea5e9"
            />
            <path
              d="M100.75 82.286h28.75"
              fill="#0ea5e9"
              fillRule="evenodd"
              stroke="#0ea5e9"
            />
            <path
              d="M100.75 125.143h28.75"
              fill="#0ea5e9"
              fillRule="evenodd"
              stroke="#0ea5e9"
            />
          </g>
        </svg>
      </div>

      <div
        className={`${!openMenu ? "-left-full" : "left-0"} fixed top-0 z-40 flex h-full w-1/3 bg-black bg-opacity-40 backdrop-blur-sm transition-all duration-300`}
      ></div>
      <menu
        className={`${!openMenu ? "-right-full" : "right-0"} fixed top-0 z-40 flex h-full w-2/3 flex-col items-center justify-start gap-10 bg-white pt-36 text-lg transition-all duration-300`}
      >
        <li>
          <Link
            href={`/`}
            className={`px-2 py-1 capitalize font-medium${
              pathname === "/" ? "rounded bg-sky-50 text-sky-500" : ""
            } `}
          >
            Home
          </Link>
        </li>
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                href={`/${item}`}
                className={`px-2 py-1 capitalize font-medium${
                  pathname.includes(item)
                    ? "rounded bg-sky-50 text-sky-500"
                    : ""
                } `}
              >
                {item}
              </Link>
            </li>
          );
        })}
      </menu>
    </div>
  );
}
