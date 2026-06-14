type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
};

export function ProjectCard({ title, description, tags }: ProjectCardProps) {
  return (
    <article className="rounded-lg border border-stone-300 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <h3 className="text-xl font-semibold text-stone-950">{title}</h3>
      <p className="mt-3 leading-7 text-stone-700">{description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800"
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
