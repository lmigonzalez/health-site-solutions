import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Image from "next/image";
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export async function generateMetadata({ params }) {
  const data = await getArticle(params.name);
  const title = data.title;

  const description =
    data.content.content[0].nodeType === "paragraph"
      ? data.content.content[0].content[0].value
      : data.content.content[1].content[0].value;

  return {
    title: `${title} | Health Web Experts`,
    description: description || "",
  };
}

const renderAsset = (node, children) => {
  const { file } = node.data.target.fields;
  const url = file.url;
  const alt = file.description || file.fileName;
  return (
    <Image
      className="mb-5 mt-16 rounded shadow"
      src={"https:" + url}
      alt={alt}
      width={700}
      height={500}
    />
  );
};

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: renderAsset,
  },
};

async function getArticle(slug) {
  try {
    const res = await client.getEntries({
      "fields.slug": slug,
      content_type: "healthSiteSolutions",
    });

    return res.items[0].fields;
  } catch (error) {
    return null;
  }
}

async function Page({ params }) {
  const { title, content } = await getArticle(params.name);
  return (
    <main>
      <article className="article shadow">
        <h1>{title}</h1>
        <div className="">{documentToReactComponents(content, options)}</div>
      </article>
    </main>
  );
}

export default Page;
