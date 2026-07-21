import { BLOG_POSTS } from "@/lib/data/blog";

export function BlogView() {
  return (
    <section id="blog" className="bg-background">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="mb-14">
          <p className="mb-3 text-xs font-semibold tracking-[0.15em] text-muted-foreground">
            // BLOG
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Notes & Write-ups
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
            I write when I get stuck on something long enough to learn from it. Mostly data
            structures, competitive programming, system design, and software engineering experiences.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <a
              key={post.title}
              href={post.link}
              className="group block rounded-xl border border-border bg-card transition-colors hover:border-border/60"
            >
              <div className="aspect-[16/9] overflow-hidden rounded-t-xl border-b border-border bg-muted">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{post.date}</span>
                  <span className="text-border">·</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="mb-2 text-sm font-semibold leading-snug text-foreground transition-colors group-hover:text-foreground/80">
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  Read the post →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
