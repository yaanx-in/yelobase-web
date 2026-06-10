export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center gap-4 px-6 py-24">
      <h1 className="text-4xl font-semibold tracking-tight">Yelobase</h1>
      <p className="text-[var(--color-text-secondary)]">
        Scaffold ready. Design tokens and page sections are built in Phase 2–3
        from the Yelobase Branding Figma file. See <code>docs/DESIGN.md</code>.
      </p>
    </main>
  );
}
