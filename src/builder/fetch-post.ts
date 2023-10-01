import Parser from "rss-parser";
import fs from "fs-extra";
import ogs from "open-graph-scraper";

export type FeedItem = {
  title: string;
  link: string;
  contentSnippet?: string;
  isoDate?: string;
  og?: string;
  dateMiliSeconds: number;
};

const parser = new Parser();

async function getOgImageURL(url?: string) {
  if (!url) return null;

  const data = await ogs({ url });

  if (data.result?.ogImage && data.result.ogImage.length > 0) {
    return data.result.ogImage[0].url;
  } else {
    return null;
  }
}

async function fetchFeedItems(url: string) {
  try {
    const feed = await parser.parseURL(url);

    console.log(feed);

    if (!feed?.items?.length) return [];

    const feedItems = await Promise.all(
      feed.items.map(async ({ title, contentSnippet, link, isoDate }) => {
        const og = await getOgImageURL(link);
        return {
          title,
          contentSnippet: contentSnippet?.replace(/\n/g, ""),
          link,
          isoDate,
          og,
          dateMiliSeconds: isoDate ? new Date(isoDate).getTime() : 0,
        };
      })
    );

    return feedItems.filter(({ title, link }) => title && link) as FeedItem[];
  } catch (err) {
    console.log("failed to fetch data");
  }
}

(async function () {
  const data = await fetchFeedItems("https://note.com/shu0113/rss");

  if (data) {
    data.sort((a, b) => b.dateMiliSeconds - a.dateMiliSeconds);

    fs.ensureDirSync(".feed");
    fs.writeJsonSync("./.feed/items.json", data);
  }
})();
