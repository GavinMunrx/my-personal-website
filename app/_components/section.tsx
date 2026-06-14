type SectionProps = {
  eyebrow: string;
  title: string;
  id: string;
  children: React.ReactNode;
};

export function Section({ eyebrow, title, id, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
      <div className="grid gap-8 border-t border-stone-300 pt-10 md:grid-cols-[240px_1fr]">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-stone-950">{title}</h2>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}
