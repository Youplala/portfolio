"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>my skills</SectionHeading>
      <div>
        {skillsData.map((category, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-2xl font-semibold text-center mb-4">{category.category}</h3>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
              {category.skills.map((skill, skillIndex) => (
                <motion.li
                  className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 flex items-center gap-2"
                  key={skillIndex}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={skillIndex}
                >
                  {skill.icon}
                  <span>{skill.name}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
