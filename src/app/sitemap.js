import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

const URL = "https://www.healthwebexperts.com/";

async function getArticles() {
  try {
    const res = await client.getEntries({
      content_type: "healthSiteSolutions",
      limit: 1000,
    });

    const tDate = new Date();

    const extraPages = [
      {
        slug: ``,
        data: tDate.toISOString(),
      },
      {
        slug: `services`,
        data: tDate.toISOString(),
      },
      {
        slug: `industries`,
        data: tDate.toISOString(),
      },
      {
        slug: `work`,
        data: tDate.toISOString(),
      },
      {
        slug: `about`,
        data: tDate.toISOString(),
      },
      {
        slug: `blog`,
        data: tDate.toISOString(),
      },
      {
        slug: `pricing`,
        data: tDate.toISOString(),
      },
      {
        slug: `contact`,
        data: tDate.toISOString(),
      },
    ];

    const slugs = res.items.map((item) => {
      return {
        slug: `blog/${item.fields.slug}`,
        date: item.sys.createdAt,
      };
    });

    // Combine slugs and extraPages into a single array
    const allPages = [...slugs, ...extraPages];

    return allPages;
  } catch (error) {
    return null;
  }
}

export default async function sitemap() {
  const slugs = await getArticles();
  return slugs.map((slug) => ({
    url: `${URL}${slug.slug}`,
    lastModified: slug.date,
  }));
}
