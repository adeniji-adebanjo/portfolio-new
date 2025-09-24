"use client";

import React from "react";
import {
  // SiVisualstudioCode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  // SiWindows11,
  SiNetlify,
  // SiAmazonaws,
} from "react-icons/si";

const icons = [
  <SiMacos key="mac" />,
  // <SiWindows11 key="windows" />,
  // <SiVisualstudiocode key="vscode" />,
  <SiPostman key="postman" />,
  <SiSlack key="slack" />,
  <SiVercel key="vercel" />,
  <SiNetlify key="netlify" />,
  // <SiAmazonaws key="aws" />,
];

const Toolstack: React.FC = () => {
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

export default Toolstack;
