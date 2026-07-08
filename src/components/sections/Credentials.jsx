import Container from "../Container";
import { FadeInUp } from "../ui/TextReveal";
import { certifications } from "@/data/site";

export default function Credentials() {
  return (
    <section id="credentials" className="py-24 md:py-32 relative">
      <Container>
        <FadeInUp>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
            § 03 — Credentials
          </p>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-fg">
            Certifications
          </h2>
        </FadeInUp>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {certifications.map((c, i) => (
            <FadeInUp key={c.title} delay={i * 0.06}>
              <div className="flex items-center justify-between gap-6 py-5">
                <span className="text-fg/90 text-base md:text-lg">{c.title}</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-subtle whitespace-nowrap">
                  {c.dates}
                </span>
              </div>
            </FadeInUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
