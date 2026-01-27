import { motion } from "motion/react";
import ExperienceCard from "../components/ExperienceCard";

export const experienceData = [
  {
    id: 1,
    position: "Software Engineer",
    company: "AirSial",
    companyImg: "https://www.airsial.com/front/images/logo.png",
    type: "Onsite - Karachi",
    period: "Sep 2024 – Present",
    techStack: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png",
    ],
    points: [
      "Build Central Reservation Control System, MIS and Frequent Flyer Systems for AirSial.",
      "Integrated REST APIs and WebSockets for Flight Fares, Check Flights and Automations.",
      "Integrated CI/CD and Maintained clean architecture.",
    ],
  },
  {
    id: 2,
    position: "Software Engineer",
    company: "X9",
    companyImg: "https://x9trader.com/assets/brand/x9trader-light-mode.svg",
    type: "Remotely Contract - UAE",
    period: "Feb 2023 – Sep 2024",
    techStack: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png",
    ],
    points: [
      "Build different X9 Products, X9 Trader Web Terminal, X9 Trader Mobile App and X9 Trader CMS.",
      "Worked with REST APIs, WebSockets and Third Party APIs, Integrated MetaTrader APIs for BackOffice Products.",
      "Additionally, involved in the development of Bots related to Financial Markets.",
    ],
  },
  {
    id: 3,
    position: "Full Stack Software Developer",
    company: "SINA",
    companyImg: "https://vitalpakistantrust.org/images/partner-sina.png",
    type: "Onsite - Karachi",
    period: "Feb 2023 – Dec 2023",
    techStack: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png",
    ],
    points: [
      "Build EMR (Electronic Medical Records) & Hospital Management System which is used by 50+ Clinics.",
      "Build a complete frontend of Employee Portal and Organization Website.",
    ],
  },
  {
    id: 4,
    position: "Software Developer",
    company: "DTecherz",
    companyImg:
      "https://www.dtecherz.com/_next/image?url=%2Flogos%2Flogo-white.webp&w=640&q=75",
    type: "Onsite - Karachi",
    period: "Dec 2022 – Feb 2023",
    techStack: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png",
    ],
    points: [
      "Developed Responsive Web Apps using React, Node.js, Express.js and MongoDB.",
    ],
  },
];

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="relative min-h-screen max-w-full mx-auto px-5 sm:px-10 flex flex-col items-center justify-center"
    >
      <h3 className="uppercase tracking-[12px] sm:tracking-[20px] text-gray-500 text-xl sm:text-2xl mb-10">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll snap-x snap-mandatory pb-10 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {experienceData.map((exp) => (
          <ExperienceCard
            key={exp.id}
            position={exp.position}
            company={exp.company}
            companyImg={exp.companyImg}
            type={exp.type}
            period={exp.period}
            techStack={exp.techStack}
            points={exp.points}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
