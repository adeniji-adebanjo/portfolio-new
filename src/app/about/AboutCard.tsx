"use client";

import React from "react";
import { ImPointRight } from "react-icons/im";

const AboutCard: React.FC = () => {
  return (
    <div className="bg-transparent text-white border-0 shadow-none">
      <div className="p-6">
        <blockquote className="mb-0">
          <p className="text-justify leading-8">
            Hi Everyone, I am{" "}
            <span className="text-purple-400 font-semibold">
              Adebanjo Adeniji
            </span>{" "}
            from{" "}
            <span className="text-purple-400 font-semibold">
              Lagos, Nigeria.
            </span>
            <br />
            Hey there! I&apos;m thrilled to share that I&apos;m currently
            rocking the role of a Frontend Training Instructor at Innkeeper
            Talent Accelerator! I get to unleash my passion for tech and
            teaching every day while helping others level up their skills.
            <br />
            <br />
            I&apos;m always up for a challenge, and I believe that with the
            right mindset and determination, anything is possible. So let&apos;s
            keep learning, growing, and having fun along the way!
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul className="list-none text-left pl-1">
            <li className="flex items-center gap-2">
              <ImPointRight /> Playing Games
            </li>
            <li className="flex items-center gap-2">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="flex items-center gap-2">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p className="text-purple-300 mt-4">
            &quot;Strive to build things that make a difference!&quot;
          </p>
          <footer className="text-sm">— Adebanjo</footer>
        </blockquote>
      </div>
    </div>
  );
};

export default AboutCard;
