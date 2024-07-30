"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="font-medium">
      As a passionate Machine Learning Engineer with a strong background in Artificial Intelligence, I'm excited to bring my skills and experience to a new challenge. With a Master's degree in Computer Science - Artificial Intelligence Specialization from CY Tech, I've developed expertise in Deep Learning, NLP, and Big Data.
      </p>
    </motion.section>
  );
}
