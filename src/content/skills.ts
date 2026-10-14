export type SkillIcon = "code" | "database" | "cloud" | "brain" | "check";

export type SkillGroup = {
  title: string;
  icon: SkillIcon;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages & Frameworks",
    icon: "code",
    items: ["JavaScript", "Node.js", "React.js"],
  },
  {
    title: "Databases",
    icon: "database",
    items: ["SQL", "NoSQL", "ORM-based data modeling"],
  },
  {
    title: "Cloud & DevOps",
    icon: "cloud",
    items: ["AWS", "Docker", "Kubernetes", "Git"],
  },
  {
    title: "AI & Machine Learning",
    icon: "brain",
    items: [
      "AI Agents",
      "Machine Learning",
      "Deep Learning (LSTM)",
      "Computer Vision / rPPG",
    ],
  },
  {
    title: "Practices",
    icon: "check",
    items: [
      "RESTful API Design",
      "Database Design",
      "Unit Testing & Test Automation",
    ],
  },
];
