"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import Particle from "@/components/Particle";

export default function Projects() {
  return (
    <section className="relative w-full py-16 bg-gray-50 dark:bg-gray-900">
      {/* Background particles */}
      <Particle />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">
          My Recent <span className="text-purple-600">Works</span>
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Here are a few projects I've worked on recently.
        </p>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            imgPath="https://res.cloudinary.com/ds83mhjcm/image/upload/v1709396543/Adebanjo_portfolio/chatify_azbt79.png"
            isBlog={false}
            title="Chatify"
            description="Personal Chat Room or Workspace to share resources and hangout with friends build with React.js, Material-UI, and Firebase. Includes realtime messaging, image sharing, and reactions."
            demoLink="https://chatify-49.web.app/"
            ghLink="https://github.com/adeniji-adebanjo"
          />

          <ProjectCard
            imgPath="https://res.cloudinary.com/ds83mhjcm/image/upload/v1709396543/Adebanjo_portfolio/blog_my2f9z.png"
            isBlog={false}
            title="Bits-0f-C0de"
            description="A personal blog built with Next.js and Tailwind CSS. Content is rendered from markdown files. Supports dark mode and makes writing blogs simple with markdown."
            demoLink="https://blogs.com/"
            ghLink="https://github.com/adeniji-adebanjo"
          />

          <ProjectCard
            imgPath="https://res.cloudinary.com/ds83mhjcm/image/upload/v1739969979/Adebanjo_portfolio/innkeeper-portfolio_eqe7ws.png"
            isBlog={false}
            title="Innkeeper LMS"
            description="Innkeeper Talent Accelerator is a tech talent development program offering training and mentorship in various tech skills, from full-time immersive bootcamps to part-time mentorship."
            ghLink="https://github.com/adeniji-adebanjo"
            demoLink="https://innkeeper.work/"
          />

          <ProjectCard
            imgPath="https://res.cloudinary.com/ds83mhjcm/image/upload/v1711047542/Adebanjo_portfolio/elitecvbuilder_1_wbordg.png"
            isBlog={false}
            title="EliteCVBuilder"
            description="EliteCVBuilder helps job seekers create professional resumes and cover letters quickly, with customizable templates, user-friendly interface, and job-specific guidance."
            demoLink="https://elitecvbuilder.com/"
            ghLink="https://github.com/adeniji-adebanjo"
          />

          <ProjectCard
            imgPath="https://res.cloudinary.com/ds83mhjcm/image/upload/v1730978406/FinestMart/FinestMart_pkdbbw.png"
            isBlog={false}
            title="FinestMart E-commerce App"
            description="FinestMart is a user-friendly e-commerce app with vast product categories, secure payments, and efficient order tracking for a seamless online shopping experience."
            ghLink="https://github.com/adeniji-adebanjo/finest-mart.git"
            demoLink="https://finest-mart.netlify.app/"
          />

          <ProjectCard
            imgPath="https://res.cloudinary.com/ds83mhjcm/image/upload/v1730979199/FinestMart/SACOutureNG_flgulg.png"
            isBlog={false}
            title="SACoutureNG"
            description="SACoutureNG is a bespoke fashion brand specializing in custom-tailored clothing with craftsmanship and attention to detail. Offers fittings, exclusive designs, and tailored experiences."
            ghLink="https://github.com/adeniji-adebanjo"
            demoLink="https://sacoutureng.com/"
          />
        </div>
      </div>
    </section>
  );
}
