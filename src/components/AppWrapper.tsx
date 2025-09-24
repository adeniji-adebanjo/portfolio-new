"use client";

import React, { useEffect, useState } from "react";
import Pre from "@/components/Pre";

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2s loader
    return () => clearTimeout(timer);
  }, []);

  // Optional: lock scroll while loading
  useEffect(() => {
    if (loading) {
      document.body.classList.add("overflow-hidden", "h-screen");
    } else {
      document.body.classList.remove("overflow-hidden", "h-screen");
    }
  }, [loading]);

  return (
    <>
      <Pre load={loading} />
      {children}
    </>
  );
};

export default AppWrapper;
