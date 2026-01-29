import React from "react";
import BackgroundCirlces from "../components/BackgroundCirlces";
import useTypewriter from "../hooks/useTypewriter";
import { personalInformationData } from "../data";
import Header from "../components/Header";

const Hero = ({ activeTab, setActiveTab }) => {
  const text = useTypewriter({
    words: personalInformationData.typeWriterTexts,
    typingSpeed: 80,
    deletingSpeed: 50,
    delayBetweenWords: 2000,
    loop: true,
  });

  return (
    <div className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      <BackgroundCirlces />

      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={personalInformationData.heroImage}
        alt="Muhammad Ali Akbar"
      />

      <div className="z-20">
        <h2 className="text-sm uppercase text-white py-2 tracking-[10px]">
          {personalInformationData.title}
        </h2>

        <h1 className="text-xl lg:text-2xl font-semibold px-10">
          <span>{text}</span>
          <span className="animate-pulse text-yellow-400 ml-1">|</span>
        </h1>

        <Header />

        <div className="pt-4 flex flex-wrap justify-center gap-2">
          {["experience", "projects", "skills", "about", "contact"].map(
            (tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 border border-yellow-500 rounded-full font-normal uppercase text-xs tracking-widest transition-all hover:bg-yellow-500 hover:text-black cursor-pointer focus:border-none ${
                  activeTab === tab ? "bg-yellow-500 text-black font-semibold" : ""
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
