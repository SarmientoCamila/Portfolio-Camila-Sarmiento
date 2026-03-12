
export function Button({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`rounded-xl bg-slate-900 px-5 py-2 text-white font-medium hover:bg-slate-700 transition ${className}`}
    >
      {children}
    </button>
  );
}

