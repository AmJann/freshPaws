"use client";
import { useEffect, useState } from "react";

export default function RunningDog() {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setStartAnimation(true);
  }, []);

  return (
    <div className="relative w-full h-32 overflow-hidden">
      <img
        src="/images/dog-running.gif" // Replace with your dog image
        alt="Running Dog"
        className={`absolute bottom-0 left-[-150px] w-32 h-auto ${
          startAnimation ? "animate-run" : ""
        }`}
      />
    </div>
  );
}
