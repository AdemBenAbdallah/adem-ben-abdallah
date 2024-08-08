"use client";

import Link from "next/link";
import { useState } from "react";

const Burge = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="flex flex-col justify-center items-center z-50"
      >
        <span
          className={`bg-slate-200 block transition-transform duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-slate-200 block transition-opacity duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-slate-200 block transition-transform duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <nav
        className={`md:hidden fixed top-0 left-0 h-[100dvh] w-full bg-custom-gradient transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-start pl-10 h-full">
          <ul className="flex flex-col items-start gap-8">
            <li>
              <Link
                href="/"
                className="hover:text-foreground/80 text-lg"
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-foreground/80 text-lg"
                onClick={handleLinkClick}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-foreground/80 text-lg"
                onClick={handleLinkClick}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-foreground/80 text-lg"
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Burge;
