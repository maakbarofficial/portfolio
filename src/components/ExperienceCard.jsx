import React from "react";
import { motion } from "motion/react";

const ExperienceCard = ({
  position,
  company,
  companyImg,
  type,
  period,
  techStack,
  points,
}) => {
  return (
    <article className="flex flex-col shrink-0 snap-center rounded-xl bg-[#292929] p-6 sm:p-8 md:p-10 w-70 sm:w-85 md:w-100 lg:w-200 hover:opacity-100 opacity-100 md:opacity-40 transition-opacity duration-200 cursor-pointer">
      <motion.img
        initial={{ y: -60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        src={companyImg}
        className="w-20 h-20 sm:w-24 sm:h-24 md:w-30 md:h-30 object-contain rounded-full mx-auto"
        alt="WorkExperience"
      />
      <div className="px-0 md:px-4 mt-4">
        <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-center md:text-left">
          {position}
        </h4>
        <p className="font-bold text-base sm:text-lg mt-1 text-center md:text-left">
          {company}
        </p>
        <div className="flex flex-wrap gap-2 sm:gap-1 justify-center md:justify-start space-x-2 my-3">
          {techStack?.map((stack, i) => (
            <img
              key={i}
              className="h-7 w-7 sm:h-9 sm:w-9 object-contain"
              src={stack}
              alt="TechStack"
            />
          ))}
        </div>
        <p className="uppercase py-3 text-gray-300 text-xs text-center md:text-left">
          {type}
        </p>
        <p className="uppercase py-3 text-gray-300 text-xs sm:text-sm text-center md:text-left">
          {period}
        </p>
        <ul className="p-5 list-disc space-y-2 text-xs sm:text-sm max-h-40 sm:max-h-50 overflow-y-auto scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
          {points?.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
