export function HeroSection() {
  return (
    <section id="home" className="bg-muted">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-6 md:grid-cols-2 md:gap-14 lg:px-8 lg:py-28">
        <div>
          <p className="mb-3 text-xs font-semibold tracking-[0.15em] text-muted-foreground">
            // INTRODUCTION
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            CSE Undergraduate
            <br />
            <span className="text-muted-foreground/60">&amp; Full-Stack Developer</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Final-year CSE student at BUET, passionate about backend development and competitive
            programming.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/80"
            >
              View my projects
              <span aria-hidden="true">↗</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              Download CV
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-border pt-8">
            <div>
              <p className="text-4xl font-bold text-foreground">3.78</p>
              <p className="mt-1 text-sm text-muted-foreground">CGPA / 4.00</p>
            </div>
            <div className="border-x border-border px-4">
              <p className="text-4xl font-bold text-foreground">1650</p>
              <p className="mt-1 text-sm text-muted-foreground">Codeforces Rating</p>
            </div>
            <div className="pl-4">
              <p className="text-4xl font-bold text-foreground">04</p>
              <p className="mt-1 text-sm text-muted-foreground">Shipped Projects</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            src="/image/sweer1.jpeg"
            alt="Portrait of Tanvir"
            className="mx-auto w-full max-w-[480px] rounded-2xl border border-border object-cover"
          />
        </div>
      </div>
    </section>
  );
}
