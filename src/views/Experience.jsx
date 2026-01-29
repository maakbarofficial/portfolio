import { motion } from "motion/react";
import ExperienceCard from "../components/ExperienceCard";
import { experienceData } from "../data";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="relative min-h-screen max-w-6xl mx-auto px-5 sm:px-10 py-20 flex flex-col"
    >
      <h3 className="uppercase tracking-[12px] sm:tracking-[20px] text-gray-500 text-xl sm:text-2xl text-center mb-16">
        Experience
      </h3>

      <div className="relative before:absolute before:top-0 before:bottom-0 before:left-1/2 before:w-1 before:-translate-x-1/2 before:bg-gray-700">
        {experienceData.map((exp, idx) => {
          const isLatest = idx === 0;
          return (
            <div
              key={exp.id}
              className={`relative mb-20 flex flex-col md:flex-row items-center ${
                idx % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:px-8 mt-10 md:mt-0">
                <ExperienceCard {...exp} />
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Experience;
