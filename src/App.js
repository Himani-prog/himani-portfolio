import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ParticlesBackground from "./components/ParticlesBackground";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="App">
            <ParticlesBackground />
            <Navbar />
            <section id="about" data-aos="fade-up"><About /></section>
            <section id="skills" data-aos="fade-up"><Skills /></section>
            <section id="projects" data-aos="fade-up"><Projects /></section>
            <section id="education" data-aos="fade-up"><Education /></section>
            <section id="contact" data-aos="fade-up"><Contact /></section>
            <footer>© 2025 Himani Shah | Built with ❤️ using React</footer>
        </div>
    );
}

export default App;
