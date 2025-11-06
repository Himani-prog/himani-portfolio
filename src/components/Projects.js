import React from "react";

export default function Projects() {
    const projects = [
        {
            name: "SmartTask Manager",
            desc: "A full-stack MERN task tracker with JWT authentication.",
            link: "https://github.com/himani-smarttask",
        },
        {
            name: "WeatherView Dashboard",
            desc: "Live weather dashboard using React and OpenWeather API.",
            link: "https://github.com/himani-weatherview",
        },
        {
            name: "ChatConnect App",
            desc: "Realtime chat app with Socket.io and Node.js backend.",
            link: "https://github.com/himani-chatconnect",
        },
    ];

    return (
        <section>
            <h2>Projects</h2>
            {projects.map((p, index) => (
                <div className="project-card" key={index}>
                    <h3>{p.name}</h3>
                    <p>{p.desc}</p>
                    <a href={p.link} target="_blank" rel="noopener noreferrer">
                        View on GitHub
                    </a>
                </div>
            ))}
        </section>
    );
}
