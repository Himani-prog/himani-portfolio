// src/App.js
import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ParticlesBackground from "./components/ParticlesBackground";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import { animateScroll as scroll } from "react-scroll";

function App() {
    useEffect(() => { scroll.scrollToTop({ duration: 0 }); }, []);

    return (
        <div className="App">
            <ParticlesBackground />
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Education />
                <Contact />
            </main>
            <footer style={{ textAlign: "center", padding: 28 }}>
                Crafted with calm code and kind energy ✨ — © {new Date().getFullYear()} Himani Shah
            </footer>
        </div>
    );
}

export default App;
