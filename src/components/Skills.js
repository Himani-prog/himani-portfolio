import React from "react";
import { motion } from "framer-motion";

const SKILLS = [
    "React", "JavaScript (ES6+)", "TypeScript",
    "Node.js", "Express", "MongoDB", "MySQL",
    "HTML5", "CSS3", "Responsive Design", "REST APIs", "Git"
];

export default function Skills() {
    return (
        <section id="skills" className="brand-section">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2>Skills</h2>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 12 }}>
                    {SKILLS.map((s, i) => (
                        <motion.div
                            key={s}
                            whileHover={{ scale: 1.06 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="skill-pill"
                            style={{
                                padding: "8px 12px",
                                borderRadius: 999,
                                background: "linear-gradient(90deg, rgba(255,75,139,0.12), rgba(255,187,51,0.08))",
                                border: "1px solid rgba(255,187,51,0.12)",
                                fontWeight: 600,
                                color: "#333",
                                fontSize: 14
                            }}
                        >
                            {s}
                        </motion.div>
                    ))}
                </div>

                <p className="small" style={{ marginTop: 14, color: "#555" }}>
                    I use these tools daily to build responsive web interfaces, connect to backend APIs, and deploy projects to production.
                </p>
            </motion.div>
        </section>
    );
}
