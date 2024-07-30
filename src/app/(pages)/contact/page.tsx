"use client";
import React from "react";
import CustomHeader from "@/components/CustomHeader";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";
import axios from "axios";
type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  tel: string;
  services: string;
  company: string;
  notes: string;
};
export default function Page() {
  const {
    register,
    handleSubmit,
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
    <main className="px-6 py-24">
      <CustomHeader
        title="Contact Us"
        description="Get in touch with the team at Health Site Solutions to discuss your healthcare web development needs. We are here to answer any questions, provide more information about our services, and help you start your next project. Reach out today to see how we can support your online presence and drive success for your healthcare organization."
      />
      <div className="page-w mt-10 grid gap-10 md:grid-cols-2">
        <div className="w-full">
          <h3 className="mb-5 text-3xl font-semibold">Connect with us</h3>
          <div className="mb-3">
            <h5 className="text-xl font-semibold">Location</h5>
            <p className="flex items-center gap-1 font-semibold">
              <GoDotFill color="#0ea5e9" /> We are located in the sunny
              city of Miami, FL.
            </p>
          </div>
          <div className="mb-3">
            <h5 className="text-xl font-semibold">Phone #</h5>
            <Link
              href={""}
              className="flex items-center gap-1 font-semibold text-sky-500"
            >
              <GoDotFill /> (786) 564-4433
            </Link>
          </div>
          <div className="mb-3">
            <h5 className="text-xl font-semibold">Technical Support</h5>
            <Link
              href={"/"}
              className="flex items-center gap-1 font-semibold text-sky-500"
            >
              <GoDotFill /> support@healthsitesolutions.com
            </Link>
          </div>
          <div className="mb-3">
            <h5 className="text-xl font-semibold">General Inquiries</h5>
            <Link
              href={""}
              className="flex items-center gap-1 font-semibold text-sky-500"
            >
              <GoDotFill /> info@healthsitesolutions.com
            </Link>
          </div>
        </div>
        <div className="m-auto w-full bg-green-100">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid gap-5 rounded bg-white p-6 shadow md:grid-cols-2"
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
                <p
                  className="mt-1 text-sm font-light text-red-500"
                  role="alert"
                >
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
                <option value="Basic">Basic - $750</option>
                <option value="Professional">Professional - $1,500</option>
                <option value="Premium">Premium - $4,000</option>
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
      </div>
    </main>
  );
}
