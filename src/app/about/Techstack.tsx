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
  { id: 1, Icon: DiJavascript1 },
  { id: 2, Icon: DiNodejs },
  { id: 3, Icon: DiReact },
  { id: 4, Icon: DiMongodb },
  { id: 5, Icon: SiNextdotjs },
  { id: 6, Icon: DiGit },
  { id: 7, Icon: SiFirebase },
  { id: 8, Icon: SiPostgresql },
];

const Techstack: React.FC = () => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center pb-12">
      {icons.map(({ id, Icon }) => (
        <div
          key={id}
          className="flex items-center justify-center text-5xl md:text-6xl text-gray-700 dark:text-gray-200 hover:text-purple-500 transition-colors duration-300"
        >
          <Icon />
        </div>
      ))}
    </div>
  );
};

export default Techstack;
