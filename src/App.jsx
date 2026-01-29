import { useState, useRef } from "react";
import Hero from "./views/Hero";
import About from "./views/About";
import Experience from "./views/Experience";
import Skills from "./views/Skills";
import Projects from "./views/Projects";
import Contact from "./views/Contact";

function App() {
  const [activeTab, setActiveTab] = useState("experience");

  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const tabRefs = {
    about: aboutRef,
    experience: experienceRef,
    skills: skillsRef,
    projects: projectsRef,
    contact: contactRef,
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setTimeout(() => {
      tabRefs[tab]?.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const renderTab = () => {
    switch (activeTab) {
      case "about":
        return (
          <div ref={aboutRef}>
            <About />
          </div>
        );
      case "experience":
        return (
          <div ref={experienceRef}>
            <Experience />
          </div>
        );
      case "skills":
        return (
          <div ref={skillsRef}>
            <Skills />
          </div>
        );
      case "projects":
        return (
          <div ref={projectsRef}>
            <Projects />
          </div>
        );
      case "contact":
        return (
          <div ref={contactRef}>
            <Contact />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-[rgb(36,36,36)] text-white min-h-screen overflow-x-hidden">
      <Hero activeTab={activeTab} setActiveTab={handleTabClick} />

      <div className="min-h-screen px-4 sm:px-10">{renderTab()}</div>
    </div>
  );
}

export default App;
