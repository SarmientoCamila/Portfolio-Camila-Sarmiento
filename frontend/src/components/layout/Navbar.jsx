import { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useDarkMode } from "../../hooks/useDarkMode";

export default function Navbar() {
  const [dark, setDark] = useDarkMode();
  const [open, setOpen] = useState(false);

  return (
    <header className="
      sticky top-0 z-50
      bg-white/80 dark:bg-slate-900/80
      backdrop-blur border-b
      border-slate-200 dark:border-slate-700
    ">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <span className="font-semibold">Camila.dev</span>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#projects" className="hover:text-slate-500 transition">
            Proyectos
          </a>
          <a href="#contact" className="hover:text-slate-500 transition">
            Contacto
          </a>

          {/* Dark mode toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-xl bg-slate-200 dark:bg-slate-800"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile buttons */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-xl bg-slate-200 dark:bg-slate-800"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button onClick={() => setOpen(true)}>
            <Menu />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute top-0 right-0 h-full w-64
                bg-white dark:bg-slate-900
                p-6 flex flex-col gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="self-end"
                onClick={() => setOpen(false)}
              >
                <X />
              </button>

              <a href="#projects" onClick={() => setOpen(false)}>
                Proyectos
              </a>
              <a href="#contact" onClick={() => setOpen(false)}>
                Contacto
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
