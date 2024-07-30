import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { BsBarChartFill } from "react-icons/bs";
import chartgptImg from "@/public/chartgpt_screenshot.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Data Science Intern",
    location: "Humanitics.ai | Paris",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Data Science Intern",
    location: "Humanitics.ai | Paris",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(BsBarChartFill),
    date: "2021",
  },
  {
    title: "Machine Learning Engineer",
    location: "Humanitics.ai | Paris",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Data Engineer",
    location: "Advanced Schema | Paris",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "ChartGPT-Dash",
    description:
      "This app won the Dash-GPT Challenge organized by Plotly. It uses LLMs to generate interactive Plotly charts from natural language.",
    tags: ["Python", "Dash", "Plotly", "LLMs", "HuggingFace"],
    imageUrl: chartgptImg,
    codeUrl: "https://github.com/Youplala/chartgpt",
    demoUrl: "https://youplala-chartgpt.hf.space/",
  },
] as const;

export const skillsData = [
  "Python",
  "JavaScript",
  "React",
  "Bash",
  "SQL",
  "PowerShell",
  "R",
  "Java",
  "HTML",
  "CSS",
  "Swift",
  "FastAPI",
  "Pandas",
  "Transformers",
  "Plotly",
  "Scikit-learn",
  "PyTorch",
  "Flask",
  "Dash",
  "Tensorflow",
  "Keras",
  "NumPy",
  "GitHub",
  "Docker",
  "Azure",
  "Kubernetes",
  "Google Cloud Platform",
  "AWS",
  "Talend",
  "Linux"
] as const;
