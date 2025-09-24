"use client";

import React, { useState, useEffect } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import Particle from "@/components/Particle";

// Configure pdf.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const pdf = "/Adebanjo_Resume.pdf";

const Resume: React.FC = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [width, setWidth] = useState<number>(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <section className="relative py-28 bg-gradient-to-b from-purple-900/40 to-black text-white">
      <Particle />

      {/* Top Download Button */}
      <div className="flex justify-center relative z-10">
        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-2 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-md shadow-md transition-transform hover:-translate-y-1"
        >
          <AiOutlineDownload className="text-xl" />
          Download Resume
        </a>
      </div>

      {/* Resume Document */}
      <div className="flex justify-center py-12">
        <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(new Array(numPages || 0), (_, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              scale={width > 786 ? 1.7 : 0.6}
              className="shadow-lg"
            />
          ))}
        </Document>
      </div>

      {/* Bottom Download Button */}
      <div className="flex justify-center mt-6">
        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-2 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-md shadow-md transition-transform hover:-translate-y-1"
        >
          <AiOutlineDownload className="text-xl" />
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
