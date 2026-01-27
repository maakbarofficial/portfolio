import { motion } from "motion/react";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="relative flex flex-col min-h-screen max-w-7xl px-5 sm:px-10 mx-auto items-center justify-center text-center md:flex-row md:text-left md:justify-evenly gap-10"
    >
      <h3 className="absolute top-10 sm:top-16 uppercase tracking-[12px] sm:tracking-[20px] text-gray-500 text-xl sm:text-2xl">
        About
      </h3>

      <motion.img
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-20 sm:mt-24 md:mt-0 shrink-0 w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 xl:w-[380px] xl:h-[380px] rounded-full md:rounded-lg object-cover"
        src="https://avatars.githubusercontent.com/u/106576398?v=4"
        alt="Muhammad Ali Akbar"
      />

      <div className="space-y-5 sm:space-y-8 px-0 md:px-10 max-w-xl">
        <h4 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>

        <p className="text-base">
          Experienced Software Engineer with expertise in building robust,
          scalable client-side and server-side solutions, delivering
          high-quality results in a dynamic software landscape.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
