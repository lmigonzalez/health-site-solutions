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
      <div className="page-w grid grid-cols-5">
        <div className="space-y-2">
          <Link href={"/"}>
            <Image
              src={"/HSS-logo-light.png"}
              alt="white version of the health site solution logo"
              width={150}
              height={150}
            />
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            illo!
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

        <menu className="space-y-2">
          <li>
            <h5 className="font-semibold">Legal</h5>
          </li>
          <li>
            <Link href={"/privacy-policy"}>Privacy Policy</Link>
          </li>
          <li>
            <Link href={"/terms-services"}>Terms of Service</Link>
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
          <div className="text-sky-500">
            <Link href={"/"}>contact@healthsitesolutions.com</Link>
          </div>
        </div>
      </div>
      <hr className="my-10 opacity-50" />
      <div className="page-w">
        <small className="">
          @2024 Health Site Solutions - All rights reserved
        </small>
      </div>
    </footer>
  );
}
