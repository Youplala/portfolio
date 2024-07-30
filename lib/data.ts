import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { MdOutlineQueryStats } from "react-icons/md";
import { LuBrainCircuit } from "react-icons/lu";
import { FaDatabase } from "react-icons/fa6";
import chartgptImg from "@/public/chartgpt_screenshot.png";
import fishWatchImg from "@/public/WorldMap.png";
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
    title: "BSc in Data Science and Modeling",
    location: "CY Cergy Paris Université | Cergy",
    description:
      "Graduated a Bachelor degree specialized in Data Science where I learned all about data analysis, statistics, data structures and data processing.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2022",
  },
  {
    title: "MSc in Computer Science - AI Specialization",
    location: "CY Tech | Cergy",
    description:
      "Graduated a Masters in AI where I learned all about Machine Learning, Docker, NLP, cloud computing and much more.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2023",
  },
  {
    title: "Data Science Intern",
    location: "Humanitics.ai | Paris",
    description:
      "I did an internship in a retail-tech startup building a ML product doing predictive analysis and clustering on sales in retail boutiques all around France.",
    icon: React.createElement(MdOutlineQueryStats),
    date: "2021",
  },
  {
    title: "Machine Learning Engineer",
    location: "Humanitics.ai | Paris",
    description:
      "I worked as a ML Engineer for a year in a retail-tech startup, it was the perfect opportunity to gain autonomy and learn how to be efficient.",
    icon: React.createElement(LuBrainCircuit),
    date: "2022 - 2023",
  },
  {
    title: "Data Engineer",
    location: "Advanced Schema | Paris",
    description:
      "I'm now a full-time consultant for LVMH working on various big-scales projects from data pipelines to building APIs and visualizations.",
    icon: React.createElement(FaDatabase),
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
  {
    title: "FishWatch",
    description:
      "A collection of notebooks leveraging Machine Learning to predict illegal fishing activities based on data available online.",
    tags: ["Python", "Random Forest", "KNN", "Logistic Regression"],
    imageUrl: fishWatchImg,
    codeUrl: "https://github.com/Youplala/FishWatch",
    demoUrl: "",
  },
] as const;

export const skillsData = [
  "Python",
  "Transformers",
  "LangChain",
  "Bash",
  "SQL",
  "JavaScript",
  "React",
  "HTML",
  "CSS",
  "FastAPI",
  "Pandas",
  "Plotly",
  "Scikit-learn",
  "PyTorch",
  "Flask",
  "Dash",
  "Tensorflow",
  "PowerShell",
  "Keras",
  "NumPy",
  "GitHub",
  "Docker",
  "Azure",
  "Kubernetes",
  "GCP",
  "AWS",
  "Linux"
] as const;
