"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { CgGitFork, CgFileDocument } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
// import BookSession from "./BookSession";

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const [navColour, setNavColour] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavColour(window.scrollY >= 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          navColour
            ? "bg-gray-900/80 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between py-3 px-6">
          <Link href="/" className="flex items-center">
            <Image
              src="/myLogo.png"
              alt="logo"
              width={40}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          {/* Toggle button for mobile */}
          <button
            className="md:hidden flex flex-col space-y-1"
            onClick={() => setExpanded(!expanded)}
          >
            <span
              className={`h-1 w-7 bg-purple-500 transform transition ${
                expanded ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`h-1 w-7 bg-purple-500 transition ${
                expanded ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-1 w-7 bg-purple-500 transform transition ${
                expanded ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>

          {/* Nav links */}
          <div
            className={`${
              expanded ? "block" : "hidden"
            } md:flex md:items-center space-y-4 md:space-y-0 md:space-x-6 absolute md:static top-14 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent p-4 md:p-0`}
          >
            <Link
              href="/"
              className="flex items-center hover:text-purple-400"
              onClick={() => setExpanded(false)}
            >
              <AiOutlineHome className="mr-1" /> Home
            </Link>
            <Link
              href="/about"
              className="flex items-center hover:text-purple-400"
              onClick={() => setExpanded(false)}
            >
              <AiOutlineUser className="mr-1" /> About
            </Link>
            <Link
              href="/projects"
              className="flex items-center hover:text-purple-400"
              onClick={() => setExpanded(false)}
            >
              <AiOutlineFundProjectionScreen className="mr-1" /> Projects
            </Link>
            <Link
              href="/resume"
              className="flex items-center hover:text-purple-400"
              onClick={() => setExpanded(false)}
            >
              <CgFileDocument className="mr-1" /> Resume
            </Link>
            <a
              href="https://adebanjowrites.medium.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center hover:text-purple-400"
            >
              <ImBlog className="mr-1" /> Blogs
            </a>
            <a
              href="https://github.com/adeniji-adebanjo/Portfolio"
              target="_blank"
              className="ml-3 flex items-center space-x-1 border border-purple-500 px-3 py-1 rounded-lg hover:bg-purple-600 transition"
            >
              <CgGitFork />
              <AiFillStar />
            </a>
          </div>
        </div>
      </nav>
      {/* <BookSession /> */}
    </>
  );
}
