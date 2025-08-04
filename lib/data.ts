import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import {
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaDocker,
  FaAws,
  FaLinux,
  FaGithub,
  FaLink,
  FaJava,
} from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { MdOutlineQueryStats } from "react-icons/md";
import { LuBrainCircuit } from "react-icons/lu";
import { FaDatabase } from "react-icons/fa6";
import {
  SiPytorch,
  SiScikitlearn,
  SiKeras,
  SiTensorflow,
  SiPandas,
  SiNumpy,
  SiPlotly,
  SiFastapi,
  SiFlask,
  SiGnubash,
  SiPowershell,
  SiKubernetes,
  SiGooglecloud,
  SiMicrosoftazure,
  SiAlibabacloud,
  SiTypescript,

} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import chartgptImg from "@/public/chartgpt_screenshot.png";
import dripinImg from "@/public/dripin_screenshot.png";
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
    title: "Data Engineer",
    location: "Advanced Schema | Paris",
    description:
      "Consulting for Louis Vuitton working on high-performance data pipelines and real-time APIs.",
    icon: React.createElement(FaDatabase),
    date: "2023 - present",
  },
  {
    title: "Machine Learning Engineer",
    location: "Humanitics.ai | Paris",
    description:
      "I worked as a ML Engineer in a retail-tech startup, building dashboards and a recommendation engine for store managers.",
    icon: React.createElement(LuBrainCircuit),
    date: "2022 - 2023",
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
      title: "MSc in Computer Science - AI Specialization",
      location: "CY Tech | Cergy",
      description:
        "Graduated a Masters in AI where I learned all about Machine Learning, Docker, NLP, cloud computing and much more.",
      icon: React.createElement(LuGraduationCap),
      date: "2018 - 2023",
    },
    {
      title: "BSc in Data Science and Modeling",
      location: "CY Cergy Paris Université | Cergy",
      description:
        "Graduated a Bachelor degree specialized in Data Science where I learned all about data analysis, statistics, data structures and data processing.",
      icon: React.createElement(LuGraduationCap),
      date: "2018 - 2022",
    },
] as const;

export const projectsData = [
  {
    title: "ChartGPT",
    description:
      "This app won the Dash-GPT Challenge organized by Plotly. It uses LLMs to generate interactive Plotly charts from natural language.",
    tags: ["Python", "Dash", "Plotly", "LLMs", "HuggingFace"],
    imageUrl: chartgptImg,
    codeUrl: "https://github.com/Youplala/chartgpt",
    demoUrl: "https://youplala-chartgpt.hf.space/",
  },
  {
    title: "DripIn",
    description:
      "Virtual try-on app for any clothing piece using AI inpainting.",
    tags: ["NextJS", "TypeScript", "HuggingFace", "Vercel"],
    imageUrl: dripinImg,
    codeUrl: "",
    demoUrl: "https://dripin.app",
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
  {
    category: "AI & Machine Learning",
    skills: [
      { name: "Transformers", icon: React.createElement(LuBrainCircuit) },
      { name: "LangChain", icon: React.createElement(FaLink) },
      { name: "PyTorch", icon: React.createElement(SiPytorch) },
      { name: "Scikit-learn", icon: React.createElement(SiScikitlearn) },
      { name: "Keras", icon: React.createElement(SiKeras) },
      { name: "Tensorflow", icon: React.createElement(SiTensorflow) },
      { name: "Pandas", icon: React.createElement(SiPandas) },
      { name: "NumPy", icon: React.createElement(SiNumpy) },
      { name: "Plotly", icon: React.createElement(SiPlotly) },
    ],
  },
  {
    category: "Web Development",
    skills: [
      { name: "JavaScript", icon: React.createElement(IoLogoJavascript) },
      { name: "TypeScript", icon: React.createElement(SiTypescript) },
      { name: "HTML", icon: React.createElement(FaHtml5) },
      { name: "CSS", icon: React.createElement(FaCss3Alt) },
      { name: "FastAPI", icon: React.createElement(SiFastapi) },
      { name: "Flask", icon: React.createElement(SiFlask) },
      { name: "Dash", icon: React.createElement(SiPlotly) },
    ],
  },
  {
    category: "Languages",
    skills: [
      { name: "Python", icon: React.createElement(FaPython) },
      { name: "Java", icon: React.createElement(FaJava) },
      { name: "SQL", icon: React.createElement(FaDatabase) },
      { name: "Bash", icon: React.createElement(SiGnubash) },
      { name: "PowerShell", icon: React.createElement(SiPowershell) },
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      { name: "Docker", icon: React.createElement(FaDocker) },
      { name: "Kubernetes", icon: React.createElement(SiKubernetes) },
      { name: "AWS", icon: React.createElement(FaAws) },
      { name: "GCP", icon: React.createElement(SiGooglecloud) },
      { name: "Azure", icon: React.createElement(SiMicrosoftazure) },
      { name: "Linux", icon: React.createElement(FaLinux) },
      { name: "GitHub", icon: React.createElement(FaGithub) },
      { name: "Aliyun", icon: React.createElement(SiAlibabacloud) },
    ],
  },
] as const;
