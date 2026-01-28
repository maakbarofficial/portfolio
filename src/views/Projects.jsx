import { motion } from "motion/react";
import { projectsData } from "../data";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative min-h-screen px-4 sm:px-6 md:px-10 py-16 mx-auto text-center"
    >
      <h3 className="uppercase tracking-[10px] sm:tracking-[15px] md:tracking-[20px] text-gray-500 text-lg sm:text-xl md:text-2xl">
        Projects
      </h3>
      <div className="relative w-full mt-10 flex overflow-x-scroll snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projectsData.map((project, index) => (
          <div
            key={project.id}
            className="w-full sm:w-screen shrink-0 snap-center flex flex-col items-center justify-center gap-6 px-4 sm:px-10 md:px-24 py-10 min-h-[80vh]"
          >
            <motion.img
              initial={{ y: -60, opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              src={project.image}
              alt={project.title}
              className="w-40 md:w-80 object-contain"
            />
            <div className="space-y-4 sm:space-y-6 max-w-4xl">
              <h4 className="text-xl sm:text-2xl md:text-4xl font-semibold">
                <span className="underline decoration-[#F7AB0A]/50">
                  {index + 1} of {projectsData.length}
                </span>{" "}
                {project.title}
              </h4>
              <div className="flex flex-wrap items-center justify-center gap-2">
                <span className="text-xs sm:text-sm md:text-base text-gray-300">
                  Techs used:
                </span>
                {project.techs.map((tech, i) => (
                  <img
                    key={i}
                    src={tech}
                    alt="Tech"
                    className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 object-contain"
                  />
                ))}
              </div>
              <p className="text-sm sm:text-base md:text-lg text-center leading-relaxed">
                {project.description}
              </p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  Visit Link{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-link-icon lucide-link"
                  >
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute left-0 top-[20%] sm:top-[18%] md:top-[15%] h-55 sm:h-80 md:h-125 bg-[#F7AB0A]/10 -skew-y-12 pointer-events-none" />
    </motion.div>
  );
};

export default Projects;
