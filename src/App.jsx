import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Services from "./Components/Services";
import Projects from "./Components/Projects";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
      </main>
    </>
  );
}

export default App;