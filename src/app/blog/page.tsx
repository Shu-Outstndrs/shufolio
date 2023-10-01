import { Title } from "@/components/Title";
import { BlogCard } from "@/components/blog/BlogCard";
import fs from "fs-extra";
import articles from "../../../.feed/items.json";

export default function Blog() {
  console.log(articles);

  return (
    <main>
      <Title>Blog</Title>
      {articles.map((data, i) => {
        if (data.contentSnippet.length > 30) {
          data.contentSnippet = data.contentSnippet.substring(0, 54) + " ...";
        }

        return <BlogCard articles={data} key={i} />;
      })}
    </main>
  );
}
