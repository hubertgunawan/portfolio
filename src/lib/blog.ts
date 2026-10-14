export type BlogPost = {
  title: string;
  url: string;
  date: string;
  category?: string;
};

export const BLOG_FEED_URL = "https://blog.haheng.au/rss/en.xml";

const entities: Record<string, string> = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&apos;": "'",
  "&#39;": "'",
};

function decode(value: string) {
  return value
    .replace(/^<!\[CDATA\[([\s\S]*)\]\]>$/, "$1")
    .replace(/&(amp|lt|gt|quot|apos|#39);/g, (m) => entities[m] ?? m)
    .trim();
}

function tag(xml: string, name: string) {
  const match = xml.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`));
  return match ? decode(match[1]) : undefined;
}

export function parseRss(xml: string, limit = 3): BlogPost[] {
  const items = xml.match(/<item>[\s\S]*?<\/item>/g) ?? [];
  const posts: BlogPost[] = [];

  for (const item of items) {
    const title = tag(item, "title");
    const url = tag(item, "link");
    const pubDate = tag(item, "pubDate");
    if (!title || !url || !pubDate) continue;

    const date = new Date(pubDate);
    if (Number.isNaN(date.getTime())) continue;

    posts.push({
      title,
      url,
      date: date.toISOString().slice(0, 10),
      category: tag(item, "category"),
    });
    if (posts.length >= limit) break;
  }

  return posts;
}

/** Fetched at build time. Never throws: an unavailable feed just hides the section. */
export async function getLatestPosts(limit = 3): Promise<BlogPost[]> {
  try {
    const res = await fetch(BLOG_FEED_URL, { signal: AbortSignal.timeout(8000) });
    if (!res.ok) return [];
    return parseRss(await res.text(), limit);
  } catch {
    return [];
  }
}
