import type { SkillGroup, SkillIcon } from "@/content/skills";
import { BrainIcon, CheckCircleIcon, CloudIcon, CodeIcon, DatabaseIcon } from "./icons";
import { Tag } from "./ui";

const icons: Record<SkillIcon, typeof CodeIcon> = {
  code: CodeIcon,
  database: DatabaseIcon,
  cloud: CloudIcon,
  brain: BrainIcon,
  check: CheckCircleIcon,
};

export function SkillsGrid({ groups }: { groups: SkillGroup[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {groups.map((group) => {
        const Icon = icons[group.icon];
        return (
          <li
            key={group.title}
            className="rounded-lg border border-border bg-surface p-6 transition-colors duration-150 hover:border-border-strong"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-md border border-border bg-surface-raised text-primary">
                <Icon size={18} />
              </span>
              <h3 className="font-semibold text-fg">{group.title}</h3>
            </div>
            <ul className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li key={item}>
                  <Tag>{item}</Tag>
                </li>
              ))}
            </ul>
          </li>
        );
      })}
    </ul>
  );
}
