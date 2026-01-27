import Header from "./components/Header";
import About from "./views/About";
import Contact from "./views/Contact";
import Experience from "./views/Experience";
import Hero from "./views/Hero";
import Projects from "./views/Projects";
import Skills from "./views/Skills";

function App() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scroll-smooth">
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      <section id="contact" className="snap-start">
        <Contact />
      </section>
      <a href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/sites/160477/images/F69olKlTDWfJQcAnS4jw_file.jpg"
              alt=""
            />
          </div>
        </footer>
      </a>
    </div>
  );
}

export default App;
