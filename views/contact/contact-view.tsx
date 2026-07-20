import { CONTACT_LINKS } from "@/lib/data/contact";

export function ContactView() {
  return (
    <section id="contact" className="bg-muted">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="mb-14">
          <p className="mb-3 text-xs font-semibold tracking-[0.15em] text-muted-foreground">
            // CONTACT
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Whether you want to collaborate on a project, discuss tech, or just say hi — I&apos;d
            love to hear from you.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              {link.label}
              <span aria-hidden="true">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
