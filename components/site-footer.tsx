import Link from "next/link";

const NAVIGATE_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Skill", href: "#skill" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

const MORE_LINKS = [
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
  { label: "Download CV", href: "#contact" },
];

const ELSEWHERE_LINKS: { label: string; href: string }[] = [
  { label: "GitHub", href: "https://github.com/your-github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/your-profile" },
  { label: "Codeforces", href: "https://codeforces.com/profile/your-handle" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card text-card-foreground">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr_1fr] md:gap-8">
          <div>
            <Link href="/" className="text-2xl font-semibold tracking-[0.18em] text-foreground">
              Portfolio
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
              CSE undergrad at BRAC University, Dhaka. Building small, useful things and chasing a better Codeforces rating.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Navigate</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {NAVIGATE_LINKS.map((item) => (
                <li key={item.label}>
                  <Link className="transition-colors hover:text-foreground" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">More</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {MORE_LINKS.map((item) => (
                <li key={item.label}>
                  <Link className="transition-colors hover:text-foreground" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Elsewhere</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {ELSEWHERE_LINKS.map((item) => (
                <li key={item.label}>
                  <a className="transition-colors hover:text-foreground" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-4 text-center text-xs text-muted-foreground">
          © 2026 Portfolio. Built with precision.
        </div>
      </div>
    </footer>
  );
}