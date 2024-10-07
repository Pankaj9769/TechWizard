import React, { useState } from 'react';

// SVG icons for up and down arrows
const UpArrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="blue" className="w-4 h-4 ">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7 " />
  </svg>
);

const DownArrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="blue" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

export const Accordion = ({ children, type = 'single', collapsible = false, className }) => {
  return <div className={`accordion ${className}`}>{children}</div>;
};

export const AccordionItem = ({ value, className, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`accordion-item ${className}`}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          isOpen,
          setIsOpen,
          value,
        })
      )}
    </div>
  );
};

export const AccordionTrigger = ({ children, isOpen, setIsOpen }) => {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="flex justify-between w-full p-4 font-semibold text-left"
    >
      {children}
      <span>{isOpen ? <UpArrow /> : <DownArrow />}</span>
    </button>
  );
};

export const AccordionContent = ({ children, isOpen }) => {
  return (
    <div className={`overflow-hidden transition-max-height duration-300 ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
      <div className="p-4 border-t border-[#D1D8C5]">{children}</div>
    </div>
  );
};
