"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Skill", href: "#skill" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skill", "experience", "projects", "blog", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="border-b border-yellow-400 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-5 px-5 py-4 sm:px-6 lg:px-8 lg:py-5">
        <Link href="/" className="text-sm font-medium tracking-[0.2em] text-neutral-900">
          Portfolio
        </Link>

        <nav aria-label="primary" className="hidden md:block">
          <ul className="flex items-center gap-1 rounded-full border border-neutral-200 bg-white p-1.5 shadow-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2.5 text-sm transition-colors",
                    activeSection === item.href.slice(1)
                      ? "bg-neutral-900 text-white"
                      : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
        >
          Download CV
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </header>
  );
}