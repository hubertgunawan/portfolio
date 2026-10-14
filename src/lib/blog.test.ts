import { describe, expect, it } from "vitest";
import { parseRss } from "./blog";

const feed = `<?xml version="1.0"?><rss><channel>
<item><title>OpenAI&apos;s agent &amp; a &quot;no&quot;</title><link>https://blog.haheng.au/en/a</link><pubDate>Thu, 24 Sep 2026 19:10:12 GMT</pubDate><category>AI Engineering</category></item>
<item><title><![CDATA[Second post]]></title><link>https://blog.haheng.au/en/b</link><pubDate>Wed, 23 Sep 2026 07:00:00 GMT</pubDate></item>
<item><title>Bad date</title><link>https://blog.haheng.au/en/c</link><pubDate>not a date</pubDate></item>
<item><title>Third</title><link>https://blog.haheng.au/en/d</link><pubDate>Tue, 22 Sep 2026 07:00:00 GMT</pubDate></item>
<item><title>Fourth</title><link>https://blog.haheng.au/en/e</link><pubDate>Mon, 21 Sep 2026 07:00:00 GMT</pubDate></item>
</channel></rss>`;

describe("parseRss", () => {
  it("parses items, decodes entities and CDATA, and formats dates", () => {
    const posts = parseRss(feed, 2);
    expect(posts).toEqual([
      {
        title: `OpenAI's agent & a "no"`,
        url: "https://blog.haheng.au/en/a",
        date: "2026-09-24",
        category: "AI Engineering",
      },
      {
        title: "Second post",
        url: "https://blog.haheng.au/en/b",
        date: "2026-09-23",
        category: undefined,
      },
    ]);
  });

  it("skips invalid items and respects the limit", () => {
    const posts = parseRss(feed, 3);
    expect(posts.map((p) => p.title)).toEqual([`OpenAI's agent & a "no"`, "Second post", "Third"]);
  });

  it("returns an empty list for malformed input", () => {
    expect(parseRss("<html>not a feed</html>")).toEqual([]);
  });
});
