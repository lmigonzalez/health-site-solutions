import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="mt-auto w-full bg-my_black p-6 text-white">
      <div className="page-w grid grid-cols-4 gap-5">
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
            <h5 className="font-semibold">Company</h5>
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
            <Link href={"/terms-services"}>Terms of Service</Link>
          </li>
        </menu>

        <menu className="space-y-2">
          <li>
            <h5 className="font-semibold">Services</h5>
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
          <h5 className="font-semibold">Connect</h5>
          <menu className="flex items-center gap-2">
            <li>
              <Link href={"/"}>
                <FaFacebookSquare size={25} />
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <FaInstagramSquare size={25} />
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <FaLinkedin size={25} />
              </Link>
            </li>
          </menu>
          <div className="text-sm font-semibold text-sky-500">
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
  );
}
