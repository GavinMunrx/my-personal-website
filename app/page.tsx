import { HeroSection } from "./_components/hero-section";
import { ProjectCard } from "./_components/project-card";
import { Section } from "./_components/section";
import { SiteHeader } from "./_components/site-header";
import { SocialLinks } from "./_components/social-links";

const projects = [
  {
    title: "Personal Website",
    description:
      "The living workspace for this site: a place to learn Next.js, experiment with visual ideas, and publish work.",
    tags: ["Next.js", "React", "Design"],
  },
  {
    title: "Project Two",
    description:
      "Swap this placeholder for something you have built, researched, written, photographed, or explored.",
    tags: ["Placeholder", "Portfolio"],
  },
  {
    title: "Project Three",
    description:
      "Use these cards for polished work or half-built experiments. Personal sites are allowed to show process.",
    tags: ["Ideas", "Work in progress"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-950">
      <SiteHeader />
      <main>
        <HeroSection />

        <Section eyebrow="About" id="about" title="A little context">
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-stone-700">
            <p>
              This is the first real version of the site. The goal is to make a
              home base that can grow with you: simple enough to understand,
              flexible enough to become cooler over time.
            </p>
            <p>
              Each piece below is a React component. Next.js uses the
              <code className="mx-1 rounded bg-stone-200 px-1.5 py-0.5 font-mono text-sm">
                app/page.tsx
              </code>
              file to turn those components into the homepage.
            </p>
          </div>
        </Section>

        <Section eyebrow="Projects" id="projects" title="Things to feature">
          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                description={project.description}
                key={project.title}
                tags={project.tags}
                title={project.title}
              />
            ))}
          </div>
        </Section>

        <Section eyebrow="Now" id="now" title="Current interests">
          <div className="grid gap-4 sm:grid-cols-2">
            {["Learning React", "Designing a personal brand", "Writing more", "Collecting project ideas"].map(
              (item) => (
                <div
                  className="rounded-lg border border-stone-300 bg-white p-5 text-lg font-medium text-stone-800"
                  key={item}
                >
                  {item}
                </div>
              ),
            )}
          </div>
        </Section>

        <Section eyebrow="Contact" id="contact" title="Find me here">
          <SocialLinks />
        </Section>
      </main>
    </div>
  );
}
