import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  href,
  to,
  onClick,
  className = "",
  disabled = false,
  type = "button",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-teal-500 hover:bg-teal-600 text-white shadow hover:shadow-lg",
    secondary:
      "border-2 border-white text-white hover:bg-white hover:text-black",
    outline:
      "border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white",
    ghost: "text-teal-500 hover:text-teal-700 underline",
    white:
      "bg-white/10 hover:bg-white/20 text-teal-500 border-2 border-teal-400",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2 text-sm uppercase tracking-wide",
    lg: "px-8 py-3 text-lg",
    xl: "px-10 py-3 text-lg",
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
