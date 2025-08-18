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
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cottage-teal-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-cottage-green-hover hover:bg-cottage-burgundy-hover text-cottage-cream-primary shadow-cottage hover:shadow-gothic",
    secondary:
      "border-2 border-cottage-cream-primary text-cottage-cream-primary hover:bg-cottage-cream-primary hover:text-cottage-bg-accent",
    outline:
      "border-2 border-cottage-teal-primary text-cottage-teal-primary hover:bg-cottage-teal-primary hover:text-cottage-bg-accent",
    ghost:
      "text-cottage-cream-secondary hover:text-cottage-teal-primary underline",
    white:
      "bg-cottage-bg-paper/10 hover:bg-cottage-bg-paper/20 text-cottage-teal-primary border-2 border-cottage-teal-primary",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm uppercase tracking-wide",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-4 text-lg",
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
