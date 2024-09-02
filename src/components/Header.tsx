"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";
import { FaRegDotCircle } from "react-icons/fa";

export default function Header() {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const menuItems = ["services", "industries", "work", "pricing", "about"];
  const pathname = usePathname();

  useEffect(() => {
    setShowSubmenu(false);
  }, [pathname]);

  return (
    <header className="w-full bg-white shadow">
      <div className="hidden justify-end bg-sky-700 px-6 py-2 md:flex">
        <Link
          className="flex items-center gap-2 text-white transition-colors hover:text-green-200"
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
