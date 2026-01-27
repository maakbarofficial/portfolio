import { motion } from "motion/react";
import { skillsData } from "../data";

const Skill = ({ skillpicture, skill, directionLeft, lightBg }) => {
  return (
    <div
      className={`group relative flex cursor-pointer w-20 h-20 sm:w-24 sm:h-24 xl:w-32 xl:h-32 rounded-full p-3 sm:p-4 xl:p-5 border border-gray-500 mx-auto ${
        lightBg ? "bg-white" : ""
      }`}
    >
      <motion.img
        initial={{
          x: directionLeft ? 40 : -40,
          opacity: 0,
        }}
        transition={{ duration: 0.8 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={skillpicture}
        className="object-contain w-full h-full transition duration-300 ease-in-out"
      />
      <div className="absolute hidden sm:flex opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out bg-white inset-0 rounded-full z-0">
        <div className="flex items-center justify-center h-full text-center mx-auto">
          <p className="text-sm sm:text-lg xl:text-2xl font-bold text-black">
            {skill}
          </p>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="min-h-screen text-center px-4 sm:px-8 lg:px-10 py-12 mx-auto"
    >
      <h3 className="uppercase tracking-[10px] sm:tracking-[20px] text-gray-500 text-xl sm:text-2xl">
        Skills
      </h3>

      <h3 className="uppercase tracking-[2px] sm:tracking-[3px] text-gray-500 text-xs sm:text-sm mt-2">
        These are the Techs I've worked with
      </h3>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-5 mx-auto mt-10">
        {skillsData.map((skill, index) => (
          <Skill
            key={skill.id}
            skillpicture={skill.img}
            skill={skill.name}
            directionLeft={index % 2 === 0}
            lightBg={skill.lightBg}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
