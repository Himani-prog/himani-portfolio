import React from "react";
import { Link } from "react-scroll";

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
        </nav>
    );
}