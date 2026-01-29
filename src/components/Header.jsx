import { SocialIcon } from "react-social-icons";
import { motion } from "motion/react";
import { personalInformationData } from "../data";

const Header = () => {
  return (
    <header className="flex items-start justify-center max-w-7xl mx-auto mt-2">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          network="linkedin"
          url={personalInformationData.linkedinURL}
          bgColor="transparent"
        />
        <SocialIcon
          network="github"
          url={personalInformationData.githubURL}
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          network="whatsapp"
          url={personalInformationData.whatsappURL}
          bgColor="transparent"
        />
        <SocialIcon
          url="#contact"
          className="cursor-pointer h-5 w-5"
          network="email"
          bgColor="transparent"
        />
      </motion.div>
    </header>
  );
};

export default Header;
