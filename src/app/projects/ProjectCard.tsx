import React from "react";
import Image from "next/image";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

type ProjectCardProps = {
  imgPath: string;
  title: string;
  description: string;
  ghLink: string;
  demoLink?: string;
  isBlog?: boolean;
};

export default function ProjectCards({
  imgPath,
  title,
  description,
  ghLink,
  demoLink,
  isBlog = false,
}: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative w-full h-56">
        <Image src={imgPath} alt={title} fill className="object-cover" />
      </div>

      {/* Card body */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 text-justify mb-4">
          {description}
        </p>

        <div className="flex flex-wrap gap-3">
          {/* GitHub / Blog button */}
          <a
            href={ghLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            <BsGithub className="mr-2" />
            {isBlog ? "Blog" : "GitHub"}
          </a>

          {/* Demo button */}
          {!isBlog && demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
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
