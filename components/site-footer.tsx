import Link from "next/link";

const NAVIGATE_LINKS = [
  { label: "Home", href: "/" },
  { label: "Skill", href: "/skill" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
];

const MORE_LINKS = [
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Download CV", href: "/contact" },
];

const ELSEWHERE_LINKS = ["GitHub", "LinkedIn", "Codeforces"];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#151515] text-white">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr_1fr] md:gap-8">
          <div>
            <Link href="/" className="text-2xl font-semibold tracking-[0.18em] text-white">
              Portfolio
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">
              CSE undergrad at BRAC University, Dhaka. Building small, useful things and chasing a better Codeforces rating.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-white/40">Navigate</p>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              {NAVIGATE_LINKS.map((item) => (
                <li key={item.label}>
                  <Link className="transition-colors hover:text-white" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-white/40">More</p>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              {MORE_LINKS.map((item) => (
                <li key={item.label}>
                  <Link className="transition-colors hover:text-white" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-white/40">Elsewhere</p>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              {ELSEWHERE_LINKS.map((item) => (
                <li key={item}>
                  <a className="transition-colors hover:text-white" href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-4 text-center text-xs text-white/55">
          © 2026 Portfolio. Built with precision.
        </div>
      </div>
    </footer>
  );
}