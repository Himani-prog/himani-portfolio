import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section id="hero" className="hero-section">
            <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
            >
                <h1 className="hero-name">Himani Shah</h1>
                <p className="hero-tagline">
                    Designing calm, intuitive digital experiences — one pixel at a time.
                </p>
                <a href="/Himani_Shah_Resume_Junior_Developer.pdf" className="hero-button" download>
                    Download Resume
                </a>
            </motion.div>
        </section>
    );
}
