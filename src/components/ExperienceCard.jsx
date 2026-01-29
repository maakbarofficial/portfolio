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
    <motion.article
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.1 }}
      className="flex flex-col rounded-xl bg-[#292929] p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-2xl hover:shadow-yellow-500 transition-all duration-300 w-full cursor-context-menu"
    >
      <img
        src={companyImg}
        className="w-20 h-20 sm:w-24 sm:h-24 md:w-35 md:h-35 object-contain rounded-full mx-auto"
        alt="WorkExperience"
      />
      <div className="mt-4 text-center md:text-left">
        <h4 className="text-lg sm:text-xl md:text-2xl font-semibold">
          {position}
        </h4>
        <p className="font-bold text-base sm:text-lg mt-1">{company}</p>

        <div className="flex flex-wrap gap-2 justify-center md:justify-start my-3">
          {techStack?.map((stack, i) => (
            <img
              key={i}
              className="h-7 w-7 sm:h-9 sm:w-9 object-contain"
              src={stack}
              alt="TechStack"
            />
          ))}
        </div>

        <p className="uppercase py-1 text-gray-300 text-xs sm:text-sm">
          {period}
        </p>
        <p className="uppercase py-1 text-gray-300 text-xs sm:text-sm">
          {type}
        </p>

        <ul className="list-disc space-y-2 text-xs sm:text-sm mt-2">
          {points?.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
};

export default ExperienceCard;
