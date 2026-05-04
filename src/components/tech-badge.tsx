export function TechBadge({ name }: { name: string }) {
  return (
    <span className="inline-block rounded-full border border-transparent bg-zinc-800 px-3 py-1 text-sm font-mono text-zinc-200 transition-colors hover:border-emerald-400/50">
      {name}
    </span>
  );
}
