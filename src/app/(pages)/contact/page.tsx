"use client";
import React, { useEffect } from "react";
import CustomHeader from "@/components/CustomHeader";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import FAQ from "@/components/FAQ";
import LoadingSpinner from "@/components/LoadingSpinner";
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
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    defaultValues: {
      services: "professional",
    },
  });

  useEffect(() => {
    if (searchParams.package) {
      setValue("services", params);
    }
  }, [searchParams]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await axios.post("/api/contact", data);
    } catch (error) {}
  };

  return (
    <main className="pt-16 md:px-6">
      <CustomHeader
        title="Contact Us"
        description="Get in touch with the team at Health Web Experts to discuss your healthcare web development needs. We are here to answer any questions, provide more information about our services, and help you start your next project. Reach out today to see how we can support your online presence and drive success for your healthcare organization."
      />

      <div className="custom-space page-w flex items-center justify-between gap-10 px-6">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="m-auto grid w-[800px] max-w-full gap-5 md:grid-cols-2"
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
            {errors.lastName && (
              <p className="mt-1 text-sm font-light text-red-500" role="alert">
                {errors.lastName.message}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="font-semibold after:text-red-500 after:content-['*']">
              Email Address:
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email Address is required",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Entered value does not match email format",
                },
              })}
              aria-invalid={errors.email ? "true" : "false"}
              className="h-10 rounded border px-2"
            />
            {errors.email && (
              <p className="mt-1 text-sm font-light text-red-500" role="alert">
                {errors.email.message}
              </p>
            )}
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
              className="h-10 min-h-28 rounded border p-2"
            />
          </div>

          <div className="flex justify-end md:col-span-2">
            <button
              disabled={isSubmitting}
              className={`rounded px-4 py-2 font-semibold text-white transition-all ${
                isSubmitting ? "bg-gray-200" : "bg-sky-600 hover:bg-sky-900"
              }`}
            >
              {isSubmitting ? <LoadingSpinner size="small" /> : "Submit Form"}
            </button>
          </div>
        </form>
      </div>
      <FAQ />
    </main>
  );
}
