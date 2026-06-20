const sidebarLinks = [
  "Overview",
  "Leads",
  "Products",
  "Announcements",
  "Resources",
  "Settings"
] as const;

export function DashboardSidebar() {
  return (
    <aside className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md">
      <p className="text-xs uppercase tracking-[0.32em] text-cyan-300">Admin CMS</p>
      <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl text-white">
        Dashboard Navigation
      </h2>
      <div className="mt-6 space-y-3">
        {sidebarLinks.map((link) => (
          <div key={link} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200/80">
            {link}
          </div>
        ))}
      </div>
    </aside>
  );
}
