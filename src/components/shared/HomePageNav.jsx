import React, { useEffect } from "react";

const navItems = [
  { label: "Our Services", href: "#services" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Request a Quote", href: "#quote" },
  { label: "Get In Touch", href: "#contact" },
];

const HomePageNav = () => {
  useEffect(() => {
    // Add smooth scroll behavior to the whole document
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <div className="text-white text-base md:text-lg font-semibold tracking-wide px-6 md:px-12 py-4 flex justify-center gap-12 sticky top-0 z-30">
      {navItems.map((item) => (
        <a key={item.href} href={item.href} className="relative pb-1 group">
          {item.label}
          <span className="absolute left-0 -bottom-0.5 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
        </a>
      ))}
    </div>
  );
};

export default HomePageNav;
