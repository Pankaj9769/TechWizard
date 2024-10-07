  import React from 'react';

  const Button = ({ children, onClick, className, size = "md", variant = "solid" }) => {
    const baseStyles = "px-4 py-2 rounded-md transition-all";
    const variants = {
      solid: "bg-[#615EFC] hover:bg-[#7E8EF1] text-white",
      outline: "border border-[#7E8EF1] text-[#615EFC] hover:bg-[#7E8EF1] hover:text-white",
      destructive: "bg-[#ff4d4f] text-white hover:bg-[#ff7875]",
    };
    const sizes = {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    };

    return (
      <button
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };

  export default Button;
