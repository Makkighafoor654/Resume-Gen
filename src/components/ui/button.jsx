import React from "react";
import clsx from "clsx";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className,
  ...props
}) => {
  // Tailwind styles based on variant and size
  const baseStyles = "inline-flex items-center justify-center font-medium rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    outline: "border border-gray-600 text-gray-800 hover:bg-gray-100",
    danger: "bg-red-600 text-white hover:bg-red-700",
    ghost: "hover:bg-gray-200"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
