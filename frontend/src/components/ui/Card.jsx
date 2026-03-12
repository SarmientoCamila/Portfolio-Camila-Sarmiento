
export function Card({ children }) {
  return (
    <div className="rounded-2xl border
      bg-white dark:bg-slate-900
      border-slate-200 dark:border-slate-700
      shadow-sm hover:shadow-md transition">
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return <div className="p-6">{children}</div>;
}
