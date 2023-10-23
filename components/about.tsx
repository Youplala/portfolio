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
      <p class="font-medium">
        Graduated in <span className="font-medium">Artificial Intelligence</span> from CY Tech, and dove headfirst into the world of Deep Learning, NLP, and Big Data. I'm a passionate <span className="font-medium">Machine Learning Engineer</span>, blending software artistry with the power of data.
        With <span className="font-medium">1.5 years</span> in a cutting-edge retail-tech startup, I mastered Python, Bash, and more. Pandas, Dash and Plotly are my playgrounds.

        Beyond data, I game, watch movies, and hang with my dog. Curiosity fuels my journey into <span className="font-medium">history, philosophy,</span> and guitar strumming.
      </p>
      <p>
        Ready to write the next chapter in machine learning and software. Open to meaningful opportunities.
      </p>
    </motion.section>
  );
}
