import { motion } from "motion/react";
import { projectsData } from "../data";

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen px-4 sm:px-8 lg:px-12 py-20 text-center"
    >
      <div className="mb-16">
        <h3 className="uppercase tracking-[12px] sm:tracking-[18px] text-gray-400 text-xl sm:text-2xl">
          Projects
        </h3>
        <p className="mt-3 text-sm text-gray-500">
          Selected work showcasing my experience & creativity
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="rounded-xl bg-[#292929] p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-2xl hover:translate-y-3 transition-all duration-300 w-full cursor-context-menu"
          >
            <div className="relative p-6">
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                src={project.image}
                alt={project.title}
                className="w-full h-40 sm:h-44 object-contain mx-auto"
              />
            </div>
            <div className="relative px-6 pb-8 space-y-4">
              <h4 className="text-lg sm:text-xl font-semibold">
                {project.title}
              </h4>

              <div className="flex flex-wrap justify-center gap-2">
                {project.techs.map((tech, i) => (
                  <div
                    key={i}
                    className="p-2 rounded-full bg-black/40 border border-white/10"
                  >
                    <img
                      src={tech}
                      alt="Tech"
                      className="h-5 w-5 object-contain"
                    />
                  </div>
                ))}
              </div>

              <p className="text-sm text-gray-300 leading-relaxed">
                {project.description}
              </p>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#F7AB0A] hover:underline underline-offset-4 transition"
                >
                  View Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
