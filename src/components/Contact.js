import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section id="contact" className="brand-section">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <h2>Contact</h2>

                <div style={{ flex: "1 1 360px" }}>
                    <p style={{ color: "#444" }}>Interested in working together? Send me a message or download my resume.</p>
                    <p style={{ marginTop: 12 }}><strong>Email:</strong> <a href="mailto:himanishah48@gmail.com">himanishah48@gmail.com</a></p>
                    <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/himanishah-it" target="_blank" rel="noreferrer">linkedin.com/in/himanishah-it</a></p>
                    <p><strong>GitHub:</strong> <a href="https://github.com/Himani-Prog" target="_blank" rel="noreferrer">github.com/Himani-Prog</a></p>
                </div>

            </motion.div>
        </section>
    );
}
