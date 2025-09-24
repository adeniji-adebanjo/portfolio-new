"use client";

import React from "react";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import { SiFirebase, SiNextdotjs, SiPostgresql } from "react-icons/si";

const icons = [
  <DiJavascript1 key="js" />,
  <DiNodejs key="node" />,
  <DiReact key="react" />,
  <DiMongodb key="mongo" />,
  <SiNextdotjs key="next" />,
  <DiGit key="git" />,
  <SiFirebase key="firebase" />,
  <SiPostgresql key="postgres" />,
];

const Techstack: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 pb-12">
      {icons.map((icon, index) => (
        <div
          key={index}
          className="text-6xl p-4 border border-purple-400/60 rounded-md shadow-md opacity-90 hover:scale-105 hover:border-purple-400 transition-transform"
        >
          {icon}
        </div>
      ))}
    </div>
  );
};

export default Techstack;
