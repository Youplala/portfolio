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
      className="mb-15 max-w-[45rem] text-left leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 font-mono">
        My journey into the world of technology began in Paris, driven by a
        fascination with how data could be transformed into meaningful insights.
        This passion led me to pursue a Master's degree in AI, where I dove deep
        into machine learning.
      </p>

      <p className="mb-3 font-mono">
        After my studies, I had the opportunity to work as a Machine Learning
        Engineer, where I built models to predict illegal fishing activities with
        the FishWatch project and created ChartGPT-Dash, an award-winning tool
        that brings data visualization to life through natural language.
      </p>

      <p className="mb-3 font-mono">
        These experiences solidified my love for building intelligent,
        user-centric applications. I'm particularly excited by the potential of
        Large Language Models (LLMs) to create more natural and powerful user
        experiences. I'm always exploring new ideas and looking for the next
        challenge to tackle.
      </p>

      <p className="font-mono">
        When I'm not coding, you can find me bouldering in Paris or planning my
        next travel.
      </p>
    </motion.section>
  );
}
