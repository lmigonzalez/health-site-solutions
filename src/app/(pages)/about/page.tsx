import React from "react";
import CustomHeader from "@/components/CustomHeader";
import Link from "next/link";
import Image from "next/image";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaGitSquare,
  FaGithubSquare,
} from "react-icons/fa";
import {
  RiJavascriptFill,
  RiTailwindCssFill,
  RiNextjsFill,
} from "react-icons/ri";
import {
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGoogleanalytics,
  SiVercel,
} from "react-icons/si";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Custom Healthcare Web Design & Development Agency",
  description:
    "Health Web Experts specializes in custom health web design solutions for healthcare. We empower providers with innovative designs, advanced technology & support",
};
export default function Page() {
  const skills = [
    { icon: <FaHtml5 size={25} />, name: "HTML" },
    { icon: <FaCss3Alt size={25} />, name: "CSS" },
    { icon: <RiJavascriptFill size={25} />, name: "JAVASCRIPT" },
    { icon: <SiTypescript size={25} />, name: "TYPESCRIPT" },
    { icon: <RiTailwindCssFill size={25} />, name: "TAILWIND" },
    { icon: <FaReact size={25} />, name: "REACT" },
    { icon: <RiNextjsFill size={25} />, name: "NEXT.JS" },
    { icon: <FaNodeJs size={25} />, name: "NODE" },
    { icon: <SiExpress size={25} />, name: "EXPRESS" },
    { icon: <SiMongodb size={25} />, name: "MONGODB" },
    { icon: <SiMysql size={25} />, name: "SQL" },
    { icon: <FaGitSquare size={25} />, name: "GIT" },
    { icon: <FaGithubSquare size={25} />, name: "GITHUB" },
    { icon: <SiGoogleanalytics size={25} />, name: "ANALYTICS" },
    { icon: <FaFigma size={25} />, name: "FIGMA" },
    { icon: <SiVercel size={25} />, name: "VERCEL" },
  ];

  return (
    <main className="pt-16 md:px-6">
      {" "}
      <CustomHeader
        title="About Us"
        description="Welcome to our Healthcare Web Design & Development Agency. We specialize in creating innovative web solutions for the healthcare industry, enhancing online presence with advanced technology and personalized service. Discover our mission, values, and talented team."
      />
      <div className="page-w px-6">
        <div className="custom-space">
          <div className="mb-10">
            {" "}
            <h2 className="mb-5 text-3xl font-bold">Our Team</h2>
            <p className="">
              Our team is a group of passionate professionals with a diverse
              range of expertise in web development, design, SEO, and digital
              marketing. We are committed to providing exceptional service and
              delivering high-quality results for our clients.{" "}
            </p>
          </div>

          <p className="font-bold"> Meet some of our key team members:</p>
          <ul className="my-10 grid gap-10 md:grid-cols-3">
            <li className="flex flex-col items-center justify-center gap-2 rounded border-green-500 p-6 shadow md:border-l-2">
              <Image
                src={"/about/Luis-w.png"}
                alt=""
                width={100}
                height={100}
              />
              <p className="rounded bg-green-100 px-4 py-1 text-sm font-semibold text-green-500">
                Founder & CEO
              </p>
              <b className="font-semibold">Luis Gonzalez</b>
              <p className="text-sm">
                Luis Gonzalez is the Founder and CEO, a full-stack web developer
                with 4 years of experience specializing in creating visually
                appealing websites using Next.js.
              </p>
            </li>
            <li className="flex flex-col items-center justify-center gap-2 rounded p-6 shadow">
              <Image src={"/about/Jose.png"} alt="" width={100} height={100} />
              <p className="rounded bg-green-100 px-4 py-1 text-sm font-semibold text-green-500">
                Lead Developer
              </p>
              <b className="font-semibold">Jose Gonzalez</b>
              <p className="text-sm">
                With 6 years of experience, Jose Gonzalez is a full-stack web
                developer who excels in problem-solving and primarily works with
                Next.js.
              </p>
            </li>
            <li className="flex flex-col items-center justify-center gap-2 rounded border-green-500 p-6 shadow md:border-r-2">
              <Image
                src={"/about/Claudia-w.png"}
                alt=""
                width={100}
                height={100}
              />
              <p className="rounded bg-green-100 px-4 py-1 text-sm font-semibold text-green-500">
                Web Designer
              </p>
              <b className="font-semibold">Claudia Leon</b>
              <p className="text-sm">
                Claudia Leon is a web designer with over 3 years of experience.
                She studied medicine for 3 years in college and her favorite
                design tool is Figma.
              </p>
            </li>
          </ul>
        </div>

        <div className="custom-space mx-auto max-w-[800px]">
          {" "}
          <h3 className="mb-5 text-2xl font-bold">Tech We Love and Use</h3>
          <p className="">
            At Health Web Experts, we utilize a variety of cutting-edge
            technologies and tools to deliver the best possible solutions for
            our clients. Here are some of the technologies we love and use:
          </p>
          <div className="m-auto mt-5 flex max-w-fit flex-wrap justify-center gap-1">
            {skills.map((item, index) => {
              return (
                <div key={index} className="flex items-center justify-center">
                  <div className="flex aspect-square size-10 flex-col items-center justify-center gap-1 rounded-full bg-gray-200 p-0.5 text-gray-500 md:size-14">
                    {item.icon}
                    {/* <p className="text-xs font-semibold">{item.name}</p> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="page-w-8 px-0">
          <h2 className="text-3xl font-bold">
            Why We Choose the Healthcare Industry
          </h2>
          <div className="mt-5 space-y-3">
            <p>
              The healthcare industry is a vital and dynamic field that requires
              a specialized approach to web development and design. We chose to
              focus on healthcare for several compelling reasons:
            </p>
            <p>
              Throughout the years, we have worked with a wide variety of
              industries, but we found ourselves particularly drawn to
              healthcare. As we collaborated with hospitals, clinics, dental
              practices, and other healthcare providers, we discovered a deep
              sense of fulfillment in our work. We realized that by creating and
              enhancing websites for the healthcare industry, we were making a
              meaningful difference.
            </p>
            <p>
              We felt a unique satisfaction knowing that our efforts were
              helping healthcare providers reach more patients, improve patient
              engagement, and streamline their operations. Our websites not only
              served as informational resources but also as essential tools for
              patient care and communication.
            </p>
            <p>
              With all the experience and expertise we gained, we made the
              decision to focus exclusively on the healthcare niche. This
              specialization allows us to become even better at what we do and
              provide the best possible experience for our clients. By
              concentrating our efforts, we can stay ahead of industry trends,
              understand the specific needs and challenges of healthcare
              providers, and develop innovative solutions tailored to this
              field.
            </p>
            <p>
              Our commitment to the healthcare industry is driven by our desire
              to contribute to better healthcare outcomes. We believe that a
              strong online presence is crucial for healthcare providers, and we
              are dedicated to helping them achieve this. Our mission is to
              empower healthcare providers with exceptional digital solutions
              that enhance their online presence, improve patient engagement,
              and drive business growth.
            </p>
            <div className="">
              <b className="text-lg">
                By focusing exclusively on healthcare, we are able to:
              </b>
            </div>

            <ul className="list-inside list-disc space-y-2">
              <li>
                {" "}
                <strong>Deepen Our Expertise: </strong> We continuously expand
                our knowledge and skills in healthcare web development, design,
                and digital marketing.
              </li>
              <li>
                {" "}
                <strong>Provide Tailored Solutions:</strong> We understand the
                unique needs of healthcare providers and create customized
                solutions that address their specific requirements.
              </li>
              <li>
                {" "}
                <strong>Stay Ahead of Trends:</strong> We keep up with the
                latest developments in healthcare technology and digital
                marketing to ensure our clients benefit from cutting-edge
                solutions.
              </li>
              <li>
                {" "}
                <strong>Deliver Better Results:</strong> Our specialized focus
                allows us to achieve better outcomes for our clients, helping
                them to grow and succeed in their mission to provide excellent
                patient care.
              </li>
            </ul>
            <p>
              We are passionate about making a positive impact on healthcare
              providers and their patients. Our dedication to the healthcare
              industry drives us to deliver the highest quality services and
              support, ensuring our clients have the tools they need to thrive
              in the digital age.
            </p>
            <p>
              Thank you for considering Health Web Experts as your partner in
              digital transformation. We look forward to working with you to
              create a powerful and effective online presence for your
              healthcare practice.
            </p>
          </div>
        </div>

        <div className="custom-space m-auto max-w-[800px] md:px-0">
          <h2 className="mb-5 text-3xl font-bold">Our Mission</h2>
          <p className="">
            Our mission is to empower healthcare providers with exceptional
            digital solutions that enhance their online presence, improve
            patient engagement, and drive business growth. We are dedicated to:
          </p>

          <div className=" ">
            <ul className="mt-10 list-image-[url(/icons/check.png)] space-y-5 pl-5 md:pl-0">
              <li className="">
                <b>Excellence:</b> Delivering high-quality web development and
                design services that exceed our clients&apos; expectations. We
                strive for perfection in every project, ensuring that each
                website is visually appealing, user-friendly, and optimized for
                performance. Our commitment to excellence means that we
                continuously seek out new ways to innovate and improve our
                services.
              </li>
              <li className="">
                <b>Partnership:</b> Building long-term relationships with our
                clients based on trust, collaboration, and mutual success. We
                view our clients as partners and are invested in their success.
                By working closely together, we ensure that our solutions are
                perfectly aligned with their goals and needs. Our collaborative
                approach fosters open communication and shared achievements.
              </li>
              <li className="">
                <b>Innovation:</b> Continuously seeking out new technologies and
                methods to keep our clients at the cutting edge of digital
                healthcare. We stay ahead of industry trends and incorporate the
                latest advancements into our services. Our innovative mindset
                allows us to develop unique solutions that address the evolving
                challenges faced by healthcare providers, helping them to stay
                competitive and efficient.
              </li>
              <li className="">
                <b>Community:</b> Supporting the healthcare community by
                providing resources, expertise, and services that contribute to
                better healthcare outcomes. We are committed to giving back to
                the community and helping to improve the overall quality of
                healthcare. By offering educational content, participating in
                industry events, and sharing best practices, we aim to elevate
                the standards of digital healthcare.
              </li>
            </ul>
          </div>

          <div className="custom-space mx-auto">
            <Image
              src={"/about/healthcare-community-collaboration.webp"}
              alt="A diverse group of healthcare professionals from various fields collaborating in a supportive environment, with representations of different healthcare settings such as hospitals, clinics, and pharmacies, symbolizing digital transformation in healthcare."
              width={800}
              height={500}
              className="m-auto mb-10 rounded-xl shadow"
            />
            <h3 className="text-2xl font-bold">
              Serving the Healthcare Community
            </h3>
            <div className="mt-5 space-y-2 rounded-xl border-l-4 border-green-500 p-5">
              {" "}
              <p className="">
                We are proud to serve a wide range of healthcare providers,
                including hospitals, clinics, practices, dentists, laboratories,
                pharmacies, startups, telehealth providers, urgent care centers,
                rehab centers, home health agencies, mental health
                professionals, nursing homes, and medical supply companies.
              </p>
              <p>
                Thank you for considering Health Web Experts as your partner in
                digital transformation. We look forward to working with you to
                create a powerful and effective online presence for your
                healthcare practice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
