export type Experience = {
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  highlights: string[];
  details: string[];
};

export const experience: Experience[] = [
  {
    role: "Senior Software Engineer",
    company: "PT. Mitra Mulia Makmur",
    location: "Indonesia",
    start: "06/2020",
    end: "10/2023",
    highlights: [
      "Designed and built RESTful APIs and backend services in Node.js for web and internal tools",
      "Built a React.js web application from scratch, owning it from architecture through deployment",
      "Developed a handheld warehouse stock management application that replaced manual inventory tracking",
    ],
    details: [
      "Designed and managed SQL/NoSQL databases with ORM-based data layers",
      "Containerized services with Docker; orchestrated deployments with Kubernetes on AWS",
      "Wrote unit tests and built test automation to catch regressions before release",
      "Code reviews, production debugging, design discussions, sprint planning",
    ],
  },
  {
    role: "Assistant Lecturer",
    company: "Institut Sains Dan Teknologi Terpadu Surabaya",
    location: "Surabaya, Indonesia",
    start: "09/2017",
    end: "06/2020",
    highlights: [
      "Designed and built a web application for new student registration and administrative record management",
    ],
    details: [],
  },
];

export type AdditionalExperience = {
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
};

export const additionalExperience: AdditionalExperience[] = [
  {
    role: "Sample Preparer",
    company: "Australia Laboratory Service",
    location: "Canning Vale, WA",
    start: "03/2026",
    end: "10/2026",
  },
  {
    role: "Irrigation",
    company: "Trandos Hydroponic Grow",
    location: "WA",
    start: "07/2025",
    end: "03/2026",
  },
  {
    role: "Blueberry Picker",
    company: "Costa Berry",
    location: "Gingin, WA",
    start: "04/2025",
    end: "07/2025",
  },
  {
    role: "Grape Packer",
    company: "Fruitico",
    location: "Meelon, WA",
    start: "03/2025",
    end: "04/2025",
  },
  {
    role: "FOH Team Member",
    company: "Super Tetsudo",
    location: "Karrinyup, WA",
    start: "02/2024",
    end: "03/2025",
  },
  {
    role: "Grape Picker",
    company: "Fruitico",
    location: "Hamel, WA",
    start: "01/2024",
    end: "02/2024",
  },
];

export const education = {
  degree: "Bachelor of Science, Computer Science",
  school: "Institut Sains Dan Teknologi Terpadu Surabaya",
  year: "2023",
  gpa: "3.89 / 4.00",
  honors: "Magna Cum Laude",
  thesis: "Deepfake Detection using LSTM and rPPG",
  thesisSummary:
    "Detects deepfake videos by extracting remote photoplethysmography (rPPG) heart-rate signals from facial skin regions and classifying their temporal patterns with an LSTM network.",
};
