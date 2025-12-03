import React from "react";
import { motion } from "framer-motion";

const PROJECTS = [
    {
        title: "SmartTask Manager",
        short: "Full-stack task manager with authentication and filters.",
        tech: ["React", "Node.js", "MongoDB", "JWT"],
        demo: "https://himani-taskflow-pro",
        repo: "https://github.com/Himani-Prog/taskflow-pro.git"
    },
    {
        title: "WeatherView",
        short: "Responsive weather dashboard using OpenWeather API.",
        tech: ["React", "Fetch API", "CSS"],
        demo: "https://himani-weatherview.netlify.app/",
        repo: "https://github.com/Himani-prog/weather-view.git"
    },
    {
        title: "ChatConnect",
        short: "Realtime multi-room chat with Socket.io.",
        tech: ["Node.js", "Socket.io", "React"],
        demo: "https://himani-chatconnect.netlify.app",
        repo: "https://github.com/Himani-prog/chat-connect"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="brand-section">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <h2>Projects</h2>

                <div style={{ marginTop: 12 }}>
                    {PROJECTS.map((p, idx) => (
                        <motion.div
                            key={p.title}
                            className="project-card"
                            whileHover={{ translateY: -6, boxShadow: "0 8px 32px rgba(255,150,200,0.18)" }}
                            transition={{ duration: 0.25 }}
                        >
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                                <div style={{ flex: 1 }}>
                                    <h3 style={{ margin: 0 }}>{p.title}</h3>
                                    <p style={{ marginTop: 8, color: "#555" }}>{p.short}</p>
                                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10 }}>
                                        {p.tech.map(t => <span key={t} className="tech-pill">{t}</span>)}
                                    </div>
                                </div>

                                <div style={{ minWidth: 160, display: "flex", gap: 10, justifyContent: "flex-end", alignItems: "center" }}>
                                    {p.demo ? (
                                        <a href={p.demo} target="_blank" rel="noreferrer" className="hero-button" style={{ padding: "8px 12px", fontSize: 14 }}>
                                            Live demo
                                        </a>
                                    ) : null}
                                    {p.repo ? (
                                        <a href={p.repo} target="_blank" rel="noreferrer" style={{ color: "#ff4b8b", fontWeight: 600 }}>
                                            View code
                                        </a>
                                    ) : null}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <p className="small" style={{ marginTop: 12, color: "#555" }}>
                    Each project repository includes a README with installation steps, features, and a short note about what I personally implemented.
                </p>
            </motion.div>
        </section>
    );
}
