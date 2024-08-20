"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import CallToAction from "@/sections/CallToAction";
import { usePathname } from "next/navigation";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";
const pageToAvoid = ["/contact"];
export default function Footer() {
  const pathname = usePathname();

  return (
    <section className="mt-auto">
      {!pageToAvoid.includes(pathname) && <CallToAction />}

      <footer className="w-full bg-my_black p-6 text-white">
        <div className="page-w grid gap-5 md:grid-cols-4">
          <div className="space-y-2">
            <Link href={"/"}>
              <Image
                src={"/HWE-light.png"}
                alt="health web experts dark version logo"
                width={130}
                height={50}
              />
            </Link>
            <p className="text-sm">
              Empowering Healthcare with <br /> Digital Excellence
            </p>
          </div>
          <menu className="space-y-2">
            <li>
              <b className="font-semibold">Company</b>
            </li>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/about"}>About Us</Link>
            </li>
            <li>
              <Link href={"/blog"}>Blog</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact Us</Link>
            </li>
            <li>
              <Link href={"/privacy-policy"}>Privacy Policy</Link>
            </li>
            <li>
              <Link href={"/terms-of-service"}>Terms of Service</Link>
            </li>
          </menu>

          <menu className="space-y-2">
            <li>
              <b className="font-semibold">Services</b>
            </li>
            <li>
              <Link href={"/services"}>Services</Link>
            </li>
            <li>
              <Link href={"/industries"}>Industries</Link>
            </li>
            <li>
              <Link href={"/pricing"}>Pricing</Link>
            </li>
          </menu>

          <div className="space-y-2">
            <b className="font-semibold">Connect</b>
            <menu className="flex items-center gap-2">
              {/* <li>
                <Link
                  href={"/"}
                  aria-label="Visit Our linkedin Page"
                  target="_blank"
                >
                  <FaFacebookSquare size={25} />
                </Link>
              </li> */}
              <li>
                <Link
                  href={"https://www.instagram.com/healthwebexperts/"}
                  target="_blank"
                  aria-label="Visit Our Instagram Page"
                >
                  <FaInstagramSquare size={25} />
                </Link>
              </li>
              <li>
                <Link
                  href={"/https://www.linkedin.com/company/health-web-experts/"}
                  target="_blank"
                  aria-label="Visit Our Linkedin Page"
                >
                  <FaLinkedin size={25} />
                </Link>
              </li>
            </menu>
            <div className="text-sm font-semibold text-sky-100">
              <Link href={"/"}>info@healthwebexperts.com</Link>
            </div>
          </div>
        </div>
        <hr className="my-10 opacity-50" />
        <div className="page-w">
          <small className="">
            @2024 Health Web Experts - All rights reserved
          </small>
        </div>
      </footer>
    </section>
  );
}
