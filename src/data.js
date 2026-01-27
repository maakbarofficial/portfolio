import heroImg from "./assets/hero.jpg";
import aboutImg from "./assets/about.jpeg";
import htmlImg from "./assets/html.png";
import cssImg from "./assets/css.png";
import jsImg from "./assets/js.png";
import tsImg from "./assets/ts.png";
import reactImg from "./assets/react.png";
import vueImg from "./assets/vue.png";
import angularImg from "./assets/angular.png";
import wpImg from "./assets/wordpress.png";
import nextjsImg from "./assets/nextjs.svg";
import nodejsImg from "./assets/nodejs.png";
import mysqlImg from "./assets/mysql.webp";
import psqlImg from "./assets/postgresql.webp";
import mongodbImg from "./assets/mongodb.webp";
import pythonImg from "./assets/python.png";
import phpImg from "./assets/php.png";
import laravelImg from "./assets/laravel.svg";
import goImg from "./assets/go.png";
import rustImg from "./assets/rust.png";

export const personalInformationData = {
  name: "Muhammad Ali Akbar",
  heroImage: heroImg,
  title: "Software Engineer",
  linkedinURL: "https://www.linkedin.com/in/maakbarofficial",
  githubURL: "https://github.com/maakbarofficial",
  whatsappURL: "https://api.whatsapp.com/send?phone=923453117493",
  typeWriterTexts: [
    "Hi, the name's Muhammad Ali Akbar",
    "Guy-Who-Loves-☕️.jsx",
    "Butt-Loves-To-Code-More.tsx",
  ],
  aboutImage: aboutImg,
};

export const experienceData = [
  {
    id: 1,
    position: "Software Engineer",
    company: "AirSial",
    companyImg: "https://www.airsial.com/front/images/logo.png",
    type: "Onsite - Karachi",
    period: "Sep 2024 – Present",
    techStack: [
      htmlImg,
      cssImg,
      jsImg,
      tsImg,
      reactImg,
      vueImg,
      nextjsImg,
      nodejsImg,
      phpImg,
      laravelImg,
      goImg,
      mysqlImg,
      psqlImg,
      mongodbImg,
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
    type: "Remotely - UAE",
    period: "Feb 2023 – Sep 2024",
    techStack: [
      htmlImg,
      cssImg,
      jsImg,
      tsImg,
      reactImg,
      angularImg,
      vueImg,
      nextjsImg,
      nodejsImg,
      pythonImg,
      mysqlImg,
      mongodbImg,
      goImg,
      rustImg,
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
      htmlImg,
      cssImg,
      jsImg,
      tsImg,
      reactImg,
      nodejsImg,
      mongodbImg,

      phpImg,
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
      htmlImg,
      cssImg,
      jsImg,
      tsImg,
      reactImg,
      nodejsImg,
      mongodbImg,
      phpImg,
      wpImg,
    ],
    points: [
      "Developed Responsive Web Apps using React, Node.js, Express.js and MongoDB.",
    ],
  },
];

export const skillsData = [
  { id: 1, name: "HTML", img: htmlImg, lightBg: true },
  { id: 2, name: "CSS", img: cssImg, lightBg: true },
  { id: 3, name: "JavaScript", img: jsImg },
  { id: 4, name: "TypeScript", img: tsImg },
  { id: 5, name: "React", img: reactImg },
  { id: 6, name: "Vue", img: vueImg },
  { id: 7, name: "Angular", img: angularImg, lightBg: true },
  { id: 8, name: "Next.js", img: nextjsImg, lightBg: true },
  { id: 9, name: "Node.js", img: nodejsImg },
  { id: 10, name: "WordPress", img: wpImg },
  { id: 11, name: "PHP", img: phpImg },
  { id: 12, name: "Laravel", img: laravelImg },
  { id: 13, name: "Python", img: pythonImg },
  { id: 14, name: "Go", img: goImg },
  { id: 15, name: "Rust", img: rustImg, lightBg: true },
  { id: 16, name: "MySQL", img: mysqlImg },
  { id: 17, name: "PostgreSQL", img: psqlImg, lightBg: true },
  { id: 18, name: "MongoDB", img: mongodbImg },
];
