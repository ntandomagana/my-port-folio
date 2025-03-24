


import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';



function App() {

  return (
    <main>
    <Navbar />
    <Home />
    <section id="about">
      <About />
    </section>
    <section id="projects">
      <Projects />
    </section>
    <Skills />
    <Contact />
  </main>
  )
}

export default App
