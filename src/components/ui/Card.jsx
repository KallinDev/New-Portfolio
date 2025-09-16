// src/components/ui/Card.jsx
import React from "react";

export const Card = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`bg-white/5 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
