import { motion } from "motion/react";
import { personalInformationData } from "../data";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="flex flex-col min-h-screen max-w-7xl mx-auto items-center justify-center text-center md:text-left md:justify-evenly gap-10"
    >
      <h3 className="uppercase tracking-[12px] sm:tracking-[20px] text-gray-500 text-xl sm:text-2xl text-center">
        About
      </h3>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        <motion.img
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-20 sm:mt-24 md:mt-0 shrink-0 w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 xl:w-95 xl:h-95 rounded-full md:rounded-lg object-cover"
          src={personalInformationData.aboutImage}
          alt="Muhammad Ali Akbar"
        />

        <div className="space-y-5 sm:space-y-8 px-0 md:px-10 max-w-xl">
          <h4 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            Here is a{" "}
            <span className="underline decoration-yellow-500 animate animate-bounce">
              {"</>"}
            </span>{" "}
            background
          </h4>

          <p className="text-base">{personalInformationData.aboutText}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
