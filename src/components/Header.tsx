"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";
import { FaRegDotCircle } from "react-icons/fa";

export default function Header() {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const menuItems = ["services", "industries", "work"];
  const pathname = usePathname();

  useEffect(() => {
    setShowSubmenu(false);
  }, [pathname]);

  return (
    <header className="w-full bg-white shadow">
      <div className="flex justify-end bg-sky-700 px-6 py-2">
        <Link
          className="flex items-center gap-2 text-white"
          href={"tel:7867167146"}
        >
          <FaRegDotCircle size={15} className="" /> +1 (786) 716-7146
        </Link>
      </div>
      <nav className="flex w-full items-center justify-between px-6 md:py-2">
        <div className="">
          <Link href={"/"}>
            <Image
              src={"/HWE-dark.png"}
              alt="health web experts dark version logo"
              width={130}
              height={50}
            />
          </Link>
        </div>
        <menu className="hidden items-center gap-3 text-lg md:flex">
          <li>
            <Link
              href={`/`}
              className={`px-2 py-1 font-medium capitalize hover:text-sky-700 transition-colors${
                pathname === "/" ? "rounded bg-sky-50 text-sky-700" : ""
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
                  className={`px-2 py-1 font-medium capitalize hover:text-sky-700 transition-colors${
                    pathname.includes(item)
                      ? "rounded bg-sky-50 text-sky-700"
                      : ""
                  } `}
                >
                  {item}
                </Link>
              </li>
            );
          })}
          <li className="relative">
            <button
              onClick={() => setShowSubmenu(!showSubmenu)}
              className="flex items-center justify-center gap-1 transition-colors hover:text-sky-700"
            >
              More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`size-5 ${showSubmenu ? "rotate-180 transform" : "rotate-0 transform"} transition-all`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
            {showSubmenu && (
              <ul className="-top-0-full absolute left-1/2 z-30 flex -translate-x-1/2 flex-col gap-2 rounded bg-white p-4 text-center text-base shadow">
                <li>
                  <Link
                    href={"/about"}
                    className={`px-2 py-1 font-medium capitalize hover:text-sky-700 transition-colors${
                      pathname.includes("/about")
                        ? "rounded bg-sky-50 text-sky-700"
                        : ""
                    } `}
                  >
                    About
                  </Link>{" "}
                </li>
                <li>
                  <Link
                    href={"pricing"}
                    className={`px-2 py-1 font-medium capitalize hover:text-sky-700 transition-colors${
                      pathname.includes("/pricing")
                        ? "rounded bg-sky-50 text-sky-700"
                        : ""
                    } `}
                  >
                    Pricing
                  </Link>{" "}
                </li>
                <li>
                  <Link
                    href={"/blog"}
                    className={`px-2 py-1 font-medium capitalize hover:text-sky-700 transition-colors${
                      pathname.includes("/blog")
                        ? "rounded bg-sky-50 text-sky-700"
                        : ""
                    } `}
                  >
                    Blog
                  </Link>{" "}
                </li>
              </ul>
            )}
          </li>
        </menu>
        <div className="hidden items-center justify-center gap-5 md:flex">
          <Link href={"/contact"} className="main-btn">
            Contact Us
          </Link>
        </div>
        <MobileMenu />
      </nav>
    </header>
  );
}
