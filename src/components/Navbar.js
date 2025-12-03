import React from "react";
import { Link } from "react-scroll";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Navbar() {
    return (
        <nav className="navbar">
            <h2 className="logo">Himani Shah</h2>
            <ul>
                <li><Link to="about" smooth duration={600}>About</Link></li>
                <li><Link to="skills" smooth duration={600}>Skills</Link></li>
                <li><Link to="projects" smooth duration={600}>Projects</Link></li>
                <li><Link to="education" smooth duration={600}>Education</Link></li>
                <li><Link to="contact" smooth duration={600}>Contact</Link></li>
            </ul>

            <div className="nav-icons">
                <a
                    href="https://linkedin.com/in/himanishah-it"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/Himani-Prog"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaGithub />
                </a>

                <a href="/Himani_Shah_Resume_Junior_Developer.pdf" download className="resume-btn">
                    Resume
                </a>
            </div>
        </nav>
    );
}
