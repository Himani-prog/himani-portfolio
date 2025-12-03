import React from "react";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="brand-section" style={{ marginTop: 40 }}>
            <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2>About</h2>
                <div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
                    <div style={{ flex: "1 1 320px" }}>
                        <p style={{ marginTop: 8, color: "#444", lineHeight: 1.6 }}>
                            Hi — I’m <strong>Himani Shah</strong>. I design calm, intuitive digital experiences and build them with React, Node.js, and modern web tools.
                            I have a Master of Information Technology (Deakin University) and hands-on internship experience building frontend features and small full-stack apps.
                        </p>
                        <p style={{ marginTop: 10, color: "#444" }}>
                            I’m seeking junior developer role where I can contribute to user-first products, learn from senior engineers, and keep growing in full-stack development.
                        </p>
                    </div>

                    <div style={{ width: 220, minWidth: 180 }}>
                        <img
                            src="/assets/profile-shot.jpg"
                            alt="Himani Shah"
                            style={{
                                width: "100%",
                                borderRadius: 16,
                                boxShadow: "0 8px 30px rgba(255,150,200,0.15)",
                                border: "4px solid rgba(255,255,255,0.6)"
                            }}
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
