import React from "react";

export default function Skills() {
    const skills = [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "MySQL",
        "HTML5",
        "CSS3",
        "JavaScript (ES6)",
        "Git",
        "REST APIs",
    ];
    return (
        <section>
            <h2>Tech Stack</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </section>
    );
}
