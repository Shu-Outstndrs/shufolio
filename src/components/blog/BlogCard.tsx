import { FeedItem } from "@/builder/fetch-post";

export const BlogCard = ({ articles }: { articles: FeedItem }) => {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const formattedDate = formatDate("2023-09-30T12:17:35.000Z");

  return (
    <>
      <a
        href={articles.link}
        className="flex sm:flex-row flex-col p-3 mb-4 bg-zinc-50 hover:bg-zinc-100 rounded-md shadow-sm"
      >
        <img
          src={articles.og}
          alt="サムネイル"
          className="sm:h-32 h-auto sm:w-auto w-full my-auto border border-zinc-300 rounded-md"
        />
        <div className="w-full ml-4 mt-2 flex-1">
          <div className="border-b pb-2 border-zinc-200">
            <h2 className="sm:text-xl text-base font-normal mb-2">
              {articles.title}
            </h2>
            <div className="text-zinc-500 text-sm">{formattedDate}</div>
          </div>
          <p className="mt-4 sm:text-base text-sm text-zinc-500">
            {articles.contentSnippet}
          </p>
        </div>
      </a>
    </>
  );
};
