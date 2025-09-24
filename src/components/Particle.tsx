"use client";

import React from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

const Particle: React.FC = () => {
  //   const particlesInit = async (engine: Engine): Promise<void> => {
  //     await loadFull(engine);
  //   };

  return (
    <Particles
      id="tsparticles"
      //   init={particlesInit}
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
              area: 1500,
            },
          },
          links: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            direction: "right",
            speed: 0.05,
          },
          size: {
            value: 1,
          },
          opacity: {
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              quantity: 1,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Particle;
