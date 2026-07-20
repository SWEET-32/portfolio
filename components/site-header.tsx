"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Skill", href: "#skill" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const SECTIONS = ["home", "skill", "experience", "projects", "blog", "contact"];

export function SiteHeader() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [pillStyle, setPillStyle] = useState<{ width: number; x: number } | null>(null);
  const [mounted, setMounted] = useState(false);
  const listRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  const recalc = (section: string) => {
    const idx = NAV_ITEMS.findIndex((i) => i.href.slice(1) === section);
    const li = itemRefs.current[idx];
    const ul = listRef.current;

    if (li && ul) {
      const ulRect = ul.getBoundingClientRect();
      const liRect = li.getBoundingClientRect();

      setPillStyle({
        x: liRect.left - ulRect.left,
        width: liRect.width,
      });
    }
  };

  useEffect(() => {
    recalc("home");
    requestAnimationFrame(() => setMounted(true));
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY + 100;

      setScrolled(window.scrollY > 10);

      for (let i = 0; i < SECTIONS.length; i++) {
        const el = document.getElementById(SECTIONS[i]);

        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(SECTIONS[i]);

            const li = itemRefs.current[i];
            const ul = listRef.current;

            if (li && ul) {
              const ulRect = ul.getBoundingClientRect();
              const liRect = li.getBoundingClientRect();

              setPillStyle({
                x: liRect.left - ulRect.left,
                width: liRect.width,
              });
            }

            break;
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (section: string) => {
    const el = document.getElementById(section);

    if (el) {
      setActiveSection(section);

      const idx = NAV_ITEMS.findIndex((i) => i.href.slice(1) === section);
      const li = itemRefs.current[idx];
      const ul = listRef.current;

      if (li && ul) {
        const ulRect = ul.getBoundingClientRect();
        const liRect = li.getBoundingClientRect();

        setPillStyle({
          x: liRect.left - ulRect.left,
          width: liRect.width,
        });
      }

      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-neutral-200 bg-white/85 backdrop-blur-md"
          : "border-b border-transparent bg-white"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-6 py-6 sm:px-8 lg:px-12 lg:py-8">
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.2em] text-neutral-900 transition-colors duration-300 hover:text-neutral-500"
        >
          Portfolio
        </Link>

        <nav aria-label="primary" className="hidden md:block">
          <ul
            ref={listRef}
            className="relative flex items-center rounded-full border border-neutral-200 bg-neutral-100/50 p-1"
          >
            <div
              className={`pointer-events-none absolute top-1 bottom-1 rounded-full bg-neutral-900 will-change-transform ${
                mounted ? "transition-all duration-500 ease-out" : ""
              }`}
              style={{
                width: pillStyle?.width ?? undefined,
                transform: pillStyle?.x !== undefined ? `translateX(${pillStyle.x}px)` : undefined,
              }}
            />
            {NAV_ITEMS.map((item, i) => {
              const active = activeSection === item.href.slice(1);

              return (
                <li
                  key={item.label}
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                  className="relative z-10"
                >
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      goTo(item.href.slice(1));
                    }}
                    className={`block rounded-full px-6 py-3 text-sm font-medium whitespace-nowrap transition-colors duration-300 ${
                      active ? "text-white" : "text-neutral-500 hover:text-neutral-900"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            goTo("contact");
          }}
          className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-neutral-800"
        >
          Download CV
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </header>
  );
}
