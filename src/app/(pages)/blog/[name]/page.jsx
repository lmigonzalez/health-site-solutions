import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export async function generateMetadata({ params }) {
  const data = await getArticle(params.name);
  const title = data.title;

  const description = data.content.content[0].content[0].value;

  return {
    title: `${title} | Health Web Experts`,
    description: description || "",
  };
}

async function getArticle(slug) {
  try {
    const res = await client.getEntries({
      "fields.slug": slug,
      content_type: "healthSiteSolutions",
    });

    console.log(res.items[0].fields);
    return res.items[0].fields;
  } catch (error) {
    return null;
  }
}

async function Page({ params }) {
  const { title, content } = await getArticle(params.name);
  return (
    <main>
      <article className="article">
        <h1>{title}</h1>
        <div className="">{documentToReactComponents(content)}</div>
      </article>
    </main>
  );
}

export default Page;
