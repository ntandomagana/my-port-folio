import { useState, useEffect } from "react";
import "./App.css"; 
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

function App() {
  const [loading, setLoading] = useState(true);
  const [colorIndex, setColorIndex] = useState(0);

  const text = "LOADING".split(""); 
  const colors = ["purple", "white", "black"]; 

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % text.length); 
    }, 300);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      setLoading(false);
    }, 4000); 

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {loading ? (
        <div className="preloader">
          <h1>
            {text.map((letter, index) => (
              <span
                key={index}
                style={{
                  color: index === colorIndex ? "purple" : "white",
                  transition: "color 0.3s ease-in-out",
                }}
              >
                {letter}
              </span>
            ))}
          </h1>
        </div>
      ) : (
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
      )}
    </>
  );
}

export default App;
