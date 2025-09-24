"use client";

import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const Particle: React.FC = () => {
  const [init, setInit] = useState(false);

  // Initialize tsparticles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = async (container?: Container) => {
    // Optional: handle container
    console.log("Particles loaded:", container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: true, zIndex: -1 },
      background: { color: "transparent" },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
          onClick: { enable: true, mode: "push" },
        },
        modes: {
          push: { quantity: 2 },
          repulse: { distance: 150, duration: 0.6 },
        },
      },
      particles: {
        number: { value: 100, density: { enable: true } },
        color: { value: ["#c084fc", "#a855f7", "#9333ea"] }, // gradient-style palette
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
        opacity: {
          value: 0.6,
          animation: {
            enable: true,
            speed: 0.5,
            minimumValue: 0.2,
            sync: false,
          },
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: { default: OutMode.out },
          random: true,
          speed: 0.3,
          straight: false,
        },
        links: {
          enable: true,
          distance: 150,
          color: "#a855f7",
          opacity: 0.2,
          width: 1,
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
      particlesLoaded={particlesLoaded}
    />
  );
};

export default Particle;
