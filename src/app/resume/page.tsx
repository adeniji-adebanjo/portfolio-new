"use client";

import React, { useState } from "react";
import { AiOutlineDownload, AiOutlineLoading3Quarters } from "react-icons/ai";

const ResumeComponent: React.FC = () => {
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDownload = async () => {
    setError(null);
    setDownloading(true);
    try {
      const res = await fetch("/downloads/Adebanjo_Resume.pdf");
      if (!res.ok)
        throw new Error("Failed to fetch PDF (status: " + res.status + ")");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Adebanjo_Resume.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (err: any) {
      console.error(err);
      setError(err?.message || "An unknown error occurred while downloading.");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <main className="max-w-4xl my-30 mx-auto p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-lg">
      <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Adebanjo Adeniji</h1>
          <p className="text-purple-600 font-medium">
            Senior Frontend Engineer
          </p>
          <div className="mt-3 flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-300">
            <a href="mailto:aeben.adebanjo@gmail.com" className="underline">
              aeben.adebanjo@gmail.com
            </a>
            <span>•</span>
            <a href="tel:+2348106342311" className="underline">
              +234 (0) 810 634 2311
            </a>
            <span>•</span>
            <span>Lagos, Nigeria</span>
          </div>
          <div className="mt-3 flex gap-3 text-sm">
            <a
              href="https://adebanjo-portfolio.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="text-sm underline"
            >
              Portfolio
            </a>
            <a
              href="https://github.com/adeniji-adebanjo"
              target="_blank"
              rel="noreferrer"
              className="text-sm underline"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/adebanjoadeniji/"
              target="_blank"
              rel="noreferrer"
              className="text-sm underline"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleDownload}
            disabled={downloading}
            className="inline-flex items-center cursor-pointer gap-2 px-4 py-2 rounded-md bg-purple-700 text-white hover:bg-purple-800 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            aria-label="Download resume PDF"
          >
            {/* Icon always comes first */}
            {downloading ? (
              <AiOutlineLoading3Quarters className="w-4 h-4 animate-spin" />
            ) : (
              <AiOutlineDownload className="w-4 h-4" />
            )}

            {/* Text label */}
            <span>{downloading ? "Downloading..." : "Download Resume"}</span>
          </button>
        </div>
      </header>

      <section className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <aside className="md:col-span-1 space-y-6">
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800">
            <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              Summary
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Results-oriented Frontend Engineer with 5 years of experience
              delivering performant, scalable, and user-centric web
              applications. Proficient in optimizing ReactJS applications and
              driving front-end performance for large-scale products.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800">
            <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              Skills
            </h3>
            <ul className="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-300">
              <li>ReactJS · Next.js · TypeScript (learning)</li>
              <li>Tailwind CSS · API Integration · Firebase · Node.js</li>
              <li>Performance Optimization · Code-splitting · Lazy-loading</li>
              <li>Git · Jest · React Testing Library · CI/CD</li>
            </ul>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800">
            <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              Education
            </h3>
            <ul className="mt-2 text-sm text-slate-600 dark:text-slate-300 space-y-2">
              <li>
                <strong>Frontend Developer</strong>, Innkeeper Talent
                Accelerator — <span className="text-slate-500">2022</span>
              </li>
              <li>
                Jobberman Soft Skills Training —{" "}
                <span className="text-slate-500">Oct 2020</span>
              </li>
              <li>
                Google Digital Skills for Africa —{" "}
                <span className="text-slate-500">Oct 2020</span>
              </li>
            </ul>
          </div>
        </aside>

        <div className="md:col-span-2 space-y-6">
          <section className="p-6 rounded-lg bg-slate-50 dark:bg-slate-800">
            <h2 className="text-xl font-semibold">Career Experience</h2>

            <article className="mt-4">
              <h4 className="font-medium">
                Innkeeper Talent Accelerator — Frontend Developer
              </h4>
              <p className="text-sm text-slate-500">Jan 2023 – Present</p>
              <ul className="mt-2 list-disc list-inside text-sm text-slate-600 dark:text-slate-300">
                <li>
                  Optimized learning platform performance, increasing page load
                  speed by 30% and enhancing user engagement.
                </li>
                <li>
                  Automated platform processes, reducing onboarding time by 50%.
                </li>
                <li>
                  Proactively identified and resolved UI bottlenecks for 1,000+
                  users.
                </li>
              </ul>
            </article>

            <article className="mt-4">
              <h4 className="font-medium">
                Sonia Audu Couture (SACoutureNG) — Frontend Developer
                (Freelance)
              </h4>
              <p className="text-sm text-slate-500">Oct 2023 – Sept 2024</p>
              <ul className="mt-2 list-disc list-inside text-sm text-slate-600 dark:text-slate-300">
                <li>
                  Engineered e‑commerce app with secure payment, order
                  management and booking features.
                </li>
                <li>
                  Built dynamic product catalogue with filtering and
                  personalized recommendations.
                </li>
                <li>Improved mobile responsiveness and checkout flow.</li>
              </ul>
            </article>

            <article className="mt-4">
              <h4 className="font-medium">
                Elite Careers Solutions — Frontend Web Developer
              </h4>
              <p className="text-sm text-slate-500">May 2022 – Sept 2022</p>
              <ul className="mt-2 list-disc list-inside text-sm text-slate-600 dark:text-slate-300">
                <li>
                  Optimized a Laravel web app, achieving a 20% reduction in
                  initial load time.
                </li>
                <li>
                  Developed responsive event websites to handle high traffic.
                </li>
                <li>
                  Streamlined API integrations improving data fetch times by
                  40%.
                </li>
              </ul>
            </article>

            <article className="mt-4">
              <h4 className="font-medium">
                8thGear Partners Ltd — Frontend Developer (Lead)
              </h4>
              <p className="text-sm text-slate-500">Oct 2020 – Apr 2022</p>
              <ul className="mt-2 list-disc list-inside text-sm text-slate-600 dark:text-slate-300">
                <li>
                  Spearheaded development of four scalable web apps, increasing
                  engagement by 25%.
                </li>
                <li>
                  Implemented performance best practices and reduced bundle size
                  by 35%.
                </li>
                <li>
                  Introduced a performance monitoring system across projects.
                </li>
              </ul>
            </article>
          </section>

          <section className="p-6 rounded-lg bg-slate-50 dark:bg-slate-800">
            <h2 className="text-xl font-semibold">
              Core Competencies & Processes
            </h2>
            <ul className="mt-3 text-sm text-slate-600 dark:text-slate-300 list-disc list-inside space-y-1">
              <li>Scaling React applications for large user bases.</li>
              <li>Asynchronous collaboration using Slack and Loom.</li>
              <li>
                Investigative mindset for resolving complex front-end issues.
              </li>
            </ul>
          </section>
        </div>
      </section>

      {error && (
        <div className="mt-6 text-sm text-red-600">Download error: {error}</div>
      )}

      {/* <footer className="mt-8 text-xs text-slate-500">
        <p>Resume generated from uploaded PDF.</p>
      </footer> */}
    </main>
  );
};

export default ResumeComponent;
