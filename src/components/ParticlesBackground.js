import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                background: {
                    color: { value: "transparent" },
                },
                fullScreen: { enable: true, zIndex: -1 },
                particles: {
                    number: { value: 30 },
                    color: { value: ["#ff4b8b", "#ffbb33"] },
                    shape: { type: "circle" },
                    opacity: { value: 0.3 },
                    size: { value: 3 },
                    links: {
                        enable: true,
                        color: "#ffbb33",
                        distance: 150,
                        opacity: 0.2,
                    },
                    move: {
                        enable: true,
                        speed: 1,
                        direction: "none",
                        outModes: { default: "bounce" },
                    },
                },
                detectRetina: true,
            }}
        />
    );
}
