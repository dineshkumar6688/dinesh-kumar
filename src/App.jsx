import About from "./Components/About/about";
import Certificate from "./Components/Certificates/certificates";
import Contact from "./Components/Contact/contact";
import Home from "./Components/Home/home";
import Navbar from "./Components/Navbar/navbar";
import Skills from "./Components/Skills/skills";
import WorkExperiences from "./Components/Work-Experience/work-experience";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Certificate />
      <WorkExperiences />
      <Contact/>
    </div>
  );
}

export default App;
