import { profile } from "@/content/profile";

const json: Array<[string, string | string[]]> = [
  ["role", "Software & AI Engineer"],
  ["stack", ["Node.js", "React", "AWS", "Docker"]],
  ["focus", ["AI agents", "ML"]],
  ["location", `${profile.location.city}, ${profile.location.countryCode}`],
  ["status", "open_to_work"],
];

function Str({ children }: { children: string }) {
  return <span className="text-fg">&quot;{children}&quot;</span>;
}

export function TerminalCard() {
  return (
    <figure
      className="overflow-hidden rounded-lg border border-border bg-surface font-mono text-[13px] leading-relaxed"
      aria-label="Terminal showing a sample API response describing Hubert"
    >
      <div className="flex items-center justify-between border-b border-border bg-surface-raised px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-border-strong" />
          <span className="size-2.5 rounded-full bg-border-strong" />
          <span className="size-2.5 rounded-full bg-border-strong" />
        </div>
        <span className="text-xs text-subtle">zsh</span>
        <span className="w-10" />
      </div>
      <pre className="overflow-x-auto p-5 text-muted">
        <code>
          <span className="text-subtle">$ </span>
          <span className="text-fg">curl haheng.au/api/hubert</span>
          {"\n"}
          <span className="text-success">HTTP/1.1 200 OK</span>
          {"\n\n"}
          {"{\n"}
          {json.map(([key, value], i) => (
            <span key={key}>
              {"  "}
              <span className="text-primary">&quot;{key}&quot;</span>
              {": "}
              {Array.isArray(value) ? (
                <>
                  {"["}
                  {value.map((v, j) => (
                    <span key={v}>
                      <Str>{v}</Str>
                      {j < value.length - 1 ? ", " : ""}
                    </span>
                  ))}
                  {"]"}
                </>
              ) : (
                <Str>{value}</Str>
              )}
              {i < json.length - 1 ? "," : ""}
              {"\n"}
            </span>
          ))}
          {"}"}
          {"\n\n"}
          <span className="text-primary">[agent]</span>
          <span className="text-subtle"> published post → blog.haheng.au</span>
        </code>
      </pre>
    </figure>
  );
}
