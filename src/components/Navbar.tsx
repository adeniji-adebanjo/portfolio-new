"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { CgGitFork, CgFileDocument } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import BookSession from "./BookSession";

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const [navColour, setNavColour] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setNavColour(window.scrollY >= 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home", icon: <AiOutlineHome className="mr-1" /> },
    {
      href: "/about",
      label: "About",
      icon: <AiOutlineUser className="mr-1" />,
    },
    {
      href: "/projects",
      label: "Projects",
      icon: <AiOutlineFundProjectionScreen className="mr-1" />,
    },
    {
      href: "/resume",
      label: "Resume",
      icon: <CgFileDocument className="mr-1" />,
    },
    {
      href: "https://adebanjowrites.medium.com",
      label: "Blogs",
      icon: <ImBlog className="mr-1" />,
      external: true,
    },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          navColour
            ? "bg-gray-900/80 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        {/* <div className="container mx-auto flex items-center justify-between py-3 px-6"> */}
        <div className="mx-auto w-full max-w-6xl flex items-center justify-between py-3 px-6">
          <Link href="/" className="flex items-center">
            <Image
              src="/myLogo.png"
              alt="logo"
              width={40}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          {/* Mobile toggle */}
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
              expanded
                ? "flex flex-col items-start space-y-4"
                : "hidden md:flex md:items-center md:space-x-12"
            } absolute md:static top-14 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent p-4 md:p-0`}
          >
            {navLinks.map((link) => {
              const isActive = !link.external && pathname === link.href;

              return link.external ? (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  className="inline-flex items-center gap-1 text-white hover:text-purple-400 border-b-4 border-transparent hover:border-purple-500 rounded-b-md transition-all duration-300 pb-1"
                  onClick={() => setExpanded(false)}
                >
                  {link.icon} {link.label}
                </Link>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setExpanded(false)}
                  className={`inline-flex items-center gap-1 border-b-4 pb-1 transition-all duration-300 rounded-b-md
                    ${
                      isActive
                        ? "border-purple-500 text-purple-400"
                        : "border-transparent hover:border-purple-500 hover:text-purple-400"
                    }`}
                >
                  {link.icon} {link.label}
                </Link>
              );
            })}

            {/* GitHub buttons */}
            <div className="inline-flex space-x-2 mt-2 md:mt-0">
              <Link
                href="https://github.com/adeniji-adebanjo/Portfolio"
                target="_blank"
                className="inline-flex items-center space-x-1 border border-purple-500 px-3 py-1 rounded-lg hover:bg-purple-600 transition text-white"
              >
                <CgGitFork />
                <AiFillStar />
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <BookSession />
    </>
  );
}
