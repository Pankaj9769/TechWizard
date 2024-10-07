import React from 'react';

export const Card = ({ children, className }) => {
  return <div className={`rounded-lg shadow-md overflow-hidden ${className}`}>{children}</div>;
};

export const CardHeader = ({ children, className }) => {
  return (
    <div className={`p-4 bg-[#D1D8C5] border-b border-[#D1D8C5] ${className}`}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

export const CardTitle = ({ children, className }) => {
  return (
    <h2 className={`text-2xl font-semibold text-[#615EFC] ${className}`}>
      {children}
    </h2>
  );
};
