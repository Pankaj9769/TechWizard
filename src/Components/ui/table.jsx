import React from 'react';

export const Table = ({ children }) => {
  return <table className="min-w-full table-auto">{children}</table>;
};

export const TableHeader = ({ children }) => {
  return <thead className="bg-[#D1D8C5]">{children}</thead>;
};

export const TableBody = ({ children }) => {
  return <tbody>{children}</tbody>;
};

export const TableRow = ({ children, className }) => {
  return <tr className={`border-b ${className}`}>{children}</tr>;
};

export const TableHead = ({ children, className }) => {
  return (
    <th
      className={`text-left font-semibold p-4 border-b border-[#D1D8C5] text-[#615EFC] ${className}`}
    >
      {children}
    </th>
  );
};

export const TableCell = ({ children, className }) => {
  return (
    <td className={`p-4 text-[#7E8EF1] ${className}`}>{children}</td>
  );
};
