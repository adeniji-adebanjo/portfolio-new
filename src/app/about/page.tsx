"use client";

import React from "react";
import Image from "next/image";
import Particle from "@/components/Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";

export default function About() {
  return (
    <section className="relative w-full min-h-screen bg-background py-16">
      {/* Particle Background */}
      <Particle />

      <div className="container mx-auto px-4 relative z-10">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8">
          {/* Left Side */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-6">
              Know Who <span className="text-purple-500">I AM</span>
            </h1>
            <Aboutcard />
          </div>

          {/* Right Side */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <Image
              src="https://res.cloudinary.com/ds83mhjcm/image/upload/v1709396526/Adebanjo_portfolio/about_kauvc9.png"
              alt="about"
              width={400}
              height={400}
              className="rounded-xl object-contain"
              priority
            />
          </div>
        </div>

        {/* Skillset */}
        <h1 className="text-2xl font-bold text-center mt-16 mb-8">
          Professional <span className="text-purple-500">Skillset</span>
        </h1>
        <Techstack />

        {/* Tools */}
        <h1 className="text-2xl font-bold text-center mt-16 mb-8">
          <span className="text-purple-500">Tools</span> I use
        </h1>
        <Toolstack />
      </div>
    </section>
  );
}
