import { FeedItem } from "@/builder/fetch-post";

export const BlogCard = ({ articles }: { articles: FeedItem }) => {
  return (
    <a
      href={articles.link}
      className="flex p-2 bg-zinc-50 hover:bg-zinc-100 rounded-md shadow-sm"
    >
      <img
        src={articles.og}
        alt="サムネイル"
        className="w-64 border border-zinc-300 rounded-md"
      />
      <div className="w-full ml-4 mt-2">
        <h2 className="text-xl font-normal border-b pb-4 border-zinc-200">
          {articles.title}
        </h2>
        <p className="mt-4 text-base text-zinc-500">
          {articles.contentSnippet}
        </p>
      </div>
    </a>
  );
};
