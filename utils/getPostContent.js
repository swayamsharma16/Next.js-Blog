import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getPostContent(slug) {
  const folder = path.join(process.cwd(), "posts");
  const file = path.join(folder, `${slug}.md`);
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);

  return {
    data: matterResult.data,
    content: matterResult.content,
  };
}
