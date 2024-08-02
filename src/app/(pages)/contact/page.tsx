"use client";
import React, { useEffect } from "react";
import CustomHeader from "@/components/CustomHeader";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import FAQ from "@/components/FAQ";
import Image from "next/image";
type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  tel: string;
  services: string;
  company: string;
  notes: string;
};
export const dynamic = "force-dynamic";
export default function Page({
  searchParams,
}: {
  searchParams: { package: string };
}) {
  const params = searchParams.package;

  useEffect(() => {
    if (searchParams) {
      setValue("services", params);
    }
  }, [searchParams]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    defaultValues: {
      services: "Professional",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      console.log(data);

      // const res = await axios.post("/api/contact", data);
    } catch (error) {}
  };
  return (
    <main className="px-6 pt-24">
      <CustomHeader
        title="Contact Us"
        description="Get in touch with the team at Health Site Solutions to discuss your healthcare web development needs. We are here to answer any questions, provide more information about our services, and help you start your next project. Reach out today to see how we can support your online presence and drive success for your healthcare organization."
      />

      <div className="custom-space page-w grid grid-cols-3 gap-10">
        <div className="flex items-center">
          <Image
            src={"/contact/email.png"}
            alt="mail icon logo"
            width={400}
            height={400}
            className="opacity-50"
          />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="col-span-2 m-auto grid w-[800px] max-w-full gap-5 rounded-xl bg-white p-6 shadow md:grid-cols-2"
        >
          <div className="flex flex-col">
            <label className="font-semibold after:text-red-500 after:content-['*']">
              First Name:
            </label>
            <input
              type="text"
              {...register("firstName", {
                required: "First Name is required",
              })}
              aria-invalid={errors.firstName ? "true" : "false"}
              className="h-10 rounded border px-2"
            />
            {errors.firstName && (
              <p className="mt-1 text-sm font-light text-red-500" role="alert">
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="font-semibold after:text-red-500 after:content-['*']">
              Last Name:
            </label>
            <input
              type="text"
              {...register("lastName", {
                required: "last Name is required",
              })}
              aria-invalid={errors.lastName ? "true" : "false"}
              className="h-10 rounded border px-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold after:text-red-500 after:content-['*']">
              Email Address:
            </label>
            <input
              type="text"
              {...register("email", {
                required: "Email Address is required",
              })}
              aria-invalid={errors.email ? "true" : "false"}
              className="h-10 rounded border px-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold">Phone Number:</label>
            <input
              type="text"
              {...register("tel", {
                required: "Phone Number is required",
              })}
              aria-invalid={errors.tel ? "true" : "false"}
              className="h-10 rounded border px-2"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold">Service Package:</label>
            <select
              {...register("services")}
              aria-invalid={errors.services ? "true" : "false"}
              className="h-10 rounded border px-2"
            >
              <option value="basic">Basic - $750</option>
              <option value="professional">Professional - $1,500</option>
              <option value="premium">Premium - $4,000</option>
              <option value="Custom">Custom</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="font-semibold">Company Name:</label>
            <input
              type="text"
              {...register("company")}
              aria-invalid={errors.tel ? "true" : "false"}
              className="h-10 rounded border px-2"
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="font-semibold">Message:</label>
            <textarea
              {...register("notes")}
              aria-invalid={errors.notes ? "true" : "false"}
              className="h-10 min-h-24 rounded border p-2"
            />
          </div>

          <div className="flex justify-end md:col-span-2">
            <button className="main-btn">Submit Form</button>
          </div>
        </form>
      </div>
      <FAQ />
    </main>
  );
}
