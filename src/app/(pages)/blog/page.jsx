import React from "react";
import CustomHeader from "@/components/CustomHeader";
import ArticlesPagination from "@/components/ArticlesPagination";
import { createClient } from "contentful";
import Link from "next/link";
export const metadata = {
  title: "Our Blog | Custom Healthcare Web Design & Development Agency",
  description:
    "Stay updated with Health Web Experts. Our blog offers insights on healthcare web design, digital marketing & the latest trends to enhance your online presence.",
};

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});
export default async function Page({ searchParams }) {
  const skip = (Number(searchParams.page || 1) - 1) * 10;

  async function getTitles() {
    try {
      const data = await client.getEntries({
        content_type: "healthSiteSolutions",
        limit: 10,
        skip: skip,
      });

      const articles = data.items.map(({ fields }) => {
        const paragraphNode = fields.content.content.find(
          (item) => item.nodeType === "paragraph",
        );

        const description = paragraphNode.content
          .map((item) => item.value)
          .join("");

        return {
          title: fields.title,
          slug: fields.slug,
          preview: description,
        };
      });

      return { articles, total: data.total };
    } catch (error) {
      return null;
    }
  }

  const { articles, total } = await getTitles();

  return (
    <main className="pt-16 md:px-6">
      {" "}
      <CustomHeader
        title="Our Blog"
        description="Stay informed with the latest insights and trends in healthcare web development through our blog at Health Web Experts. Our articles cover a wide range of topics, from SEO tips and best practices to the latest in medical portal technology. Discover valuable information to help you enhance your online presence and engage more effectively with your patients."
      />
      <div className="page-w my-10 grid gap-5 px-6 md:grid-cols-2 md:px-0">
        {articles?.map((item, index) => {
          return (
            <Link
              className="rounded border-x-2 border-sky-500 bg-white p-2 transition-all hover:shadow"
              key={index}
              href={`/blog/${item.slug}`}
            >
              <div className="space-y-1">
                <h3 className="text-base font-medium">{item.title}</h3>
                <p className="line-clamp-2 text-sm">{item.preview}</p>
              </div>
            </Link>
          );
        })}
      </div>
      <ArticlesPagination total={total} />
    </main>
  );
}
