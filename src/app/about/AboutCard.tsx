"use client";

import React from "react";
import { ImPointRight } from "react-icons/im";

const AboutCard: React.FC = () => {
  return (
    <div className="bg-white/10 backdrop-blur-md shadow-lg rounded-2xl p-6 border border-white/20">
      <blockquote className="text-gray-300">
        <p className="text-justify leading-8">
          Hi Everyone, I am{" "}
          <span className="text-purple-400 font-semibold">
            Adebanjo Adeniji
          </span>{" "}
          from{" "}
          <span className="text-purple-400 font-semibold">Lagos, Nigeria.</span>
          <br />
          Hey there! I'm thrilled to share that I'm currently rocking the role
          of a <span className="font-medium">
            Frontend Training Instructor
          </span>{" "}
          at <span className="font-medium">Innkeeper Talent Accelerator</span>!
          I get to unleash my passion for tech and teaching every day while
          helping others level up their skills.
          <br />
          <br />
          I'm always up for a challenge, and I believe that with the right
          mindset and determination, anything is possible. So let's keep
          learning, growing, and having fun along the way!
          <br />
          <br />
          Apart from coding, some other activities that I love to do!
        </p>

        <ul className="mt-4 space-y-2 text-gray-200">
          <li className="flex items-center gap-2">
            <ImPointRight className="text-purple-400" /> Playing Games
          </li>
          <li className="flex items-center gap-2">
            <ImPointRight className="text-purple-400" /> Writing Tech Blogs
          </li>
          <li className="flex items-center gap-2">
            <ImPointRight className="text-purple-400" /> Traveling
          </li>
        </ul>

        <p className="mt-6 text-purple-300 italic">
          "Strive to build things that make a difference!"
        </p>
        <footer className="text-right text-sm text-gray-400">— Adebanjo</footer>
      </blockquote>
    </div>
  );
};

export default AboutCard;
