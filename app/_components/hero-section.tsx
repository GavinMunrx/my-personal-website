export function HeroSection() {
  return (
    <section className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-20 sm:px-8 md:grid-cols-[1.2fr_0.8fr] md:items-end md:py-28">
      <div>
        <p className="mb-5 font-mono text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
          Personal website in progress
        </p>
        <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] text-stone-950 sm:text-7xl">
          Building a home base for my work, ideas, and experiments.
        </h1>
      </div>
      <div className="border-l-4 border-teal-600 pl-5">
        <p className="text-lg leading-8 text-stone-700">
          I am shaping this into a place that feels useful, personal, and a
          little bit alive. Projects, notes, interests, and contact links will
          all live here.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a className="button-primary" href="#projects">
            See projects
          </a>
          <a className="button-secondary" href="#contact">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
