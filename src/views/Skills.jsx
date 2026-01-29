import { motion } from "motion/react";
import { useState } from "react";
import { skillsData } from "../data";

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 lg:px-12 py-20"
    >
      <div className="mb-14 text-center">
        <h3 className="uppercase tracking-[12px] sm:tracking-[20px] text-gray-400 text-xl">
          Skills
        </h3>
        <p className="mt-3 text-sm text-gray-500">
          Technologies I’ve worked with & love building in
        </p>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 sm:gap-10 max-w-6xl">
        {skillsData.map((skill, index) => {
          const isActive = activeSkill === skill.id;

          return (
            <motion.div
              key={skill.id}
              onClick={() => setActiveSkill(isActive ? null : skill.id)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.08 }}
              className="group relative flex flex-col items-center justify-center cursor-pointer"
            >
              <div
                className={`absolute -inset-1 rounded-full bg-gradient-to-tr from-emerald-500/30 via-sky-500/30 to-purple-500/30 blur-lg transition duration-500
                ${
                  isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              />
              <div
                className={`relative w-20 h-20 sm:w-24 sm:h-24 xl:w-28 xl:h-28 rounded-full p-4 border border-white/10 backdrop-blur-md shadow-lg ${
                  skill.lightBg ? "bg-white/80" : "bg-gray-900/60"
                }`}
              >
                <motion.img
                  initial={{ x: index % 2 === 0 ? 40 : -40, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                  src={skill.img}
                  alt={skill.name}
                  className="w-full h-full object-contain"
                />
                <div
                  className={`absolute inset-0 flex items-center justify-center rounded-full bg-black/70 transition duration-300
                  ${
                    isActive
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  <p className="text-sm xl:text-base font-semibold text-white tracking-wide">
                    {skill.name}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Skills;
