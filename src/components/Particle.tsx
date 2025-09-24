"use client";

import React, { useCallback } from "react";
import Particles from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import { loadFull } from "tsparticles";

const Particle: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine); // loads all tsparticles features
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              height: 1000,
              width: 1000,
            },
          },
          color: {
            value: ["#c084fc", "#a855f7", "#9333ea"],
          },
          move: {
            direction: "right",
            speed: 0.05,
          },
          opacity: {
            value: 0.5,
            animation: {
              enable: true,
              speed: 1,
            },
          },
          size: { value: 1 },
        },
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            push: { quantity: 1 },
          },
        },
        detectRetina: true,
        background: { color: "transparent" },
      }}
    />
  );
};

export default Particle;
