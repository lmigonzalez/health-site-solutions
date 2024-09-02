import fs from "fs";
import path from "path";
import matter from "gray-matter";

// This assumes `content` is at the root level of `src`
const servicesDir = path.join(process.cwd(), "src", "content");

export function getAllBlogPosts() {
  if (!fs.existsSync(servicesDir)) {
    console.error(`Directory ${servicesDir} does not exist.`);
    return [];
  }

  const fileNames = fs.readdirSync(servicesDir);
  const allPostsData = fileNames.map((fileName) => {
    const fullPath = path.join(servicesDir, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data } = matter(fileContents);

    return {
      ...data,
      slug: fileName.replace(/\.mdx?$/, ""),
    };
  });

  return allPostsData;
}
