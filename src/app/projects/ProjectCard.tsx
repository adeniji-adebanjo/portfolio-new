import React from "react";
import Image from "next/image";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

type ProjectCardProps = {
  imgPath: string;
  title: string;
  description: string;
  ghLink?: string;
  demoLink?: string;
  isBlog?: boolean;
};

export default function ProjectCard({
  imgPath,
  title,
  description,
  ghLink,
  demoLink,
  isBlog = false,
}: ProjectCardProps) {
  return (
    <div className="bg-gray-800 bg-opacity-80 text-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 duration-300 flex flex-col">
      {/* Image */}
      <div className="relative w-full h-48">
        <Image
          src={imgPath}
          alt={title}
          fill
          className="object-contain p-4 rounded-lg opacity-90"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-5">
        <h3 className="text-lg font-semibold mb-3">{title}</h3>
        <p className="text-sm text-gray-300 flex-grow text-justify">
          {description}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mt-5">
          {ghLink && (
            <a
              href={ghLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
            >
              <BsGithub className="mr-2" />
              {isBlog ? "Blog" : "GitHub"}
            </a>
          )}

          {demoLink && !isBlog && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            >
              <CgWebsite className="mr-2" />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
