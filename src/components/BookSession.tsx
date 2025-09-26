"use client";

import React, { useEffect, useState } from "react";
import { PopupWidget } from "react-calendly";

const BookSession: React.FC = () => {
  const [rootEl, setRootEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // Runs only on client
    setRootEl(document.body);
  }, []);

  return (
    <div className="relative -top-12 flex justify-center">
      {rootEl && (
        <PopupWidget
          url="https://calendly.com/adebanjo-adeniji/discovery-call-session-with-innkeeper-students"
          rootElement={rootEl}
          text="📅 Schedule a Session"
          color="#6B21A8"
          textColor="inherit"
        />
      )}
    </div>
  );
};

export default BookSession;
