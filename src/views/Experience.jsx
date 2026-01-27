import { motion } from "motion/react";
import ExperienceCard from "../components/ExperienceCard";
import { experienceData } from "../data";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="relative min-h-screen max-w-full mx-auto px-5 sm:px-10 flex flex-col items-center justify-center"
    >
      <h3 className="uppercase tracking-[12px] sm:tracking-[20px] text-gray-500 text-xl sm:text-2xl md:mb-10">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll snap-x snap-mandatory pb-10 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {experienceData.map((exp) => (
          <ExperienceCard
            key={exp.id}
            position={exp.position}
            company={exp.company}
            companyImg={exp.companyImg}
            type={exp.type}
            period={exp.period}
            techStack={exp.techStack}
            points={exp.points}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
