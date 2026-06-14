const links = [
  { label: "Email", href: "mailto:gavin@example.com" },
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
];

export function SocialLinks() {
  return (
    <ul className="grid gap-3 sm:grid-cols-3">
      {links.map((link) => (
        <li key={link.label}>
          <a
            className="flex min-h-16 items-center justify-between rounded-lg border border-stone-300 bg-white px-4 font-medium text-stone-900 transition hover:border-teal-700 hover:text-teal-800"
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
          >
            {link.label}
            <span aria-hidden="true">-&gt;</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
