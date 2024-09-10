import About from "./Sections/About";
import Hero from "./Sections/Hero";
import Navbar from "./Sections/Navbar";
import Skills from "./Sections/Skills";
import Internships from "./Sections/Internships";
import Resume from "./Sections/Resume";
import Projects from "./Sections/Projects";
import Contact from "./Sections/Contact";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Internships />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
}
export default App;
