"use client";

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillSkype,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0416] py-3 text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        {/* Designed by */}
        <div>
          <h3 className="text-sm my-2">
            Designed and Developed by Adebanjo Adeniji
          </h3>
        </div>

        {/* Copyright */}
        <div>
          <h3 className="text-sm my-2">Copyright © {year} Adebanjo</h3>
        </div>

        {/* Social links */}
        <div className="flex justify-center space-x-4 text-lg">
          <a
            href="https://github.com/adeniji-adebanjo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://twitter.com/AA_Ebenezer"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <AiOutlineTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/adebanjoadeniji/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.instagram.com/kingdom.addict"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <AiFillInstagram />
          </a>
          <a
            href="https://join.skype.com/invite/NWle2HWPtcYh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <AiFillSkype />
          </a>
        </div>
      </div>
    </footer>
  );
}
