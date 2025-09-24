"use client";

import React from "react";
import {
  //   SiVisualstudioCode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  //   SiMicrosoftWindows,
  SiNetlify,
  //   SiAmazonaws,
} from "react-icons/si";

const tools = [
  { id: 1, Icon: SiMacos, name: "macOS" },
  { id: 2, Icon: SiMacos, name: "Windows" },
  { id: 3, Icon: SiSlack, name: "VS Code" },
  { id: 4, Icon: SiPostman, name: "Postman" },
  { id: 5, Icon: SiSlack, name: "Slack" },
  { id: 6, Icon: SiVercel, name: "Vercel" },
  { id: 7, Icon: SiNetlify, name: "Netlify" },
  { id: 8, Icon: SiSlack, name: "AWS" },
];

const Toolstack: React.FC = () => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center pb-12">
      {tools.map(({ id, Icon, name }) => (
        <div
          key={id}
          className="group relative flex items-center justify-center text-5xl md:text-6xl text-gray-700 dark:text-gray-200 hover:text-purple-500 transition-colors duration-300"
        >
          <Icon />
          {/* Tooltip */}
          <span className="absolute -bottom-8 scale-0 group-hover:scale-100 transition-transform rounded-md bg-gray-800 text-white text-xs px-2 py-1">
            {name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Toolstack;
