"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
export default function Header() {
  const menuItems = [
    "about",
    "services",
    "work",
    "industries",
    "blog",
    "contact",
  ];
  const pathname = usePathname();
  return (
    <header className="w-full p-6 bg-white shadow">
      <nav className="page-w flex justify-between items-center">
        <div className="">
          <Link href={""}>
            <Image
              src={"/HSS-logo-dark.png"}
              alt="health site solutions dark version logo"
              width={150}
              height={50}
            />
          </Link>
        </div>
        <menu className="flex items-center gap-1">
          <li>
            <Link
              href={`/`}
              className={`px-2 py-1 capitalize font-medium${
                pathname === "/" ? " text-sky-500 rounded bg-sky-50" : ""
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
                      ? " text-sky-500 rounded bg-sky-50"
                      : ""
                  } `}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </menu>
        <div className="">
          <Link href={"/"} className="main-btn">
            Book a Call
          </Link>
        </div>
      </nav>
    </header>
  );
}
