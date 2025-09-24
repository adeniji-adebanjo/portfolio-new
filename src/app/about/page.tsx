"use client";

import React from "react";
import AboutCard from "./AboutCard";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import Particle from "@/components/Particle";
import Github from "./Github";

const About: React.FC = () => {
  return (
    <div className="relative py-36 bg-gradient-to-b from-purple-900/40 to-black text-white">
      <Particle />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 pb-12">
          <div className="md:w-2/3">
            <h1 className="text-3xl font-bold pb-6">
              Know Who <span className="text-purple-400">I AM</span>
            </h1>
            <AboutCard />
          </div>

          <div className="md:w-1/3 pt-12 md:pt-32">
            <img
              src="https://res.cloudinary.com/ds83mhjcm/image/upload/v1709396526/Adebanjo_portfolio/about_kauvc9.png"
              alt="about"
              className="w-full object-contain"
            />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-center pb-8">
          Professional <span className="text-purple-400">Skillset</span>
        </h1>
        <Techstack />

        <h1 className="text-2xl font-bold text-center pb-8">
          <span className="text-purple-400">Tools</span> I use
        </h1>
        <Toolstack />
        <Github />
      </div>
    </div>
  );
};

export default About;
