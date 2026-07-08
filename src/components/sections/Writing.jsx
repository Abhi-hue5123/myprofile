import Container from "../Container";
import BorderBeam from "../ui/BorderBeam";
import { FadeInUp } from "../ui/TextReveal";
import { writing } from "@/data/site";

export default function Writing() {
  return (
    <section id="writing" className="py-24 md:py-32 relative">
      <Container>
        <FadeInUp>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
            § 06 — Writing
          </p>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-fg">
            Notes from the trenches
          </h2>
          <p className="mt-3 text-muted">Technical deep-dives on data engineering, on the way.</p>
        </FadeInUp>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {writing.map((p, i) => (
            <FadeInUp key={p.title} delay={i * 0.08}>
              <PostCard post={p} />
            </FadeInUp>
          ))}
        </div>
      </Container>
    </section>
  );
}

function PostCard({ post }) {
  return (
    <div className="group/card relative h-full flex flex-col rounded-2xl border border-border bg-surface/60 backdrop-blur-sm p-6 overflow-hidden">
      <BorderBeam size={150} duration={9} />

      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent">
          {post.category}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-subtle border border-border rounded-full px-2 py-0.5">
          Coming soon
        </span>
      </div>

      <h3 className="mt-4 text-lg md:text-xl font-semibold text-fg">{post.title}</h3>
      <p className="mt-3 text-sm text-muted leading-relaxed line-clamp-4 flex-1">
        {post.description}
      </p>
    </div>
  );
}
