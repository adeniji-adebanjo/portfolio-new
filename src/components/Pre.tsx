"use client";
import React from "react";

interface PreProps {
  load: boolean;
}

const Pre: React.FC<PreProps> = ({ load }) => {
  return (
    <div
      className={`fixed inset-0 z-[999999] transition-opacity duration-500 ${
        load
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } bg-[#0c0513] bg-no-repeat bg-center`}
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/ds83mhjcm/image/upload/v1711007541/Adebanjo_portfolio/pre_onnzya.svg")',
      }}
    />
  );
};

export default Pre;
