const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Now", href: "#now" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-black/10 bg-stone-50/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a className="font-mono text-sm font-semibold uppercase tracking-[0.18em]" href="#">
          Gavin Munro
        </a>
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-1 text-sm text-stone-700 sm:gap-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  className="rounded-full px-3 py-2 transition hover:bg-stone-200 hover:text-stone-950"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
