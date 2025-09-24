"use client";

import React from "react";
import GitHubCalendar from "react-github-calendar";

const Github: React.FC = () => {
  return (
    <div className="flex flex-col items-center pb-4">
      <h1 className="text-2xl md:text-3xl font-bold text-white pb-5">
        Days I <span className="text-purple-400">Code</span>
      </h1>
      <GitHubCalendar
        username="adeniji-adebanjo"
        blockSize={15}
        blockMargin={5}
        // color="#c084f5"
        fontSize={16}
      />
    </div>
  );
};

export default Github;
