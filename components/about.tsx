"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("about");

  return (
    <motion.section
      ref={ref}
      className="mb-15 max-w-[45rem] text-left leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>about me</SectionHeading>
      <p className="mb-3 font-mono">
        paris is where i learned to ship ai/llm work for luxury retail, data
        science research, and experimental visualization projects. i keep
        building tools that help humans make sense of messy data, whether those are
        compliance-friendly pipelines for high-end fashion or interactive charts that write
        themselves.
      </p>

      <p className="font-mono">
        during the day i own the data backbone, make talend jobs
        hum, and keep flask-frontends responsive. nights and weekends belong to
        side projects like chartgpt, chartgpt-dash, and fishwatch, each taught me
        how to marry llms, classical ml, and observable experiences with a
        relentless bias toward shipping fast.
      </p>
    </motion.section>
  );
}
