"use client";

import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import Contact from "./Contact";
import Particle from "@/components/Particle";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-[url('https://res.cloudinary.com/ds83mhjcm/image/upload/v1709396526/Adebanjo_portfolio/home-bg_ecpbip.jpg')] bg-top bg-no-repeat bg-cover text-white"
    >
      {/* Particles */}
      <Particle />

      {/* Main hero content */}
      <div className="max-w-6xl mx-auto px-4 pt-16 md:pt-44 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left text */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Hi There!{" "}
              <span className="inline-block animate-wave origin-[70%_70%]">
                👋🏻
              </span>
            </h1>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              I'M
              <strong className="text-purple-400"> ADEBANJO ADENIJI</strong>
            </h1>

            <div className="text-left">
              <Typewriter
                options={{
                  strings: [
                    "Software Engineer",
                    "Frontend Training Instructor",
                    "Freelancer",
                    "MERN Stack Developer",
                    "Open Source Contributor",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </div>
          </div>

          {/* Right image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="https://res.cloudinary.com/ds83mhjcm/image/upload/v1710931324/home-main_agqoq4.svg"
              alt="home-pic"
              className="max-h-[450px] w-auto"
            />
          </div>
        </div>
      </div>

      {/* About + Avatar + Social + Contact */}
      <div
        id="about"
        className="max-w-6xl mx-auto px-4 py-16 md:py-24 text-white"
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* About text */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-6">
              LET ME <span className="text-purple-400"> INTRODUCE </span> MYSELF
            </h1>
            <p className="text-lg leading-relaxed">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like{" "}
              <b className="text-purple-400">
                ReactJs, NextJs, and TypeScript.
              </b>
              <br />
              <br />
              My field of Interests are building new{" "}
              <b className="text-purple-400">
                Web Technologies and Products
              </b>{" "}
              and also in areas related to{" "}
              <b className="text-purple-400">
                Blockchain, Artificial Intelligence (AI) and Machine Learning
                (ML).
              </b>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="text-purple-400">Node.js</b> and{" "}
              <b className="text-purple-400">
                Modern Javascript Library and Frameworks
              </b>{" "}
              like{" "}
              <b className="text-purple-400">AngularJs, VueJs and AlpineJs.</b>
            </p>
          </div>

          {/* Avatar */}
          <div className="flex justify-center md:justify-end pt-8 md:pt-0">
            <Tilt>
              <img
                src="https://res.cloudinary.com/ds83mhjcm/image/upload/v1710931535/Adebanjo_portfolio/avatar_kbhezl.svg"
                alt="avatar"
                className="max-w-xs md:max-w-sm"
              />
            </Tilt>
          </div>
        </div>

        {/* Social + Contact */}
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Social links */}
          <div className="text-center">
            <h1 className="text-xl font-bold">FIND ME ON</h1>
            <p className="text-white mt-2">
              Feel free to <span className="text-purple-400">connect </span>with
              me
            </p>
            <ul className="flex justify-center space-x-6 mt-4">
              <li>
                <a
                  href="https://github.com/adeniji-adebanjo"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-purple-800 hover:scale-110 shadow-md transition"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/adebanjoadeniji/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-purple-800 hover:scale-110 shadow-md transition"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact form */}
          <div>
            <Contact />
          </div>
        </div>
      </div>
    </section>
  );
}
