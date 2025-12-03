import React from "react";
import { motion } from "framer-motion";

const TESTIMONIALS = [
    {
        quote: "Himani quickly learned React and built reliable UI components for our product — very dependable.",
        name: "S. Patel — Supervisor, Yonda"
    },
    {
        quote: "Her designs are thoughtful and practical. She communicates clearly and follows through.",
        name: "J. Kumar — Project Mentor"
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="brand-section">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <h2>What Others Say</h2>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 14, marginTop: 12 }}>
                    {TESTIMONIALS.map((t, i) => (
                        <motion.blockquote
                            key={i}
                            className="testimonial-card"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.25 }}
                            style={{
                                background: "linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.8))",
                                borderRadius: 12,
                                padding: 18,
                                boxShadow: "0 6px 22px rgba(0,0,0,0.06)"
                            }}
                        >
                            <p style={{ margin: 0, color: "#444" }}>"{t.quote}"</p>
                            <footer style={{ marginTop: 12, fontWeight: 700, color: "#ff4b8b" }}>— {t.name}</footer>
                        </motion.blockquote>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
