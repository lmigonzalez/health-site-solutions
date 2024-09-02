import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import matter from "gray-matter";
import path from "path";
import fs from "fs";

export async function generateMetadata({
  params,
}: {
  params: { service: string };
}) {
  const name = params.service;

  // Fetch all MDX files in the content directory
  const servicesDir = path.join(process.cwd(), "src", "content");
  const fileNames = fs.readdirSync(servicesDir);

  // Find the specific MDX file based on the route parameter
  const fullPath = fileNames.find(
    (fileName) => fileName.replace(/\.mdx$/, "") === name,
  );

  const fileContents = fs.readFileSync(
    path.join(servicesDir, fullPath as string),
    "utf8",
  );
  const { data } = matter(fileContents);


  return {
    title: data.title,
    description: data.description,
  };
}

export default async function Page({
  params,
}: {
  params: { service: string };
}) {
  const name = params.service;

  // Fetch all MDX files in the content directory
  const servicesDir = path.join(process.cwd(), "src", "content");
  const fileNames = fs.readdirSync(servicesDir);

  // Find the specific MDX file based on the route parameter
  const fullPath = fileNames.find(
    (fileName) => fileName.replace(/\.mdx$/, "") === name,
  );

  if (!fullPath) {
    return (
      <div>
        <p>Service not found</p>
      </div>
    );
  }

  const fileContents = fs.readFileSync(
    path.join(servicesDir, fullPath),
    "utf8",
  );
  const { content } = matter(fileContents);

  return (
    <main className="pt-16 md:px-6">
      <article className="services">
        <MDXRemote source={content} />
      </article>
    </main>
  );
}
