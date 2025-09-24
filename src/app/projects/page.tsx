"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import Particle from "@/components/Particle";

export default function Projects() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <Particle />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-white mb-4">
          My Recent <span className="text-purple-400">Works</span>
        </h1>
        <p className="text-center text-gray-300 mb-12">
          Here are a few projects I've worked on recently.
        </p>

        {/* Grid of Projects */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            imgPath="https://res.cloudinary.com/ds83mhjcm/image/upload/v1709396543/Adebanjo_portfolio/chatify_azbt79.png"
            isBlog={false}
            title="Chatify"
            description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
            demoLink="https://chatify-49.web.app/"
            ghLink="https://github.com/adeniji-adebanjo"
          />

          <ProjectCard
            imgPath="https://res.cloudinary.com/ds83mhjcm/image/upload/v1709396543/Adebanjo_portfolio/blog_my2f9z.png"
            isBlog={false}
            title="Bits-0f-C0de"
            description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
            demoLink="https://blogs.com/"
            ghLink="https://github.com/adeniji-adebanjo"
          />

          <ProjectCard
            imgPath="https://res.cloudinary.com/ds83mhjcm/image/upload/v1739969979/Adebanjo_portfolio/innkeeper-portfolio_eqe7ws.png"
            isBlog={false}
            title="Innkeeper LMS"
            description="Innkeeper Talent Accelerator is a tech talent development program offering training and mentorship in various tech skills, with courses ranging from full-time immersive bootcamps to part-time programs and mentorship."
            ghLink="https://github.com/adeniji-adebanjo"
            demoLink="https://innkeeper.work/"
          />

          <ProjectCard
            imgPath="https://res.cloudinary.com/ds83mhjcm/image/upload/v1711047542/Adebanjo_portfolio/elitecvbuilder_1_wbordg.png"
            isBlog={false}
            title="EliteCVBuilder"
            description="EliteCVBuilder is an easy-to-use online tool that helps job seekers create professional resumes and cover letters quickly. With customizable templates, a user-friendly interface, and job-specific guidance, it enables users to craft impactful resumes that stand out in the competitive job market."
            demoLink="https://elitecvbuilder.com/"
            ghLink="https://github.com/adeniji-adebanjo"
          />

          <ProjectCard
            imgPath="https://res.cloudinary.com/ds83mhjcm/image/upload/v1730978406/FinestMart/FinestMart_pkdbbw.png"
            isBlog={false}
            title="FinestMart E-commerce App"
            description="FinestMart is a user-friendly e-commerce app designed to provide a seamless shopping experience. With a vast selection of products across various categories, FinestMart offers intuitive navigation, secure payment options, and efficient order tracking. The app is crafted to make online shopping quick and convenient, helping users find what they need and make purchases effortlessly."
            ghLink="https://github.com/adeniji-adebanjo/finest-mart.git"
            demoLink="https://finest-mart.netlify.app/"
          />

          <ProjectCard
            imgPath="https://res.cloudinary.com/ds83mhjcm/image/upload/v1730979199/FinestMart/SACOutureNG_flgulg.png"
            isBlog={false}
            title="SACoutureNG"
            description="SACoutureNG is a bespoke fashion brand specializing in elegant, custom-tailored clothing. Known for its craftsmanship and attention to detail, SACoutureNG creates pieces that reflect individual style and sophistication. The brand offers a range of services, from personalized fittings to exclusive designs, ensuring clients experience fashion uniquely tailored to them."
            ghLink="https://github.com/adeniji-adebanjo"
            demoLink="https://sacoutureng.com/"
          />
        </div>
      </div>
    </section>
  );
}
