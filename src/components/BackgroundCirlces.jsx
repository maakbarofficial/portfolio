import { motion } from "motion/react";

const BackgroundCirlces = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
        scale: [1, 2, 2, 3, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#333333] rounded-full h-50 w-50 mt-60 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-75 w-75 mt-60" />
      <div className="absolute border border-[#333333] rounded-full h-125 w-125 mt-60" />
      <div className="rounded-full border border-yellow-500 opacity-30 h-162.5 w-162.5 mt-60 absolute animate-pulse" />
      <div className="absolute border border-[#333333] rounded-full h-200 w-200 mt-60" />
    </motion.div>
  );
};

export default BackgroundCirlces;
